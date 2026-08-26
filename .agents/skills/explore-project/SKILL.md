---
name: explore-project
description: Investigate and explain how the current monorepo works across apps/web, apps/api, and apps/worker. Use for read-only project exploration, locating features, tracing end-to-end data flow, understanding modules, checking whether a capability already exists, and preparing for architectural changes. Do not modify code.
---

# Explore Project

Use this skill when the goal is to understand the current system rather than implement or fix it.

Typical examples:

- Where is a specific feature implemented?
- How does this module currently work?
- Does the system currently support RAG?
- How does data move from frontend to API to worker?
- Which service owns a specific responsibility?
- What happens after the user performs a specific action?
- Which files would be affected by a future architecture change?
- Is functionality implemented fully, partially, or not at all?
- Where is a particular model, API, queue, job, database interaction, or integration used?

This is a read-only investigation workflow.

Do not modify code, configuration, migrations, schemas, dependencies, or documentation unless the user explicitly asks for a separate implementation task.

## Repository topology

The primary applications are:

- `apps/web` — Next.js frontend.
- `apps/api` — NestJS API/backend.
- `apps/worker` — Python worker and AI-related processing.

Other areas may also be relevant, including:

- shared packages,
- configuration,
- scripts,
- infrastructure,
- schemas,
- generated clients,
- environment examples,
- tests,
- docs.

Do not assume all three applications are relevant to every question.

Start from the user's question and expand scope only where evidence requires it.

## Core objective

Return an evidence-based explanation of the current implementation.

The result should answer:

1. What currently exists?
2. Where is it implemented?
3. How does it work?
4. How do relevant applications/services communicate?
5. What evidence supports the conclusion?
6. What is missing, partial, unclear, or unused?
7. What areas would matter if the user later changes this behavior?

Do not confuse:

- code existing in the repository,
- code actually wired into the runtime,
- partially implemented functionality,
- dead/unused code,
- intended architecture documented but not implemented.

## Read-only rule

This skill is strictly read-only.

Allowed actions:

- Search files.
- Read source code.
- Read configuration.
- Read tests.
- Read package manifests.
- Inspect schemas and contracts.
- Inspect routes and API clients.
- Inspect queue/job definitions.
- Inspect AI pipeline code.
- Inspect environment-variable usage.
- Inspect Git history if useful and available.
- Run safe read-only commands.
- Run tests or static analysis only when they do not modify tracked source files and when they materially help answer the question.

Not allowed:

- Editing source files.
- Refactoring.
- Creating migrations.
- Installing dependencies.
- Changing configuration.
- Writing implementation code.
- Making speculative fixes.

If investigation reveals a problem, report it. Do not fix it unless asked in a separate task.

## Investigation strategy

Do not blindly scan the entire repository.

Translate the user's question into concrete investigation targets first.

Examples:

### Question

"Does the system support RAG?"

Translate into evidence targets such as:

- Document ingestion.
- Parsing/chunking.
- Embedding generation.
- Vector storage/indexing.
- Similarity or semantic retrieval.
- Retrieval query generation.
- Retrieved-context assembly.
- Context injection into an LLM prompt.
- Generation using retrieved context.
- API/frontend entry points.
- Runtime wiring between API and worker.

### Question

"How does contract screening work?"

Translate into:

- Frontend action/form.
- Frontend API request.
- NestJS route/controller.
- Service/business logic.
- Queue/job/event dispatch.
- Worker task.
- AI/model invocation.
- Result persistence.
- API response/status retrieval.
- Frontend result rendering.

### Question

"Where is authentication handled?"

Translate into:

- Frontend auth/session handling.
- API guards/middleware.
- Token/cookie validation.
- User/role lookup.
- Authorization.
- Worker trust boundary if relevant.

Use this translation internally before exploration.

## Phase 1: Establish the investigation question

Restate internally:

- The exact question being answered.
- What would count as evidence.
- Which application is the likely starting point.
- Which boundaries might need tracing.

