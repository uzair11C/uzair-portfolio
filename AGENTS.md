# Repository Agent Instructions

Apply these instructions to all work in this repository unless a more specific
AGENTS.md file or the user's current instructions override them.

## General

- Inspect relevant code before editing.
- Keep changes scoped to the requested work.
- Do not refactor unrelated code.
- Reuse existing architecture and utilities where appropriate.
- Avoid new production dependencies unless genuinely necessary.
- Never claim tests or checks were run if they were not actually run.
- Report assumptions, blockers, and unverified areas clearly.

## Source priority

1. Explicit user instructions for the current task.
2. Ticket requirements and acceptance criteria.
3. More specific AGENTS.md instructions.
4. Existing repository patterns.

## Multi-agent work

- Parallelize read-only exploration and review when useful.
- Avoid multiple agents writing to overlapping files at the same time.
- Keep one primary agent responsible for integrating the final result.

## Verification

- Verify changed behavior, not only compilation.
- Run relevant tests/checks for the affected application.
- Report pre-existing failures separately from failures introduced by the change.

## Web application instructions

Apply this section only to work under `apps/web`.

### Frontend workflow

- For substantial new frontend tickets, features, pages, or modules, use the
  `implement-module` skill when available.
- For numbered QA/review issue lists, use the `resolve-ticket-issues` skill.
- For small clear frontend fixes, give a concise plan and proceed.

### Component reuse

Before implementing UI:

- Inspect the existing component library and nearby features.
- Search for similar screens and established patterns.
- Reuse UI in this order:
    1. Existing feature component.
    2. Shared design-system component.
    3. Composition of existing primitives.
    4. New component only when required.

- Reuse existing hooks, services, types, validators, state patterns, and query
  patterns where appropriate.
- Avoid creating parallel abstractions.

### Figma

- Treat the supplied Figma node as the primary visual source when accessible.
- Use screenshots as additional context or fallback.
- Match layout, spacing, typography, states, and responsive behavior while
  respecting the existing design system.

### Backend boundary

- Read backend code when necessary to understand an API or contract.
- Do not edit `apps/api`, `apps/worker`, database schema, migrations, or backend
  business logic without explicit user approval.
- If frontend work exposes a backend gap, report it and continue independent
  frontend work where possible.

### Frontend verification

For relevant frontend changes:

- Run typecheck.
- Run lint.
- Run targeted tests.
- Run build when appropriate.
- Verify the UI in-browser when tooling allows.
- Compare against Figma when applicable.
- Check relevant loading, empty, error, validation, disabled, and responsive states.

### Testing

After each work, list:

- What you did
- Where you did
- Test cases, to test the changes, frontend and backend
