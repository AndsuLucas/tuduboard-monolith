/**
 * Slice long notes > 200 and add
 * "[..]" on the end.
 *
 * @todo ADD "SHOW MORE"
 */
export const slicedNotes = (notes: string): string => {
  if (notes.length <= 200) {
    return notes;
  }

  return notes.slice(0, 200) + '[...]';
}
