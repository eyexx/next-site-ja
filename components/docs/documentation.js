import { Component } from 'react'
import Router from 'next/router'
import { format, parse } from 'url'
import Head from './head'
import Sidebar from './sidebar'
import { H1, H2, H3, H4 } from './text/headings'
import { Blockquote } from './text/quotes'
import { InlineCode, Code } from './text/code'
import { GenericLink } from './text/link'
import Heading from './heading'

import { MediaQueryConsumer } from '../media-query'

if (typeof window !== 'undefined') {
  require('intersection-observer')
}

function changeHash(hash) {
  const { pathname, query } = Router

  const parsedUrl = parse(location.href)
  parsedUrl.hash = hash

  Router.router.changeState(
    'replaceState',
    format({ pathname, query }),
    format(parsedUrl)
  )
}

export default class Documentation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelection: null
    }
    this.contentNode = null
    this.observer = null

    this.updateSelected = this.updateSelected.bind(this)
    this.onHashChange = this.onHashChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange)

    const nodes = [...this.contentNode.querySelectorAll('[id]')]
    const intersectingTargets = new Set()

    this.observer = new IntersectionObserver(entries => {
      for (const { isIntersecting, target } of entries) {
        if (isIntersecting) {
          intersectingTargets.add(target)
        } else {
          intersectingTargets.delete(target)
        }
      }

      if (!intersectingTargets.size) return

      let minIndex = Infinity
      let id = ''

      for (let target of intersectingTargets.values()) {
        let index  = nodes.indexOf(target)
        if (index < minIndex) {
          minIndex = index
          id = target.id
        }
      }

      const hash = '#' + (id || '')
      if (location.hash !== hash) {
        changeHash(hash)
        this.updateSelected(hash)
      }
    })

    for (const node of nodes) {
      this.observer.observe(node)
    }

    const { hash } = window.location
    this.setState({ currentSelection: hash })
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange)

    this.observer.disconnect()
    this.observer = null
  }

  updateSelected = hash => {
    this.setState({
      currentSelection: hash
    })
  }

  onHashChange() {
    this.updateSelected(window.location.hash)
  }

  render() {
    return (
      <MediaQueryConsumer>{({isMobile, isTablet}) => {
        return <>
          <Head title="Getting Started"/>

          <div className="documentation">
            <Sidebar updateSelected={this.updateSelected} currentSelection={this.state.currentSelection} isMobile={isMobile} />

            <div className="documentation__container">
              <div className="documentation__content" ref={ref => (this.contentNode = ref)}>
                { this.props.children }
              </div>
            </div>

            <style jsx>{`
              .documentation {
                display: ${isMobile ? 'block' : 'flex'};
              }

              .documentation__sidebar {
                display: flex;
                flex-direction: column;
              }

              .documentation__container {
                flex: 1;
                padding-bottom: 5rem;
                overflow: hidden;
              }

              .documentation__header h1 {
                margin-top: 0;
              }

              .documentation__content {
                width: 100%;
                max-width: 600px;
              }
              
              // CSS only media query for mobile + SSR
              @media screen and (max-width: 640px) {
                .documentation {
                  ${isMobile ? `` : `flex-direction: column;`}
                }
              }
          `}</style>
          </div>
        </>
      }}</MediaQueryConsumer>
    )
  }
}

const DocH2 = ({ children }) => (
  <div>
    <Heading lean>
      <H2>{children}</H2>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
)

const DocH3 = ({ children }) => (
  <div>
    <Heading lean>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      div {
        margin: 2rem 0 0 0;
      }
    `}</style>
  </div>
)

export const components = {
  h1: H1,
  h2: DocH2,
  h3: DocH3,
  h4: H4,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink
}
