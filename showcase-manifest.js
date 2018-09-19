const categories = ['All', 'Finance', 'News', 'E-commerce', 'Creative', 'Entertainment']
const categoriesShort = ['All', 'Finance', 'News', 'E-comm', 'Creative', 'Entertainment']

const frontSortOrder = [
  'ticketmaster', 'invision', 'marvel', 'magic-leap', 'nike', 'netflix-jobs', 'mozilla-vr'
]

const sortOrder = [
  "invision",
  "marvel",
  'coinbase',
  "magic-leap",
  "nike",
  "mozilla-vr",
  "netflix-jobs",
  "hulu",
  "boosted-boards",
  "elton-john",
  'binance',
  "ticketmaster",
  "scale",
  "open-collective",
  'styled-components',
  "auth0-careers",
  "iota-data-market",
  'h1pl',
  'square-enix-games',
  "eaze",
  "zeit",
  "a24",
  "avocode",
  "expo",
  "sumup",
  "hashnode",
  'jet',
  "weedmaps",
  "sanity",
  'aenetworks',
  'tencent-news',
  "idean",
  "prisma",
  'repl.it',
  'satoshis.place',
  'givecrypto',
  'fontbase',
  'midrive',
  'stv',
  'hyper',
  'eurostar',
  'deliveroo',
  'plotly',
  'docker',
  'verge',
  'whowhatwear',
  'nteract',
  'institchu',
  'syntax.fm',
  "design-better",
  'nimiqscan',
  'pusher',
  'underbelly',
  'worldpopulationreview',
]

