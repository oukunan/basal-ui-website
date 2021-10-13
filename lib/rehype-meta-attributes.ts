// https://github.com/wooorm/xdm#syntax-highlighting-with-the-meta-field
import { visit } from 'unist-util-visit'

export default function rehypeMetaAttributes() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      let match
      const regex = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

      if (node.tagName === 'code' && node.data && node.data.meta) {
        regex.lastIndex = 0 // Reset regex.

        while ((match = regex.exec(node.data.meta))) {
          node.properties[match[1]] = match[2] || match[3] || match[4] || ''
        }
      }
    })
  }
}
