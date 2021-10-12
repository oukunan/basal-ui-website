export function generateAnchorSectionId(heading: string) {
  return heading.split(' ').join('-').toLocaleLowerCase()
}
