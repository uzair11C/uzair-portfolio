# Default Agent Instructions (Antigravity & Codex)

Apply these instructions to all work in this repository unless the user gives
explicitly conflicting instructions.

## Planning and communication

Before implementation, always tell the user:

1. The implementation plan.
2. What will be changed and why.
3. The expected pros and cons or trade-offs.
4. Where the work will be performed (relevant files, components, services, or
   modules).

Keep this clear and proportionate to the request. For review-only work, state
the investigation plan and do not make changes unless requested.

## Frontend work

Before designing or implementing frontend UI, inspect the existing component
library and nearby features for reusable components, patterns, and styling.
Reuse them where suitable rather than recreating components from scratch,
unless the user explicitly asks for a new bespoke component or design.

## Backend work

Never make backend changes automatically. Before editing backend code, first
list for the user:

1. The backend gaps that need to be addressed.
2. The proposed implementation plan, including what will change and why.
3. The pros, cons, and relevant trade-offs.
4. The backend files, services, APIs, schema, and/or modules that would be
   changed.

Wait for the user's explicit approval before making backend changes. Read-only
inspection, analysis, and reporting are allowed without approval.

After every backend change, explicitly state whether a new database migration
is required. If it is required, name the migration and explain why; if it is
not required, say so plainly.

## Subagent Model Rule

Subagents must always use lower models than the main agent (which is on Gemini 3.6 Flash Medium thinking).
When launching or defining subagents:
- Use `flash_lite` or `flash` with low reasoning effort.

## Testing

* Always run all possible test cases against implemented changes.
* Always check for all cases and edge cases that may arise to ensure smooth and bug free implementation.