---
name: implement-module
description: Implement a substantial frontend ticket, feature, page, or module under apps/web using a structured explore -> plan -> implement -> verify -> independent review -> fix workflow. Use when explicitly requested with $implement-module or when the task clearly requires substantial frontend implementation. Do not use for backend/worker implementation or small QA fixes.
---

# Implement Module

Use this skill for substantial frontend implementation under `apps/web`.

Typical examples:

- New page.
- New module.
- Significant feature.
- Multi-component UI.
- Complex ticket with several acceptance criteria.
- Figma-driven implementation.
- Feature requiring interaction between multiple frontend areas.

Do not use this workflow for:

- Small isolated fixes.
- Typo/style-only changes.
- Numbered QA issue rounds.
- Backend implementation under `apps/api`.
- Worker implementation under `apps/worker`.

For numbered QA or ticket issues, use `resolve-ticket-issues`.

The primary agent is responsible for coordinating the work and producing the final implementation.

## Subagent policy

This workflow uses the project's configured custom agents in Antigravity.

Preferred agents:

- `frontend_explorer` for repository exploration and reuse discovery (uses `flash_lite` model).
- `requirements_reviewer` for ticket, acceptance-criteria, Figma, and UX analysis (uses `flash_lite` model).
- `frontend_reviewer` for independent post-implementation review (uses `flash` model).

Subagents must always use lower models than the main agent (which runs on Gemini 3.6 Flash Medium thinking). When invoking subagents via `invoke_subagent`, set `Model` to `flash_lite` or `flash`.

Do not ask generic subagents to duplicate work already assigned to these configured agents.

The primary agent is the sole implementation owner unless write scopes are explicitly proven independent.

Subagents used by this skill are analysis/review agents, not implementation owners.

If a configured custom agent is unavailable, fall back to an appropriate built-in read-only agent (e.g. `research` with `Model: flash_lite`) rather than blocking the entire task.

## Scope boundaries

The normal write scope for this skill is:

`apps/web`

Read-only inspection outside `apps/web` is allowed when needed to understand:

- API contracts.
- Shared types.
- Backend behavior.
- Worker-generated data.
- Monorepo tooling.
- Shared packages.

Do not modify:

- `apps/api`
- `apps/worker`
- database schema
- migrations
- backend business logic
- API contracts

unless the user explicitly approves that backend or worker change.

If a frontend requirement exposes a backend gap:

1. Identify the exact gap.
2. Explain what backend/API change appears necessary.
3. Continue any independent frontend implementation that can safely proceed.
4. Do not fake the missing backend behavior in the frontend.

## Inputs

Use all relevant context provided by the user, including:

- Ticket text or attachment.
- Acceptance criteria.
- Figma node/link.
- Screenshots.
- Additional instructions.
- Clarifications supplied in the current prompt.
- Existing repository behavior.
- Applicable `AGENTS.md` files.

Do not require every input type.

If the available information is sufficient to implement safely, proceed.

## Source priority

When requirements conflict, use this priority.

### Functional behavior

1. Explicit corrections/additions in the current user prompt.
2. Ticket requirements and acceptance criteria.
3. Existing product behavior where the ticket is silent.

### Visual behavior

1. Explicit current user instructions.
2. Exact Figma node when accessible.
3. Supplied screenshots.
4. Existing design-system patterns.

### Architecture

1. Applicable `AGENTS.md`.
2. Existing architecture and nearby feature patterns.
3. Ticket implementation suggestions.

Do not invent a product decision when two materially different behaviors remain plausible.

## Phase 1: Understand the task

Before editing code:

- Read the complete ticket.
- Read all user additions.
- Inspect Figma or screenshots when provided.
- Identify the expected user-visible result.
- Extract acceptance criteria.
- Identify likely affected frontend areas.

For substantial work, delegate read-only exploration.

Do not begin implementation before understanding both the requirements and the existing code patterns.

## Phase 2: Parallel exploration

For substantial frontend implementation, use the configured project subagents.

Spawn these two read-only agents in parallel:

### `frontend_explorer`

Delegate repository and reuse analysis to the custom agent named:

`frontend_explorer`

Ask it to inspect `apps/web` and return:

