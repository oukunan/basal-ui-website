import { styled } from '../stitches.config'

const Aside = styled('aside', {
  position: 'sticky',
  top: '$8',
  height: '100%',
  width: '220px',
  padding: '0 $4',
})

const UnOrderList = styled('ul', {
  margin: 0,
  padding: 0,
})

export default function QuickNavContent() {
  return (
    <Aside>
      <h4>Quick Content</h4>
      <UnOrderList>
        <li>This is 1</li>
        <li>This is 2</li>
        <li>This is 3</li>
        <li>This is 4</li>
      </UnOrderList>
    </Aside>
  )
}
