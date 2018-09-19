import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Notification from '../components/notification';
import { MediaQueryConsumer } from '../components/media-query';

import Intro from '../components/home/intro';
import Demo from '../components/home/demo';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Learn from '../components/home/learn';
import SocialMeta from '../components/social-meta';

export default () => (
  <Page title="Next.js">
    <SocialMeta
      image={'/static/twitter-cards/home.jpg'}
      title="Next.js"
      url="https://nextjs.org"
      description="Next.js is a lightweight framework for static and server-rendered applications"
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={32}
          offset={-32}
          distance={32}
          shadow
          active={isMobile ? 32 : 320}
        >
          <Notification
            href="/blog/next-7"
            title="Next 7 is out!"
            titleMobile="Next 7 is out!"
          >
            Next 7 is out! — DX improvements, better error reporting, upgraded
            compilation pipeline Wednesday, September 19th 2018
          </Notification>
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Intro />
    <Demo />
    <Features />
    <Customers />
    <Learn />
    <Footer />
  </Page>
);
