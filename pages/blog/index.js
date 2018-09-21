import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Screen from '../../components/screen';
import Page from '../../components/page';
import { MediaQueryConsumer } from '../../components/media-query';

import Container from '../../components/container';
import SectionHeader from '../../components/section-header';

import Preview from '../../components/blog/preview';
import { components } from '../../components/blog/post-components';

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(
  require.context('../../blog', false, /\-preview\.mdx$/)
);

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const items = previewItems
  .sort(dateSortDesc)
  .map(({ default: Component, meta }, index) => {
    return (
      <Preview
        key={meta.title}
        detail={index < 5}
        prefetch={index < 3}
        {...meta}
      >
        <Component components={components} />
      </Preview>
    );
  });

export default () => (
  <Page title="Next.js - Blog">
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Screen offset={64 + 400}>
      <Container padding wide>
        <SectionHeader title="Blog" />
        {items}
      </Container>
    </Screen>
    <Footer />
  </Page>
);
