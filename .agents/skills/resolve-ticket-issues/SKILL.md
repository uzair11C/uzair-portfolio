---
name: resolve-ticket-issues
description: Resolve a numbered list of frontend QA, review, or ticket issues under apps/web using focused triage, minimal root-cause fixes, per-issue verification, and one independent review pass. Use when explicitly requested with $resolve-ticket-issues or when the user provides issue IDs such as 21.1, 21.2, and 21.4. Do not use for substantial new feature implementation.
---

# Resolve Ticket Issues

Use this skill for fixing an existing frontend implementation under `apps/web`.

Typical input:

`21.1 issue text`

`21.2 issue text + optional user clarification`

`21.4 issue text`

The user does not need to rewrite issues into another format.

Preserve the issue identifiers exactly.

This workflow should remain significantly lighter than `implement-module`.

## Subagent policy

This is intentionally a lighter workflow than `implement-module`.

Use the existing configured project agents in Antigravity:

- `frontend_explorer` for issue triage and root-cause investigation (uses `flash_lite` model).
- `frontend_reviewer` for one independent review after fixes (uses `flash` model).

Subagents must always use lower models than the main agent (which runs on Gemini 3.6 Flash Medium thinking). When invoking subagents via `invoke_subagent`, set `Model` to `flash_lite` or `flash`.

Do not spawn `requirements_reviewer` by default for normal issue-resolution rounds.

Use `requirements_reviewer` (using `flash_lite` model) only when:

- the reported issue conflicts with the original ticket,
- expected behavior is unclear,
- Figma and ticket behavior appear inconsistent,
- or several reported issues depend on interpreting acceptance criteria.

Do not create one subagent per issue by default.

Cluster related issues by root cause first.

The primary agent remains the only code writer.

The goal is:

**triage -> root cause -> minimal fix -> verify each issue -> independent review -> finish**

Do not turn a bug-fix round into a feature rewrite.

## Scope boundaries

Normal write scope:

`apps/web`

Read-only inspection of the following is allowed where necessary:

- `apps/api`
- `apps/worker`
- shared packages
- schemas/types
- API definitions
- monorepo tooling

Do not modify backend or worker code unless the user explicitly approves it.

If an issue requires backend changes:

- identify the backend gap,
- mark that issue as blocked,
- continue with independent frontend issues.

Do not create fake frontend behavior to hide a missing backend capability.

## Phase 1: Parse the issue list

Extract every issue exactly as supplied.

For every issue preserve:

- Issue ID.
- Original issue text.
- Additional user explanation.
- Any explicitly supplied expected behavior.

Do not:

- renumber issues,
- assume missing issue numbers matter,
- drop non-contiguous IDs,
- combine issue IDs in the final report.

Example:

```text
21.1 Dropdown closes when selecting an option.

21.2 Selected filters disappear when navigating back.
Keep filters in URL state.

21.4 Spacing is wrong on mobile.
```

should remain three independently tracked issues:

- `21.1`
- `21.2`
- `21.4`

## Phase 2: Triage before editing

Inspect the issue list and determine whether the issue round is trivial or non-trivial.

### Small/local issue round

If the issues are obviously local and their root cause is clear, the primary agent may triage them directly.

Do not spawn a subagent simply because the workflow supports one.

### Non-trivial issue round

Spawn the configured read-only agent:

`frontend_explorer`

Provide it with:

- The complete original issue list.
- User clarifications.
- Relevant ticket context, if supplied.
- Relevant Figma/screenshots, if supplied.

Ask it to inspect the implementation and report for every issue:

- Affected file/component.
- Expected behavior.
- Current behavior.
- Likely root cause.
- Whether multiple issues share that root cause.
- Whether the issue appears frontend-only.
- Whether a backend/API dependency exists.
- Smallest safe fix area.
- Best verification method.

Ask it specifically to cluster issues that appear to share one underlying defect.

The explorer must not edit code.

The primary agent must evaluate the findings and perform the implementation itself.

### Optional requirement analysis

Do not invoke `requirements_reviewer` for ordinary bugs.

Spawn `requirements_reviewer` only when expected behavior cannot reliably be determined from the issue text and existing implementation.

Examples:

- issue text contradicts the original ticket,
- ticket and Figma disagree,
- user clarification changes expected behavior,
- the reported behavior may actually be intentional,
- multiple plausible implementations exist.

If used, keep it read-only and ask only for the requirement clarification needed to resolve the issue.

## Root-cause clustering

Before editing, group related issues when appropriate.

Example:

```text
21.1 Filter count is stale
21.2 Selected filters reset
21.4 URL does not reflect filter state
```

may all be caused by one state-management bug.

Prefer one root-cause fix over three unrelated patches.

Do not merge issue tracking in the final report, though. Each original issue ID must still receive its own verification result.

## Phase 3: Give a short fix plan

Before editing, provide a concise summary containing:

- Root cause or likely root cause.
- Relevant files/components.
- Which issues appear related.
- Any backend/API blocker.

For normal frontend fixes, proceed after this summary.

Do not wait for approval unless:

- the user requested approval,
- behavior is materially ambiguous,
- or backend/worker changes are required.

## Phase 4: Handle unclear or unreproducible issues

Do not make speculative changes simply because an issue was reported.

Use:

- Ticket requirements.
- User clarification.
- Figma.
- Existing application behavior.
- Nearby similar features.

If the current code already satisfies the stated requirement, classify the issue as:

`ALREADY SATISFIED`

If the issue cannot be reproduced and there is no clear defect in the implementation, classify it as:

`NOT REPRODUCIBLE`

