import Container from '../container'
import SectionHeader from '../section-header'

import Preview from './preview'

export default () => (
  <Container padding wide>
    <SectionHeader title='Blog' />
    <Preview url='/blog/next-7' detail/>
  </Container>
)