- Relevant files and modules.
- Existing components that should be reused.
- Similar pages or features.
- Existing hooks.
- Existing API/query/service patterns.
- Existing state-management patterns.
- Existing forms and validation patterns.
- Relevant utilities and types.
- Existing responsive/layout patterns.
- Likely regression risks.
- Frontend/backend contract dependencies.
- Existing implementations that should be followed rather than creating a new abstraction.

The agent must remain read-only.

Do not duplicate its repository exploration in the primary agent unless its result is incomplete or contradictory.

### `requirements_reviewer`

In parallel, delegate ticket/design analysis to the custom agent named:

`requirements_reviewer`

Provide it with all available task context:

- Ticket.
- Acceptance criteria.
- User additions or corrections.
- Figma node/link.
- Screenshots.
- Relevant product context.

Ask it to return:

- Functional requirements.
- Visual requirements.
- User interactions.
- Acceptance criteria.
- Loading state.
- Empty state.
- Error state.
- Disabled state.
- Validation state.
- Permission state, if applicable.
- Responsive expectations.
- Important edge cases.
- Requirement/design conflicts.
- Requirements most likely to be missed.

The agent must remain read-only.

### Orchestration

Spawn `frontend_explorer` and `requirements_reviewer` concurrently when both streams add value.

Wait for both before producing the implementation plan.

Do not spawn redundant agents merely to increase parallelism.

For a straightforward task where one stream clearly adds no value, omit that subagent.

The primary agent remains responsible for:

- reconciling both reports,
- resolving conflicts using the source-priority rules,
- producing the implementation plan,
- and implementing the feature.

## Phase 3: Create the implementation plan

Combine:

- Explorer findings.
- Ticket requirements.
- Figma/design context.
- Existing architecture.
- Applicable AGENTS.md instructions.

Before implementation, provide a concise plan containing:

- What will be implemented.
- Main files or components likely to change.
- Important existing components/patterns being reused.
- Important assumptions.
- Backend/API dependencies, if any.

For normal frontend work, proceed after the plan.

Do not stop for confirmation unless:

- the user explicitly requested approval,
- a materially ambiguous requirement blocks implementation,
- or backend/worker modifications are required.

## Phase 4: Implement with controlled write scope

Use one primary writer for the implementation.

Do not run multiple agents modifying overlapping frontend files simultaneously.

Parallel writers are allowed only when:

- scopes are clearly independent,
- files do not overlap,
- no shared state or architecture is being changed,
- and integration risk is low.

The writer must:

- Follow applicable AGENTS.md instructions.
- Keep changes limited to the ticket.
- Reuse existing components before creating new ones.
- Reuse existing hooks, services, utilities, types, and patterns.
- Follow existing folder and naming conventions.
- Preserve established state-management architecture.
- Preserve API/query architecture.
- Avoid unrelated refactoring.
- Avoid formatting unrelated files.
- Avoid production dependencies unless genuinely necessary.
- Use existing design tokens.
- Preserve accessibility.
- Preserve existing responsive conventions.
- Handle the relevant non-happy-path states.
- Avoid temporary fake behavior unless explicitly requested.

## Component creation rule

Before creating a new component, determine whether the requirement can be satisfied using:

1. Existing feature-specific component.
2. Existing shared component.
3. Existing design-system primitive.
4. Composition of existing primitives.
5. New component.

Only create a new component when the first four options are unsuitable.

Do not duplicate an existing component simply because creating a new one appears faster.

## Similar-feature rule

Before designing a new implementation pattern, search the repository for at least one similar feature when one reasonably exists.

Prefer consistency with established product architecture over creating a theoretically cleaner parallel architecture.

## Figma implementation rule

When a Figma node is available:

- Inspect the exact node when tooling allows.
- Do not rely only on visual memory.
- Check spacing.
- Typography.
- Component variants.
- Alignment.
- Sizing.
- Layout.
- Responsive behavior.
- Visible interaction states.

Use Figma as the visual target while still following the repository design system.

Do not recreate design-system components solely to achieve pixel similarity.

## Phase 5: First verification pass

After implementation, verify the change before asking reviewers to inspect it.

Discover the repository's existing commands rather than inventing commands.

