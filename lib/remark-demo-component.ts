import fs from 'fs'
import path from 'path'
import { visit } from 'unist-util-visit'

const ROOT_PATH = process.cwd()
const DEMO_PATH = 'components/demos'

export default function remarkDemoComponent() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (!node.meta) {
        return
      }

      const [_, templateName]: [any, string | null] =
        node.meta && node.meta.split('component=')

      if (!templateName) {
        return
      }

      const templatePath = path.join(
        `${ROOT_PATH}/${DEMO_PATH}/${templateName.replace(/"/g, '')}.tsx`
      )

      node.value = fs.readFileSync(path.join(templatePath), 'utf8')
    })
  }
}
