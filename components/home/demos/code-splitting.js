import Link from 'next/link'

import Code from './code'
import withFrame from './frame'

const IndexFile = () => <Code>{
`import Link from 'next/link'

export default () => (
  <div>
    <h1>Hello, this is the homepage</h1>
    <p>I'm only 0.59 KB after gzipped.</p>
    <Link href='/cowsay'><a>Cowsay</a></Link>
  </div>
)
`
}</Code>

const AboutFile = () => <Code>{
`import Link from 'next/link'

// only being loaded on \`/cowsay\`
import cowsay from 'cowsay-browser' 

export default () => <div>
  <p>This page costs 29.8 KB after gzipped!</p>
  <pre>
    {cowsay.say({ text: 'I am a big package!' })}
  </pre>
  <Link href='/'><a>Go home</a></Link>
</div>
`
}</Code>

const IndexPage = withFrame(({A}) => 
  <div>
    <h1>Hello, this is the homepage</h1>
    <p>{`I'm only 0.59 KB after gzipped.`}</p>
    <A tab='http://localhost:3000/cowsay'>Cowsay</A>
  </div>
)

const AboutPage = withFrame(({A}) => 
  <div>
    <p>This page costs 29.8 KB after gzipped!</p>
    <pre>{
` _____________________
< I am a big package! >
 ---------------------
       \\   ^__^
        \\  (oo)\_______
           (__)\       )\\/\\
               ||----w |
               ||     ||`
    }</pre>
    <A tab='http://localhost:3000'>Go home</A>
  </div>
)

export default {
  type: ['editor', 'browser'],
  tabs: ['Code', 'Website'],
  editor1: {
    editorTabs: ['pages/index.js', 'pages/cowsay.js'],
    editorMapping: {
      'pages/index.js': IndexFile,
      'pages/cowsay.js': AboutFile
    },
  },
  browser2: {
    browserTabs: ['http://localhost:3000', 'http://localhost:3000/cowsay'],
    browserMapping: {
      'http://localhost:3000': IndexPage,
      'http://localhost:3000/cowsay': AboutPage
    },
  },
  note: <>
    <p>
      Every <code>import</code> you declare gets bundled and served with each page. That means pages never load unnecessary code!
    </p>
  </>
}
