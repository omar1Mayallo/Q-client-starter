/**
 * Regular expression to check if a string represents an image file based on its extension.
 * Matches file extensions: jpg, jpeg, png, gif, webp, svg (case-insensitive).
 */
export const IMAGE_REGEX: RegExp = /\.(jpg|jpeg|png|gif|webp|svg)$/i;

/**
 * Regular expression to check if a string ends with "/list".
 * Matches strings ending with "/list".
 */
export const IS_END_LIST_REGEX: RegExp = /\/list$/;
