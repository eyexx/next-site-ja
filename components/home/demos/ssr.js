import Link from 'next/link';

import Code from './code';
import withFrame from './frame';

const IndexPage = withFrame(({ A }) => (
  <div>
    <p>
      This site is <b>Server Side Rendered</b>
    </p>
    <style>{`
      p {
        text-align: center;
      }
    `}</style>
  </div>
));

const SourcePage = withFrame(({ A }) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: `
      <div class="line-gutter-backdrop"></div><table><tbody><tr><td class="line-number" value="1"></td><td class="line-content"><span class="html-doctype">&lt;!DOCTYPE html&gt;</span><span class="html-tag">&lt;html&gt;</span><span class="html-tag">&lt;head&gt;</span><span class="html-tag">&lt;meta <span class="html-attribute-name">charSet</span>="<span class="html-attribute-value">utf-8</span>" <span class="html-attribute-name">class</span>="<span class="html-attribute-value">next-head</span>"/&gt;</span><span class="html-tag">&lt;link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">preload</span>" <span class="html-attribute-name">href</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/hhXsA91k444GPofex6oyz/pages/index.js" rel="noreferrer noopener">/_next/static/hhXsA91k444GPofex6oyz/pages/index.js</a>" <span class="html-attribute-name">as</span>="<span class="html-attribute-value">script</span>"/&gt;</span><span class="html-tag">&lt;link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">preload</span>" <span class="html-attribute-name">href</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/hhXsA91k444GPofex6oyz/pages/_app.js" rel="noreferrer noopener">/_next/static/hhXsA91k444GPofex6oyz/pages/_app.js</a>" <span class="html-attribute-name">as</span>="<span class="html-attribute-value">script</span>"/&gt;</span><span class="html-tag">&lt;link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">preload</span>" <span class="html-attribute-name">href</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/hhXsA91k444GPofex6oyz/pages/_error.js" rel="noreferrer noopener">/_next/static/hhXsA91k444GPofex6oyz/pages/_error.js</a>" <span class="html-attribute-name">as</span>="<span class="html-attribute-value">script</span>"/&gt;</span><span class="html-tag">&lt;link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">preload</span>" <span class="html-attribute-name">href</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/runtime/webpack-42652fa8b82c329c0559.js" rel="noreferrer noopener">/_next/static/runtime/webpack-42652fa8b82c329c0559.js</a>" <span class="html-attribute-name">as</span>="<span class="html-attribute-value">script</span>"/&gt;</span><span class="html-tag">&lt;link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">preload</span>" <span class="html-attribute-name">href</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/chunks/commons.1518a78d58398afbba0b.js" rel="noreferrer noopener">/_next/static/chunks/commons.1518a78d58398afbba0b.js</a>" <span class="html-attribute-name">as</span>="<span class="html-attribute-value">script</span>"/&gt;</span><span class="html-tag">&lt;link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">preload</span>" <span class="html-attribute-name">href</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/runtime/main-19b9bb53e440bf8e57f1.js" rel="noreferrer noopener">/_next/static/runtime/main-19b9bb53e440bf8e57f1.js</a>" <span class="html-attribute-name">as</span>="<span class="html-attribute-value">script</span>"/&gt;</span><span class="html-tag">&lt;style <span class="html-attribute-name">id</span>="<span class="html-attribute-value">__jsx-1743027543</span>"&gt;</span>p.jsx-1743027543{text-align:center;}<span class="html-tag">&lt;/style&gt;</span><span class="html-tag">&lt;/head&gt;</span><span class="html-tag">&lt;body&gt;</span><span class="html-tag">&lt;div <span class="html-attribute-name">id</span>="<span class="html-attribute-value">__next</span>"&gt;</span><span class="highlight"><span class="html-tag">&lt;div <span class="html-attribute-name">class</span>="<span class="html-attribute-value">jsx-1743027543</span>" <span class="html-attribute-name">data-reactroot</span>=""&gt;</span><span class="html-tag">&lt;p <span class="html-attribute-name">class</span>="<span class="html-attribute-value">jsx-1743027543</span>"&gt;</span>This site is <span class="html-tag">&lt;b <span class="html-attribute-name">class</span>="<span class="html-attribute-value">jsx-1743027543</span>"&gt;</span>Server Side Rendered<span class="html-tag">&lt;/b&gt;</span><span class="html-tag">&lt;/p&gt;</span><span class="html-tag">&lt;/div&gt;</span></span><span class="html-tag">&lt;/div&gt;</span><span class="html-tag">&lt;script&gt;</span>__NEXT_DATA__ = {"props":{"pageProps":{}},"page":"/","pathname":"/","query":{},"buildId":"hhXsA91k444GPofex6oyz"};__NEXT_LOADED_PAGES__=[];__NEXT_REGISTER_PAGE=function(r,f){__NEXT_LOADED_PAGES__.push([r, f])}<span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;script <span class="html-attribute-name">async</span>="" <span class="html-attribute-name">id</span>="<span class="html-attribute-value">__NEXT_PAGE__/</span>" <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/hhXsA91k444GPofex6oyz/pages/index.js" rel="noreferrer noopener">/_next/static/hhXsA91k444GPofex6oyz/pages/index.js</a>"&gt;</span><span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;script <span class="html-attribute-name">async</span>="" <span class="html-attribute-name">id</span>="<span class="html-attribute-value">__NEXT_PAGE__/_app</span>" <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/hhXsA91k444GPofex6oyz/pages/_app.js" rel="noreferrer noopener">/_next/static/hhXsA91k444GPofex6oyz/pages/_app.js</a>"&gt;</span><span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;script <span class="html-attribute-name">async</span>="" <span class="html-attribute-name">id</span>="<span class="html-attribute-value">__NEXT_PAGE__/_error</span>" <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/hhXsA91k444GPofex6oyz/pages/_error.js" rel="noreferrer noopener">/_next/static/hhXsA91k444GPofex6oyz/pages/_error.js</a>"&gt;</span><span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;script <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/runtime/webpack-42652fa8b82c329c0559.js" rel="noreferrer noopener">/_next/static/runtime/webpack-42652fa8b82c329c0559.js</a>" <span class="html-attribute-name">async</span>=""&gt;</span><span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;script <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/chunks/commons.1518a78d58398afbba0b.js" rel="noreferrer noopener">/_next/static/chunks/commons.1518a78d58398afbba0b.js</a>" <span class="html-attribute-name">async</span>=""&gt;</span><span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;script <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="/_next/static/runtime/main-19b9bb53e440bf8e57f1.js" rel="noreferrer noopener">/_next/static/runtime/main-19b9bb53e440bf8e57f1.js</a>" <span class="html-attribute-name">async</span>=""&gt;</span><span class="html-tag">&lt;/script&gt;</span><span class="html-tag">&lt;/body&gt;</span><span class="html-tag">&lt;/html&gt;</span><span class="html-end-of-file"></span></td></tr></tbody></table>
    `
      }}
    />
    <style>{`
      body {
        margin: 0px;
      }
      table {
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: grey;
      }
      table {
        white-space: normal;
        line-height: normal;
        font-weight: normal;
        font-size: medium;
        font-style: normal;
        color: -internal-quirk-inherit;
        text-align: start;
        font-variant: normal;
      }
      table {
        width: 100%;
        word-break: break-word;
        font-size: initial;
        font-family: monospace;
        tab-size: 4;
        white-space: pre-wrap !important;
        border-spacing: 0px;
        margin: 0px;
      }
      tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
      }
      .line-number:before {
        content: attr(value);
      }
      .line-gutter-backdrop, .line-number {
        box-sizing: border-box;
        width: 31px;
        background-color: rgb(240, 240, 240);
        user-select: none;
        padding: 0px 4px !important;
        border-right: 1px solid rgb(187, 187, 187) !important;
      }
      .line-number {
        text-align: right;
        color: rgb(128, 128, 128);
        word-break: normal;
        white-space: nowrap;
        font-size: 9px;
        font-family: Helvetica;
        user-select: none;
      }
      td, th {
        display: table-cell;
        vertical-align: inherit;
      }
      td {
        vertical-align: baseline;
        padding: 0px !important;
      }
      .line-content {
        padding: 0px 5px !important;
      }
      .html-tag {
        color: rgb(136, 18, 128);
      }
      .html-attribute-name {
        color: rgb(153, 69, 0);
      }
      .html-attribute-value {
        color: rgb(26, 26, 166);
      }
      .html-external-link, .html-resource-link {
        color: rgb(0, 0, 238);
      }
      .html-doctype {
        color: rgb(192, 192, 192);
      }
      a:-webkit-any-link {
        color: -webkit-link;
        text-decoration: underline;
      }
      a {
        pointer-events: none;
      }
      .highlight {
        background: #ffd2d2;
      }
    `}</style>
  </div>
));

export default {
  type: ['browser', 'browser'],
  tabs: ['Website', 'Source'],
  browser1: {
    browserTabs: ['http://nextjs-site.now.sh'],
    browserMapping: {
      'http://nextjs-site.now.sh': IndexPage
    }
  },
  browser2: {
    browserTabs: ['view-source:http://nextjs-site.now.sh'],
    browserMapping: {
      'view-source:http://nextjs-site.now.sh': SourcePage
    }
  },
  note: (
    <>
      <p>
        With Next.js, every component inside <code>pages/</code> gets
        server-rendered automatically and their scripts inlined and styles
        scoped.
      </p>
      <p>
        Also, using{' '}
        <Link href="/docs#fetching-data-and-component-lifecycle">
          <a>
            <code>getInitialProps</code>
          </a>
        </Link>{' '}
        fetches data on the server for SSR and then on the client when the
        component is re-mounted. You can even use{' '}
        <Link href="/docs#dynamic-import">
          <a>dynamic import</a>
        </Link>{' '}
        with SSR out of the box.
      </p>
    </>
  )
};