Do not ask the user to narrow the request if the repository can answer it.

Ask a clarifying question only when two materially different interpretations would require completely different investigation paths.

## Phase 2: Initial targeted search

Start with targeted repository searches.

Useful search targets include:

- Feature names.
- Route names.
- UI labels.
- API paths.
- DTO names.
- Function/class names.
- Queue names.
- event names.
- model names.
- configuration keys.
- environment variables.
- database entities.
- endpoint strings.
- prompt names.
- embedding/vector/RAG terminology.
- domain-specific terminology from the user's question.

Search both direct names and likely architectural equivalents.

For example, do not conclude that RAG is absent merely because the string `RAG` does not exist.

Also search concepts such as:

- `embedding`
- `vector`
- `similarity`
- `retrieve`
- `retrieval`
- `context`
- `chunk`
- `index`
- `knowledge`
- `document`
- vector database/client names
- AI provider/model integration

The goal of the first search is to identify likely entry points, not to prove the conclusion.

## Phase 3: Decide exploration scope

After the initial search, determine which applications need investigation.

Possible scopes:

### Web only

Use when the question is purely about frontend implementation.

### API only

Use when the capability is owned entirely by the NestJS backend.

### Worker only

Use when the question concerns a Python/AI pipeline with no relevant upstream behavior.

### Cross-application

Use when the behavior crosses application boundaries.

For cross-application questions, trace the actual connections rather than independently summarizing each application.

## Phase 4: Delegate read-only exploration

Use explorer subagents when the question benefits from parallel investigation.

Prefer scoped read-only explorers. When invoking subagents via `invoke_subagent`, set `Model` to `flash_lite` or `flash` (lower model than the primary agent, which runs on 3.6 Flash Medium thinking).

Do not spawn subagents merely to increase agent count.

### Cross-stack investigations

For a question spanning all three applications, a good split is:

#### Explorer: Web

Investigate `apps/web`.

Find:

- User entry point.
- Relevant page/component.
- Form/state/query logic.
- Payload construction.
- API client call.
- Request types.
- Status polling/subscriptions if applicable.
- Result rendering.

Return concise findings with file and symbol references.

Do not edit.

#### Explorer: API

Investigate `apps/api`.

Find:

- Endpoint/controller.
- DTO/input validation.
- Authentication/authorization if relevant.
- Service handling.
- Database access.
- Queue/event/worker dispatch.
- Worker payload construction.
- Result persistence.
- Status/result endpoints.

Return concise findings with file and symbol references.

Do not edit.

#### Explorer: Worker

Investigate `apps/worker`.

Find:

- Worker/job/task entry point.
- Payload/schema handling.
- AI pipeline.
- Model invocation.
- Retrieval or search logic.
- Prompt construction.
- External AI/vector/document services.
- Output structure.
- Callback/result persistence path if present.

Return concise findings with file and symbol references.

Do not edit.

### Parallelism

Run these explorers concurrently when their initial investigation scopes are independent.

The primary agent must later reconcile their findings and verify the connection points.

Do not assume that similarly named structures are connected.

## Phase 5: Trace boundaries explicitly

For every cross-application boundary, identify the actual handoff.

Examples:

### Web -> API

Confirm:

- URL/route.
- Method.
- Request payload.
- Request type/interface.
- Authentication mechanism if relevant.
- Response/status shape.

### API -> Worker

Confirm the real mechanism:

- HTTP.
- Queue.
- Redis.
- Message broker.
- database polling.
- subprocess.
- event bus.
- RPC.
- another mechanism.

Identify:

- Producer.
- Consumer.
- Queue/topic/job name.
- Payload.
- serialization.
- correlation/job ID.
- error/retry behavior when relevant.

### Worker -> API/storage

Determine how results return:

- callback,
- queue result,
- shared database,
- Redis,
- object storage,
- polling,
- direct HTTP,
- another mechanism.

