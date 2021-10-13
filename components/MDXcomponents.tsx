import Text from './Text'
import CodeBlock from './CodeBlock'
import { generateAnchorSectionId } from '../lib/anchorSection'
import * as Demos from '../demo'

export const components = {
  h1: (props) => <Text as="h1" css={{ fontSize: '$8' }} {...props} />,
  h2: (props) => (
    <Text
      id={generateAnchorSectionId(props.children)}
      data-heading=""
      as="h2"
      css={{ fontSize: '$6', scrollMarginTop: '$9' }}
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      id={generateAnchorSectionId(props.children)}
      data-heading=""
      as="h3"
      css={{ fontSize: '$4', scrollMarginTop: '$9' }}
      {...props}
    />
  ),
  pre: (props) => <>{props.children}</>,
  code: CodeBlock,
  ...Demos,
}
