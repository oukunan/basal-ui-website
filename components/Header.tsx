import { styled } from '../stitches.config'

const Wrapper = styled('header', {
  height: '$header',
  border: '1px solid black',
})

export default function Header() {
  return <Wrapper>This is basic header</Wrapper>
}