### API -> Web result flow

Determine whether the frontend receives results by:

- synchronous API response,
- polling,
- WebSocket,
- SSE,
- refetch,
- route refresh,
- another mechanism.

Do not describe an end-to-end flow until these handoffs are supported by code evidence.

## Phase 6: Capability analysis mode

When the user asks:

- "Does the system support X?"
- "Do we already have X?"
- "Is X implemented?"

break the capability into its required technical pieces.

Classify each piece as:

- `YES`
- `PARTIAL`
- `NO`
- `UNCLEAR`
- `PRESENT BUT NOT WIRED`

Then determine the overall capability.

Do not reduce the answer to a keyword search.

### Example: RAG

For RAG, inspect separately:

#### Knowledge ingestion

- Can source content/documents enter the system?

#### Text extraction / preprocessing

- Is content parsed or normalized?

#### Chunking

- Is content split into retrievable units?

#### Embeddings

- Are vector embeddings generated?

#### Index/vector storage

- Is there a vector database or searchable vector index?

#### Retrieval

- Is a user/query embedding used to retrieve relevant chunks?

#### Prompt augmentation

- Are retrieved chunks inserted into the LLM context/prompt?

#### Generation

- Does an LLM generate an answer based on retrieved context?

#### Runtime wiring

- Is this path actually invoked from production application flows?

#### User/API exposure

- Can the frontend or API trigger/use this behavior?

An implementation only qualifies as end-to-end RAG when the relevant retrieval and generation pieces are actually connected.

If only some pieces exist, classify it as partial and explain exactly what exists.

## Phase 7: Verify wiring, not just declarations

A file or dependency alone is not proof that functionality is active.

For important claims, trace usage.

Examples:

If a vector DB dependency exists:

- Find where the client is instantiated.
- Find whether it is called.
- Find which runtime path calls it.

If an embedding method exists:

- Find its callers.
- Determine whether generated embeddings are persisted or queried.

If a queue task exists:

- Find the producer.
- Find the consumer.
- Verify matching job/topic names and payload shape.

If an endpoint exists:

- Find whether the frontend actually calls it.

If a frontend API client exists:

- Find the UI path that invokes it.

Classify orphaned or unused code as:

`PRESENT BUT NOT WIRED`

rather than treating it as active functionality.

## Phase 8: Follow data structures

When tracing a flow, inspect the payload itself.

Track meaningful fields across boundaries.

Example:

```text
Web form state
    ↓
Frontend request object
    ↓
NestJS DTO
    ↓
Service input
    ↓
Queue payload
    ↓
Python task schema
    ↓
AI function arguments
```

Note:

- renamed fields,
- dropped fields,
- added defaults,
- transformations,
- serialization,
- IDs used for lookup instead of full objects.

This is especially important when the user asks how a feature works end-to-end.

## Phase 9: Inspect configuration when relevant

For capabilities controlled by configuration, inspect:

- `.env.example`
- runtime config modules
- feature flags
- provider selection
- model names
- URLs
- queue names
- vector database configuration
- storage configuration

Do not expose actual secrets.

Report only variable names and their role.

If a feature exists but is disabled by configuration, state that explicitly.

## Phase 10: Inspect tests as supporting evidence

Tests can help establish intended behavior.

Use them to answer:

- What is expected?
- Which edge cases are covered?
- What integration is assumed?

But do not treat a mocked test as proof that the real runtime integration exists.

Runtime wiring has stronger evidentiary weight than isolated tests.

## Phase 11: Reconcile explorer findings

The primary agent must synthesize all subagent reports.

Check for contradictions.

For cross-stack flows, verify that:

- frontend endpoint matches backend endpoint,
- backend payload matches worker consumer,
- queue/job identifiers match,
- types/field names align,
- returned results map to frontend expectations.

If reports conflict, inspect the relevant files directly.

Do not simply repeat three separate subagent summaries.

