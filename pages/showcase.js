import { withRouter } from 'next/router';

import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Tabs from '../components/tabs';
import { MediaQueryConsumer } from '../components/media-query';

import Title from '../components/showcase/title';
import List from '../components/showcase/list';
import Filter from '../components/showcase/filter';
import SiteDetail from '../components/showcase/site-detail';
import SocialMeta from '../components/social-meta';

import { categories, mapping } from '../showcase-manifest';

const HEADER_HEIGHT = 16 * 12;

function Showcase({ router }) {
  const { item, from } = router.query;

  return (
    <Page title="Next.js - Showcase">
      <SocialMeta
        image={'/static/twitter-cards/showcase.png'}
        title="Next.js - Showcase"
        url="https://nextjs.org/showcase"
        description="Meet hundreds of beautiful websites powered by Next.js"
      />
      <Header height={0} zIndex={1001} background="white" defaultActive>
        <Navbar />
      </Header>
      <SiteDetail siteData={mapping[item]} from={from} />
      <MediaQueryConsumer>
        {({ isMobile }) => (
          <Tabs data={categories} anchor>
            {(onSelect, selectedId) => (
              <>
                <Header
                  height={HEADER_HEIGHT + 64 + 32 + (isMobile ? 32 : 0)}
                  distance={HEADER_HEIGHT}
                  offset={-HEADER_HEIGHT}
                  shadow
                >
                  <Title height={HEADER_HEIGHT + 64 + (isMobile ? 32 : 0)} />
                  <Filter onSelect={onSelect} selectedId={selectedId} />
                </Header>
                <List category={selectedId} />
              </>
            )}
          </Tabs>
        )}
      </MediaQueryConsumer>
      <Footer />
    </Page>
  );
}

export default withRouter(Showcase);
