import { PureComponent, Component } from 'react'
import { Code } from './text/code'
import _scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import slugify from '@sindresorhus/slugify'

import Header from '../header'
import Container from '../container'
import ArrowRight from '../icons/arrow-right'

const navElements = [
  "Setup",
  "Automatic Code Splitting",
  "CSS",
  "Static file serving (e.g.: images)",
  "Populating <head>",
  "Fetching data and component lifecycle",
  "Routing",
  "Prefetching Pages",
  "Custom server and routing",
  "Dynamic Import",
  "Custom <App>",
  "Custom <Document>",
  "Custom error handling",
  "Reusing the built-in error page",
  "Custom configuration",
  "Customizing webpack config",
  "Customizing babel config",
  "CDN support with Asset Prefix",
  "Production deployment",
  "Static HTML export",
  "Usage",
  "Limitation",
  "Multi Zones",
  "How to define a zone",
  "How to merge them",
  "Recipes",
  "FAQ",
  "Contributing"
]

function scrollIntoViewIfNeeded(elem) {
  const finalElement = findClosestScrollableElement(elem)
  return _scrollIntoViewIfNeeded(
    elem.parentElement,
    {
      behavior: 'smooth',
      scrollMode: 'if-needed',
      block: 'center',
      boundary: finalElement,
    },
  )
}

function findClosestScrollableElement(_elem) {
  const { parentNode } = _elem
  if (!parentNode) return null

  if (
    parentNode.scrollHeight > parentNode.clientHeight ||
    parentNode.scrollWidth > parentNode.clientWidth
  ) {
    return parentNode
  } else {
    return findClosestScrollableElement(parentNode)
  }
}

export class SidebarNavItem extends Component {
  constructor() {
    super()

    this.activeNavItem = null
  }

  componentDidMount() {
    this.scrollIntoViewIfNeeded()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isActive !== nextProps.isActive
  }

  componentDidUpdate() {
    this.scrollIntoViewIfNeeded()
  }

  scrollIntoViewIfNeeded() {
    if (this.props.isActive) {
      if (this.activeNavItem.scrollIntoViewIfNeeded) {
        this.activeNavItem.scrollIntoViewIfNeeded()
      } else {
        scrollIntoViewIfNeeded(this.activeNavItem)
      }
    }
  }

  render() {
    const {item, updateSelected, isActive, isMobile} = this.props

    return (
      <li>
        <a 
          href={`#${slugify(item)}`} 
          onClick={updateSelected} 
          className={`${isActive ? 'active' : ''} f5`}
          ref={ref => (this.activeNavItem = ref)}
        >
          {item}
        </a>
        <style jsx>{`
          li {
            list-style: none;
          }
          li:last-of-type {
            padding-bottom: 2rem;
          }
          a {
            display: inline-block;
            color: inherit;
            padding: 6px 3px;
            ${isMobile ? 'width: 100%;' : ''}
          }
          a:hover {
            color: gray;
          }
          a.active {
            font-weight: 600;
            color: #0076ff;
          }
        `}</style>
      </li>
    )
  }
}

export default class Sidebar extends PureComponent {
  state = {
    dropdown: false
  }
  updateSelected = (hash) => {
    this.props.updateSelected(hash)
    this.setState({ dropdown: false })
  }
  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown })
  }
  render() {
    const { isMobile } = this.props
    const { dropdown } = this.state

    if (isMobile) {
      const currentItem = navElements.filter(item => this.props.currentSelection === `#${slugify(item)}`)[0]
      return <>
        <div className='negative-spacer'>
          <Header height={48} zIndex={999} offset={64 + 32} distance={1} defaultActive shadow>
            <div className="docs-select f5 fw6" onClick={this.toggleDropdown}>
              <Container>
              <span style={{ 
                verticalAlign: 'middle',
                marginRight: '0.2rem',
                display: 'inline-block',
                lineHeight: '1rem'
              }}><ArrowRight/></span>{currentItem}
              </Container>
            </div>
            <div className={`documentation__sidebar docs-dropdown ${dropdown ? '' : ' docs-closed'}`}>
              <Container>
                <nav>
                  <span className="documentation__sidebar-heading f6 fw6">Getting Started</span>
                  <ul>
                    {
                      navElements.map((item, i) => (
                        <SidebarNavItem 
                          key={i} 
                          item={item} 
                          updateSelected={() => 
                            this.updateSelected(`#${slugify(item)}`)
                          } 
                          isActive={this.props.currentSelection === `#${slugify(item)}`} 
                          isMobile={true}
                        />
                      ))
                    }
                  </ul>
                </nav>
              </Container>
            </div>
          </Header>
          <style jsx>{`
            .docs-select {
              height: 3rem;
              width: 100%;
              border-top: 1px solid #f5f5f5;
              line-height: 3rem;
              text-align: left;
              cursor: pointer;
            }
            .docs-select img {
              vertical-align: middle;
              margin-top: -2px;
            }
            .docs-dropdown {
              position: absolute;
              left: 0;
              right: 0;
              top: 100%;
              bottom: -50vh;
              background: white;
              box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
              transition: bottom .5s ease;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
            }
            .docs-dropdown.docs-closed {
              bottom: 100%;
            }
            .documentation__sidebar nav {
              padding-left: 24px;
            }
            .documentation__sidebar nav ul {
              margin: 0;
              padding: 0;
            }
            .documentation__sidebar-heading {
              display: inline-block;
              margin-top: 1rem;
              margin-bottom: 12px;
              margin-left: 3px;
              color: #999999;
              text-transform: uppercase;
            }
            .negative-spacer {
              margin: 0 -1rem;
            }
          `}</style>
        </div>
        <style jsx global>{`
          :global(.target.docs-anchor-target) {
            margin-top: -208px;
            padding-top: 208px;
          }
        `}</style>
      </>
    }

    return (
      <div className="documentation__sidebar">
        <nav>
          <span className="documentation__sidebar-heading">Getting Started</span>
          <ul>
            {
              navElements.map((item, i) => (
                <SidebarNavItem 
                  key={i} 
                  item={item} 
                  updateSelected={() => 
                    this.props.updateSelected(`#${slugify(item)}`)
                  } 
                  isActive={this.props.currentSelection === `#${slugify(item)}`} />
              ))
            }
          </ul>
        </nav>

        <style jsx>{`
          .documentation__sidebar {
            width: 312px;
            flex: 0 0 auto;
            position: relative;
            padding-right: 3rem;
          }

          .documentation__sidebar nav {
            position: fixed;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            display: flex;
            flex-direction: column;
            width: 18rem;
            padding: 2rem 1rem 0 0;
            height: calc(100vh - ${64 + 32}px);
          }

          .documentation__sidebar nav ul {
            margin: 0;
            padding: 0;
          }

          .documentation__sidebar-heading {
            color: #999999;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          
          // CSS only media query for mobile + SSR
          @media screen and (max-width: 640px) {
            .documentation__sidebar nav {
              position: unset;
              height: unset;
              width: 100%;
            }
          }
        `}</style>
    </div>
    )
  }
}
