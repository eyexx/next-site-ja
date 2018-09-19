import Highlight from 'react-highlight/lib/optimized';

import { components as docsComponents } from '../docs/documentation';
import { GenericLink } from '../text/link';

const H1 = ({ children }) => (
  <h1 className="fw6">
    {children}

    <style jsx>{`
      text-align: center;
      margin-top: 0;
      font-size: 2rem;
    `}</style>
  </h1>
);

const Ul = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      list-style: none;
      margin-bottom: 2rem;
    `}</style>
  </ul>
);

const Li = ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      :before {
        content: '-';
        display: inline-block;
        color: #6d6d6d;
        position: absolute;
        margin-left: -25px;
      }
      li {
        margin-bottom: 0.35rem;
      }
    `}</style>
  </li>
);

const Code = ({ children, syntax, className }) => {
  return (
    <pre className={syntax ? ` ${syntax}` : ''}>
      <code>{children}</code>
      <style jsx>
        {`
          pre {
            padding: 1.25rem;
            margin: 40px 0;
            border: 1px solid #eaeaea;
            white-space: pre;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
          }

          code {
            font-size: 14px;
            line-height: 20px;
          }
        `}
      </style>
    </pre>
  );
};

const P = ({ children }) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          line-height: 1.8;
          margin-bottom: 2rem;
        }
      `}</style>
    </p>
  );
};

export const components = {
  ...docsComponents,
  h1: H1,
  li: Li,
  ul: Ul,
  code: Code,
  p: P
};