If important requirements are missing and different interpretations would result in materially different behavior, classify it as:

`BLOCKED - MISSING REQUIREMENT`

Ask the user only when that missing information actually prevents a safe fix.

## Phase 5: Implement minimal root-cause fixes

Use one primary writer.

Do not let multiple agents edit overlapping files at the same time.

For each fix:

- Address the root cause where practical.
- Keep the change localized.
- Preserve unrelated behavior.
- Reuse existing components/hooks/utilities/services.
- Follow existing architecture.
- Avoid new abstractions unless necessary.
- Avoid production dependencies unless necessary.
- Avoid unrelated cleanup.
- Avoid broad refactors.
- Avoid reformatting unrelated code.
- Preserve accessibility and responsive behavior.

The goal is not to make the module "better in general."

The goal is to correctly resolve the reported issues without destabilizing working behavior.

## Backend-dependent issues

If an issue requires a backend or API change:

Do not modify:

- `apps/api`
- `apps/worker`
- database schema
- migrations
- API contracts

without explicit approval.

Mark the issue:

`BLOCKED - BACKEND APPROVAL`

Include:

- What frontend behavior is blocked.
- What backend/API capability is missing.
- What backend change would likely be required.

Continue fixing other independent frontend issues.

## Phase 6: Verify each issue individually

Every original issue ID must receive independent verification.

Do not consider the batch complete simply because tests pass globally.

For each issue determine the strongest practical verification method.

Examples:

- Reproduce the original interaction.
- Verify the reported visual issue.
- Exercise the exact user flow.
- Verify URL state.
- Verify query/cache state.
- Verify form validation.
- Verify responsive behavior.
- Verify loading/error state.
- Run a targeted test.
- Add regression coverage when appropriate.

Track results per issue.

Example internal tracking:

```text
21.1 -> FIXED -> manually verified dropdown remains open
21.2 -> FIXED -> navigation preserves URL filters
21.4 -> FIXED -> verified at mobile breakpoint
```

Never claim an issue was verified if it was only inferred from code inspection.

## Phase 7: Shared verification

After issue-specific verification, run relevant shared checks.

Examples:

- Typecheck.
- Lint.
- Targeted tests.
- Relevant integration tests.
- Build.

Use existing project commands.

Prefer targeted verification before broad repository-wide verification.

If a shared check fails due to an existing unrelated problem:

- report it separately,
- do not modify unrelated code merely to make the command green.

Never claim a check was run when it was not.

## Phase 8: Independent review

After all possible fixes and issue-level verification are complete, determine whether an independent review adds value.

For a meaningful issue round, spawn:

`frontend_reviewer`

Do not spawn it for an extremely trivial fix unless review is specifically requested.

Provide the reviewer with:

- The exact original issue list.
- User clarifications.
- Final diff.
- Relevant surrounding implementation.
- Per-issue verification results.

Ask it to verify:

### Issue coverage

- Every original issue ID was addressed.
- The fix matches expected behavior.
- The root cause was fixed rather than merely hidden.
- Related issues were handled consistently.

### Regression risk

- Existing working behavior was not broken.
- Shared components were not unintentionally changed.
- State ownership remains correct.
- Responsive behavior remains correct.
- Accessibility remains intact.

### Scope

- No unnecessary files were modified.
- No unrelated refactoring was introduced.
- No duplicate component or utility was created unnecessarily.

### Verification quality

- Each issue has meaningful evidence.
- Important regression coverage is not missing.

Return only actionable findings.

Map findings back to original issue IDs where possible.

Rank them:

- Critical
- Important
- Minor

The reviewer must not edit code.

The primary agent evaluates the findings and applies valid in-scope fixes.

Re-run only the verification affected by those fixes unless broader validation is justified.

## Phase 9: Apply valid review findings

Evaluate reviewer findings rather than blindly applying them.

Fix valid Critical and Important findings that remain within issue scope.

Fix Minor findings only when they are clearly useful and low-risk.

Do not widen the ticket into unrelated cleanup.

After review fixes:

- re-run the specific affected verification,
- re-run relevant shared checks where needed.

Do not start an endless review cycle.

## Phase 10: Final sanity check

Inspect the final diff for:

- Accidental changes.
- Debug logs.
- Temporary code.
- Commented-out implementations.
- Unrelated formatting.
- Unrelated refactors.
- Backend/worker modifications without approval.
- New TODOs that leave a reported issue incomplete.

## Required final issue statuses

Every original issue ID must appear exactly once in the final report with one of these statuses:

- `FIXED`
- `ALREADY SATISFIED`
- `NOT REPRODUCIBLE`
- `BLOCKED - BACKEND APPROVAL`
- `BLOCKED - MISSING REQUIREMENT`

Do not invent additional statuses unless the user specifically asks for them.

## Final response format

Start with the issue results.

Example:

```text
21.1 - FIXED
Fixed dropdown state handling. Verified by reproducing the selection flow.

21.2 - FIXED
Filter state now persists through URL navigation. Verified navigation forward/back.

21.4 - BLOCKED - BACKEND APPROVAL
The API does not return the required field. Backend contract change is required.
```

Then add:

### Verification

List only checks actually performed.

Example:

- Targeted interaction checks: PASS
- Typecheck: PASS
- Lint: PASS
- Relevant tests: PASS

### Review

Mention meaningful independent-review findings that were fixed.

If none remain, say so.

### Remaining

List blockers or limitations.

If all issues are resolved:

`All reported frontend issues are resolved with no known remaining blockers.`

### Changes Made

- What was wrong
- What you did to fix it
- Where you did

### Testing

Test cases, to test the changes, frontend and backend (if possible)