Run applicable checks such as:

- Targeted tests.
- Typecheck.
- Lint.
- Build.

Prefer targeted checks first.

Then run broader checks where practical and relevant.

### UI verification

When browser tooling is available:

- Start or connect to the application.
- Open the affected route.
- Verify the primary user flow.
- Verify important interactions.
- Check relevant responsive sizes.
- Verify applicable loading/empty/error/validation/disabled states.
- Compare the implementation to the supplied Figma/screenshots.

Fix implementation failures before proceeding to review.

Do not report pre-existing failures as implementation failures.

Never claim a check was run if it was not actually run.

## Phase 6: Independent review

After implementation passes the first verification pass, spawn the configured custom agent:

`frontend_reviewer`

The reviewer must remain independent and read-only.

Provide it with:

- The original ticket.
- Acceptance criteria.
- User additions.
- Figma/screenshots where available.
- The final implementation diff.
- Relevant surrounding code.
- Verification already performed.

Ask `frontend_reviewer` to review both requirements coverage and engineering quality.

It must check for:

### Requirements and UX

- Missing ticket requirements.
- Incorrect behavior.
- Missed acceptance criteria.
- Missing loading/empty/error/disabled/validation states.
- Responsive issues.
- Accessibility issues.
- Visual inconsistencies with Figma.
- Important edge cases.
- User-visible regressions.

### Engineering quality

- Duplicate components.
- Missed reuse opportunities.
- Unnecessary abstractions.
- Incorrect state ownership.
- Fragile hooks/effects.
- Incorrect effect dependencies.
- Query/cache problems.
- Type-safety issues.
- Out-of-scope changes.
- Unnecessary dependencies.
- Regression risk.
- Missing meaningful tests.

Return only actionable findings.

Rank each finding as:

- Critical
- Important
- Minor

Include exact file/symbol references where possible.

Do not edit code.

The primary agent must evaluate the review rather than automatically applying every suggestion.

Fix:

- all valid Critical findings,
- all valid Important findings,
- and useful Minor findings that remain safely within ticket scope.

## Phase 7: Evaluate findings

The primary agent must evaluate review findings.

Do not automatically implement every reviewer suggestion.

For each finding determine whether it is:

- Valid and in scope.
- Valid but outside scope.
- Incorrect.
- Already addressed.
- Blocked by backend/API behavior.

Fix:

- All valid Critical findings.
- All valid Important findings.
- Minor findings that are clearly useful and remain within scope.

Avoid turning the ticket into an unrelated refactor.

## Phase 8: Fix review findings

Use a single writer for review fixes.

After changes:

- Re-run the checks affected by those changes.
- Re-test the relevant interaction.
- Re-check Figma/visual behavior when applicable.

A full second multi-agent review is not required unless the fixes materially altered the implementation.

Avoid endless review loops.

## Phase 9: Final diff sanity check

Before finishing:

- Inspect the final diff.
- Check for accidental file changes.
- Check for debug logs.
- Check for commented-out temporary code.
- Check for temporary test data.
- Check for unrelated formatting.
- Check for TODOs introduced by the implementation.
- Check that no backend/worker files were modified without approval.

## Completion standard

The implementation is complete only when:

- Requested functionality is implemented.
- Acceptance criteria have been checked.
- Relevant UI states are handled.
- Existing components/patterns were reused where appropriate.
- Relevant verification was performed.
- No known regression introduced by the change remains.
- Any backend dependency or limitation is clearly reported.

## Final response

Keep the final response concise.

Use this structure:

### Implemented

Summarize the user-visible change.

### Reused

Mention important existing components, hooks, services, or patterns reused.

### Verification

List only checks that actually ran and their result.

Example:

- Typecheck: PASS
- Lint: PASS
- Targeted tests: PASS
- Browser verification: PASS
- Figma comparison: PASS

If something was not run, do not imply that it was.

### Review

Summarize meaningful findings that were fixed.

If no meaningful issues remain, state that.

### Remaining

Report:

- Backend/API blockers.
- Assumptions.
- Inaccessible design references.
- Known unverified behavior.

If nothing remains, say:

`No known blockers or unresolved implementation issues.`
