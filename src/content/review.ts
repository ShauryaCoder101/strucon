/**
 * CLIENT-REVIEW ANNOTATIONS
 *
 * This flag gates the "TBD" review annotations only — the markers that tell the client which
 * content is still owed. It never gates real content: no client-supplied copy, image, or page
 * is added or removed by this switch. Flipping it to `false` at go-live must leave the site
 * exactly as it reads today, minus every TBD panel, note and chip.
 *
 * Typed as `boolean` (not the literal `true`) on purpose: it keeps `REVIEW_MODE === false`
 * branches type-checkable so the go-live flip is a one-character edit with no compiler fallout.
 */
export const REVIEW_MODE: boolean = true;
