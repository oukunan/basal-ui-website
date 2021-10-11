import Text from './Text'
import CodeBlock from './CodeBlock'

export const components = {
  h1: (props) => <Text as="h1" css={{ fontSize: '$8' }} {...props} />,
  h2: (props) => (
    <Text as="h2" css={{ fontSize: '$6' }} {...props} data-heading="" />
  ),
  h3: (props) => (
    <Text as="h3" css={{ fontSize: '$4' }} {...props} data-heading="" />
  ),
  pre: (props) => <>{props.children}</>,
  code: CodeBlock,
}