The final answer should explain one coherent system.

## Phase 12: Confidence classification

For significant conclusions, use these evidence standards internally.

### Confirmed

Direct code path and wiring were found.

### Strongly indicated

Most of the path exists, but a runtime boundary could not be fully verified.

### Partial

Some required pieces exist but the capability is incomplete.

### Not found

Targeted searches across the relevant areas found no implementation evidence.

### Unclear

The repository does not provide enough evidence to determine the answer safely.

Do not state `NO` when the correct result is `UNCLEAR`.

## Architecture-impact mode

When the user is exploring the current system before a major architecture change, do not design the new architecture automatically.

First document the current state.

Identify:

- Current ownership boundaries.
- Major components.
- Entry points.
- Data flow.
- External dependencies.
- Shared contracts.
- State/storage ownership.
- Queue/event boundaries.
- Tight coupling.
- Cross-service assumptions.
- Configuration dependencies.
- Tests covering the current behavior.
- Likely blast radius of a future change.

Then return affected areas grouped by:

- Definitely affected.
- Likely affected.
- Possibly affected.
- Probably unaffected.

Highlight interfaces that would need preservation or migration.

Do not implement or redesign anything unless the user explicitly asks for that next.

## Module-understanding mode

When asked:

"Explain module X"

return:

### Purpose

What responsibility the module owns.

### Entry points

How it is invoked.

### Main components

Important controllers/services/components/tasks/classes/functions.

### Dependencies

What it calls or relies on.

### Data

What it reads/writes/transforms.

### Flow

The typical execution path.

### External interactions

APIs, queues, DBs, AI providers, storage, etc.

### Consumers

What depends on this module.

### Important constraints

Assumptions, feature flags, coupling, or unusual behavior.

### Relevant files

Key file/symbol references.

Avoid explaining every file if only a handful define the module.

## Feature-location mode

When asked:

"Where is feature X?"

return the shortest useful answer first.

Example:

```text
Feature X is primarily implemented in:

- apps/web/... — UI entry point
- apps/api/... — API/business logic
- apps/worker/... — processing

The end-to-end flow is:
Web -> API -> Worker -> storage -> API -> Web
```

Then explain the relevant files and wiring.

Do not dump every search match.

## Final response format

Adapt the depth to the question.

For substantial cross-stack investigation, use:

### Conclusion

Answer the user's actual question first.

Example:

`The system currently has partial RAG support, not a complete end-to-end RAG flow.`

### Evidence

For capability checks, use a concise table where helpful:

| Capability          | Status  | Evidence |
| ------------------- | ------- | -------- |
| Document ingestion  | YES     | ...      |
| Chunking            | YES     | ...      |
| Embeddings          | NO      | ...      |
| Vector retrieval    | NO      | ...      |
| Prompt augmentation | PARTIAL | ...      |

### Current Flow

Describe the actual end-to-end path.

Example:

```text
Next.js
  -> NestJS endpoint
  -> service
  -> queue
  -> Python worker
  -> AI provider
  -> persisted result
  -> API status endpoint
  -> frontend
```

Include important payload transformations.

### Key Files

List only the files that materially support the explanation.

Use file/symbol references when available.

### Gaps / Unclear Areas

State:

- Missing capability.
- Partial implementation.
- Unwired code.
- Configuration dependency.
- Anything that could not be verified.

### Architecture Impact

Include this section only when relevant.

Summarize which areas would be affected by a future change.

## Output quality rules

- Answer the user's question before providing repository detail.
- Prefer evidence over speculation.
- Trace actual callers and consumers.
- Distinguish implementation from configuration.
- Distinguish available code from actively wired code.
- Keep file lists selective.
- Do not overwhelm the user with every search result.
- Do not suggest implementation changes unless asked.
- Do not edit code.
- Do not claim a runtime behavior is confirmed when only types, comments, or tests support it.
- Explicitly state uncertainty when evidence is incomplete.
