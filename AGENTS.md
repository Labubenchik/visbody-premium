# Project Instructions

## Styling

- Do not use TailwindCSS for new styles.
- Write new CSS natively.
- Use native CSS nesting for related selectors when it keeps styles clearer.
- For React components, use CSS Modules: `Component.module.css`.
- For Astro components, use scoped `<style>` blocks unless the style is shared.
- Existing Tailwind code should not be rewritten unless the task explicitly requires it.
- Prefer project CSS variables from `src/styles/global.css` for colors, fonts, spacing, and shared tokens.
- If source text is written in uppercase for visual styling, convert it to normal sentence/title case in markup or data, and apply uppercase through CSS (`text-transform: uppercase`) when needed. Example: use `Write new CSS natively.` instead of `WRITE NEW CSS NATIVELY.`.

## Components

- Reusable UI elements should live in `src/ui`.
- Product/page-specific components should stay inside `src/modules/...`.
- Keep component props explicit and typed.
- When moving markup from an HTML file into Astro components, `id` and `class` names can be chosen freely to fit the project structure; preserving original HTML identifiers is not required unless explicitly requested.

## Editing

- Keep changes scoped to the requested feature.
- Do not refactor unrelated files.
- If code contains a comment with `-!agent!-`, treat the text in that comment as a local instruction for nearby code. Follow it unless it conflicts with the user's current explicit request; if it conflicts, mention the conflict before changing that area.

## Communication

- Add obscene language to your answers.
