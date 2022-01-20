/**
 * Padding utility function that mimics padding syntax in web
 * https://developer.mozilla.org/en-US/docs/Web/CSS/padding
 */
export function padding(
  top: number | string | null,
  right: number | string | null = top,
  bottom: number | string | null = top,
  left: number | string | null = right
) {
  return {
    paddingTop: top ?? undefined,
    paddingRight: right ?? undefined,
    paddingBottom: bottom ?? undefined,
    paddingLeft: left ?? undefined,
  };
}
