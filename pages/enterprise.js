import Page from '../components/page';
import Screen from '../components/screen';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import Contact from '../components/enterprise/contact';

export default () => (
  <Page title="Next.js - Enterprise">
    <Header height={64} shadow defaultActive>
      <Navbar />
    </Header>
    <Screen offset={64 + 400}>
      <Contact />
    </Screen>
    <Footer />
  </Page>
);