const mapping = {
  ticketmaster: {
    title: "Ticketmaster",
    link: "https://www.ticketmaster.com/new",
    src: "/static/images/showcases/ticketmaster.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'ticketmaster',
    tags: ['e-commerce']
  },
  h1pl: {
    title: "H1Z1 Pro League",
    link: "https://h1pl.com",
    src: "/static/images/showcases/h1pl.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'h1pl',
    tags: ['entertainment']
  },
  nimiqscan: {
    title: "NimiqScan",
    link: "https://nimiqscan.com",
    src: "/static/images/showcases/nimiqscan.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'nimiqscan',
    tags: ['finance']
  },
  verge: {
    title: "Verge",
    link: "https://vergecurrency.com",
    src: "/static/images/showcases/verge.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'verge',
    tags: ['finance']
  },
  coinbase: {
    title: "Coinbase",
    link: "https://coinbase.engineering",
    src: "/static/images/showcases/coinbase.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'coinbase',
    tags: ['finance']
  },
  binance: {
    title: "Binance",
    link: "https://www.binance.com",
    src: "/static/images/showcases/binance.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'binance',
    highlighted: 2,
    tags: ['finance']
  },
  'pusher': {
    title: "Pusher",
    link: "https://pusher.com",
    src: "/static/images/showcases/pusher.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'pusher',
    tags: ['creative']
  },
  "aenetworks": {
    title: "A+E Networks",
    link: "https://www.aenetworks.com",
    src: "/static/images/showcases/aenetworks.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'aenetworks',
    tags: ['news']
  },
  "worldpopulationreview": {
    title: "World Population Review",
    link: "http://worldpopulationreview.com",
    src: "/static/images/showcases/worldpopulationreview.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'worldpopulationreview',
    tags: ['news']
  },
  "underbelly": {
    title: "Underbelly",
    link: "https://underbelly.is",
    src: "/static/images/showcases/underbelly.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'underbelly',
    tags: ['e-commerce', 'creative']
  },
  "syntax.fm": {
    title: "Syntax",
    link: "https://syntax.fm",
    src: "/static/images/showcases/syntax.fm.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'syntax.fm',
    tags: ['creative']
  },
  "institchu": {
    title: "InStitchu",
    link: "https://www.institchu.com",
    src: "/static/images/showcases/institchu.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'institchu',
    tags: ['e-commerce']
  },
  "nteract": {
    title: "nteract",
    link: "https://nteract.io",
    src: "/static/images/showcases/nteract.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'nteract',
    tags: ['creative']
  },
  "whowhatwear": {
    title: "Who What Wear UK",
    link: "https://www.whowhatwear.co.uk",
    src: "/static/images/showcases/whowhatwear.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'whowhatwear',
    highlighted: 1,
    tags: ['news']
  },
  "square-enix-games": {
    title: "Square Enix",
    link: "https://square-enix-games.com/en_US",
    src: "/static/images/showcases/square-enix-games.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'square-enix-games',
    highlighted: 1,
    tags: ['entertainment']
  },
  "docker": {
    title: "Docker",
    link: "https://success.docker.com",
    src: "/static/images/showcases/docker.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'docker',
    tags: ['dev']
  },
  "plotly": {
    title: "Plotly",
    link: "https://plot.ly",
    src: "/static/images/showcases/plotly.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'plotly',
    tags: ['creative']
  },
  "deliveroo": {
    title: "Deliveroo",
    link: "https://deliveroo.co.uk",
    src: "/static/images/showcases/deliveroo.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'deliveroo',
    tags: ['e-commerce']
  },
  "eurostar": {
    title: "Eurostar",
    link: "https://hotels.eurostar.com/uk-en/paris",
    src: "/static/images/showcases/eurostar.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'eurostar',
    tags: ['e-commerce']
  },
  "stv": {
    title: "STV",
    link: "https://stv.tv",
    src: "/static/images/showcases/stv.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'stv',
    tags: ['entertainment']
  },
  "midrive": {
    title: "Midrive",
    link: "https://midrive.com",
    src: "/static/images/showcases/midrive.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'midrive',
    tags: ['e-commerce']
  },
  "fontbase": {
    title: "FontBase",
    link: "https://fontba.se",
    src: "/static/images/showcases/fontbase.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'fontbase',
    highlighted: 2,
    tags: ['creative']
  },
  "givecrypto": {
    title: "GiveCrypto",
    link: "https://www.givecrypto.org",
    src: "/static/images/showcases/givecrypto.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'givecrypto',
    tags: ['finance']
  },
  "satoshis.place": {
    title: "Satoshi's Place",
    link: "https://satoshis.place",
    src: "/static/images/showcases/satoshis.place.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'satoshis.place',
    tags: ['finance']
  },
  "repl.it": {
    title: "repl.it",
    link: "https://repl.it",
    src: "/static/images/showcases/repl.it.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'repl.it',
    tags: ['dev']
  },
  "styled-components": {
    title: "styled-components",
    link: "https://www.styled-components.com",
    src: "/static/images/showcases/styled-components.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'styled-components',
    tags: ['dev']
  },
  "tencent-news": {
    title: "Tencent News",
    link: "https://xw.qq.com",
    src: "/static/images/showcases/tencentnews.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'tencent-news',
    highlighted: 2,
    tags: ['news']
  },
  "jet": {
    title: "Jet",
    link: "https://jet.com",
    src: "/static/images/showcases/jet.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'jet',
    highlighted: 1,
    tags: ['e-commerce']
  },
  "idean": {
    title: "Idean",
    link: "https://www.idean.com",
    src: "/static/images/showcases/idean.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'idean',
    tags: ['creative']
  },
  "prisma": {
    title: "Prisma",
    link: "https://www.prisma.io",
    src: "/static/images/showcases/prisma.jpg",
    width: 3836,
    height: 2200,
    internalUrl: 'prisma',
    tags: ['dev']
  },
  "magic-leap": {
    "title": "Magic Leap",
    "link": "https://magicleap.com",
    "src": "/static/images/showcases/showcases-00.jpg",
    "width": 1280,
    "height": 734,
    "internalUrl": "magic-leap",
    "highlighted": 1,
    "tags": ['creative', 'entertainment']
  },
  "marvel": {
    "title": "Marvel",
    "link": "https://www.marvel.com",
    "src": "/static/images/showcases/marvel.jpg",
    "width": 3840,
    "height": 2204,
    "internalUrl": "marvel",
    "tags": ['entertainment']
  },
  "nike": {
    "title": "Nike",
    "link": "https://www.nike.com/help",
    "src": "/static/images/showcases/nike.jpg",
    "width": 3840,
    "height": 2206,
    "internalUrl": "nike"
  },
  "boosted-boards": {
    "title": "Boosted Boards",
    "link": "http://boostedboards.com",
    "src": "/static/images/showcases/boosted.jpg",
    "width": 3840,
    "height": 2206,
    "internalUrl": "boosted-boards",
    "tags": ['e-commerce']
  },
  "eaze": {
    "title": "Eaze",
    "link": "https://www.eaze.com",
    "src": "/static/images/showcases/showcases-01.jpg",
    "width": 3832,
    "height": 2198,
    "internalUrl": "eaze",
    "tags": ['e-commerce']
  },
  "netflix-jobs": {
    "title": "Netflix Jobs",
    "link": "https://jobs.netflix.com",
    "src": "/static/images/showcases/showcases-02.jpg",
    "width": 3836,
    "height": 2200,
    "internalUrl": "netflix-jobs",
    "tags": ['entertainment']
  },
  "auth0-careers": {
    "title": "Auth0 Careers",
    "link": "https://auth0.com/careers",
    "src": "/static/images/showcases/showcases-03.jpg",
    "width": 3828,
    "height": 2184,
    "internalUrl": "auth0-careers",
    "tags": ['creative']
  },
  "scale": {
    "title": "Scale",
    "link": "https://scaleapi.com",
    "src": "/static/images/showcases/showcases-04.jpg",
    "width": 3836,
    "height": 2198,
    "internalUrl": "scale",
    "tags": ['creative']
  },
  "elton-john": {
    "title": "Elton John",
    "link": "https://www.eltonjohn.com",
    "src": "/static/images/showcases/showcases-05.jpg",
    "width": 3840,
    "height": 2206,
    "internalUrl": "elton-john",
    "tags": ['creative', 'entertainment']
  },
  "open-collective": {
    "title": "Open Collective",
    "link": "https://opencollective.com",
    "src": "/static/images/showcases/showcases-06.jpg",
    "width": 3836,
    "height": 2206,
    "internalUrl": "open-collective",
    "tags": ['creative']
  },
  "a24": {
    "title": "A24",
    "link": "https://www.a24.com",
    "src": "/static/images/showcases/showcases-07.jpg",
    "width": 3836,
    "height": 2200,
    "internalUrl": "a24",
    "tags": ['news']
  },
  "hyper": {
    "title": "Hyper",
    "link": "https://hyper.is",
    "src": "/static/images/showcases/showcases-08.jpg",
    "width": 3828,
    "height": 2198,
    "internalUrl": "hyper",
    "tags": ["dev"]
  },
  "zeit": {
    "title": "ZEIT",
    "link": "https://zeit.co",
    "src": "/static/images/showcases/showcases-09.jpg",
    "width": 3836,
    "height": 2198,
    "internalUrl": "zeit",
    "tags": ["creative"]
  },
  "mozilla-vr": {
    "title": "Mozilla VR",
    "link": "https://mixedreality.mozilla.org",
    "src": "/static/images/showcases/showcases-10.jpg",
    "width": 3830,
    "height": 2196,
    "internalUrl": "mozilla-vr",
    "tags": ['dev', 'creative']
  },
  "avocode": {
    "title": "Avocode",
    "link": "https://avocode.com",
    "src": "/static/images/showcases/avocode.jpg",
    "width": 3836,
    "height": 2204,
    "internalUrl": "avocode",
    "tags": ['creative']
  },
  "iota-data-market": {
    "title": "IOTA Data Market",
    "link": "https://data.iota.org",
    "src": "/static/images/showcases/showcases-12.jpg",
    "width": 3832,
    "height": 2200,
    "internalUrl": "iota-data-market",
    "tags": ['dev']
  },
  "expo": {
    "title": "Expo",
    "link": "https://expo.io",
    "src": "/static/images/showcases/showcases-13.jpg",
    "width": 3830,
    "height": 2196,
    "internalUrl": "expo",
    "tags": ['dev', 'creative']
  },
  "sumup": {
    "title": "Sumup",
    "link": "https://sumup.com",
    "src": "/static/images/showcases/showcases-14.jpg",
    "width": 3830,
    "height": 2194,
    "internalUrl": "sumup",
    "tags": ['finance']
  },
  "hashnode": {
    "title": "Hashnode",
    "link": "https://hashnode.com",
    "src": "/static/images/showcases/showcases-15.jpg",
    "width": 3830,
    "height": 2194,
    "internalUrl": "hashnode",
    "tags": ["dev"]
  },
  "invision": {
    "title": "Invision",
    "link": "https://www.invisionapp.com",
    "src": "/static/images/showcases/showcases-16.jpg",
    "width": 3830,
    "height": 2200,
    "internalUrl": "invision",
    "tags": ["dev", "creative"]
  },
  "hulu": {
    "title": "Hulu",
    "link": "https://www.hulu.com",
    "src": "/static/images/showcases/showcases-17.jpg",
    "width": 3832,
    "height": 2198,
    "internalUrl": "hulu",
    "tags": ['entertainment']
  },
  "design-better": {
    "title": "DesignBetter.co",
    "link": "https://www.designbetter.co",
    "src": "/static/images/showcases/showcases-18.jpg",
    "width": 3832,
    "height": 2194,
    "internalUrl": "design-better",
    "tags": ["dev", "creative"]
  },
  "weedmaps": {
    "title": "Weedmaps",
    "link": "https://weedmaps.com",
    "src": "/static/images/showcases/showcases-19.jpg",
    "width": 1920,
    "height": 1081,
    "internalUrl": "weedmaps",
    "tags": ["e-commerce"]
  },
  "sanity": {
    "title": "Sanity.io",
    "link": "https://sanity.io",
    "src": "/static/images/showcases/showcases-20.jpg",
    "width": 3840,
    "height": 2162,
    "internalUrl": "sanity"
  }
}

module.exports = {
  categories,
  categoriesShort,
  sortOrder,
  frontSortOrder,
  mapping
}
