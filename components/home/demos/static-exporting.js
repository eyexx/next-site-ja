import Link from 'next/link'

import Code from './code'
import withFrame from './frame'

const CLI = () => <Code lang='none'>
  <span className='hljs-keyword'>▲</span>{' ~/my-site '}<span className='hljs-keyword'>yarn build</span>
{`
yarn run v1.9.4
warning package.json: No license field
$ next build
`}
  <span className='hljs-keyword'>✨  Done in 6.89s.</span>
{`

`}
  <span className='hljs-keyword'>▲</span>{' ~/my-site '}<span className='hljs-keyword'>yarn export</span>
{`
...
> exporting path: /about
> exporting path: /index
> exporting path: /_error
> exporting path: /
`}
  <span className='hljs-keyword'>✨  Done in 0.79s.</span>
</Code>

const PackageFile = () => <Code lang='json'>{
`{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  },
  "dependencies": {
    "next": "^6.1.2",
    "react": "^16.5.1",
    "react-dom": "^16.5.1"
  }
}
`}</Code>

const IndexPage = withFrame(({A}) => 
  <div>
    <h1>My Awesome Static Blog</h1>
    <A tab='file:///.../my-site/out/about/index.html'>About</A>
  </div>
)

const AboutPage = withFrame(({A}) => 
  <div>
    <p>This is the about page</p>
    <A tab='file:///.../my-site/out/index.html'>Go home</A>
  </div>
)

export default {
  type: ['editor', 'browser'],
  tabs: ['Terminal', 'Website'],
  editor1: {
    editorTabs: ['$ ~/my-site', 'package.json'],
    editorMapping: {
      '$ ~/my-site': CLI,
      'package.json': PackageFile
    },
  },
  browser2: {
    browserTabs: ['file:///.../my-site/out/index.html', 'file:///.../my-site/out/about/index.html'],
    browserMapping: {
      'file:///.../my-site/out/index.html': IndexPage,
      'file:///.../my-site/out/about/index.html': AboutPage,
    },
  },
  note: <>
    <p>Export your Next.js website to static HTML, with zero cost. The export app supports almost every feature of 
    Next.js including dynamic urls, prefetching, preloading and dynamic imports.</p>
    <p>
      With the <Link href='/docs#static-html-export'><a><code>exportPathMap</code></a></Link> configuration, 
      you can specify the routes and queries for the static export, copy custom files like <code>robots.txt</code> 
      or generate a <code>sitemap.xml</code>.
    </p>
  </>
}
