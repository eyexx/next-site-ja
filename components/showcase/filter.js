import { PureComponent } from 'react'
import Link from 'next/link'

import Container from '../container'
import Popover from '../popover'
import HeartIcon from '../icons/heart'

import { MediaQueryConsumer } from '../media-query'
import { categories, categoriesShort } from '../../showcase-manifest'

const SUBMIT_URL = `https://spectrum.chat/thread/e425a8b6-c9cb-4cd1-90bb-740fb3bd7541`

export default class extends PureComponent {
  render () {
    const  { onSelect, fixed, selectedId } = this.props

    return <MediaQueryConsumer>{({isMobile}) => <Container center wide={isMobile}>
      <style jsx>{`
        .categories {
          display: flex;
          height: 32px;
          padding: 0 1rem;
          align-items: ${isMobile ? 'center' : 'baseline'};
          justify-content: ${isMobile ? 'space-around' : 'center'};
          font-weight: 500;
        }
        .categories {
          border-top: 1px solid transparent;
        }
        :global(.fixed) .categories {
          border-top: 1px solid ${isMobile ? '#f5f5f5' : 'transparent'};
        }
        .categories *::selection {
          background-color: inherit;
          color: inherit;
        }
        .tab {
          display: inline-block;
          height: 100%;
          line-height: 2rem;
          position: relative;
          text-align: center;
          padding: 0 ${isMobile ? '3px' : '1.25rem'};
          cursor: pointer;
          transition: color .5s ease;
          white-space: nowrap;
          ${isMobile ? '' : 'text-transform: uppercase;'}
        }
        .tab.selected {
          // font-weight: 900;
          color: #0076ff;
        }
        .indicator {
          position: absolute;
          display: flex;
          align-items: flex-start;
          justify-content: ${isMobile ? 'space-around' : 'center'};
          top: 100%;
          left: 0;
          right: 0;
          height: 32px;
          padding: 0 1rem;
          font-weight: 500;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .indicator .tab {
          color: transparent;
        }
        .indicator .tab.icon {
          opacity: 0;
          visibility: hidden;
        }
        .indicator .tab:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 100%;
          display: inline-block;
          width: 80%;
          height: 32px;
          border-radius: 20px;
          transition: all .5s ease;
          transform: translateX(-50%);
          z-index: 0;
        }
        .indicator .tab.selected:after {
          box-shadow: 0 4px 24px 0 rgba(0,118,255,0.23);
        }
        .indicator *::selection {
          background: transparent;
          color: transparent;
        }
      `}</style>
      <div className="indicator">
        {
          (isMobile ? categoriesShort : categories).map((_, index) => {
            let id = categories[index]
            return <span className={`tab${selectedId === id ? ' selected' : ''} f6`} key={id}>{_}</span>
          })
        }
        { 
          !isMobile && <span className='tab f5 icon'><HeartIcon /></span>
        }
      </div>
      <div className="categories">
        {
          (isMobile ? categoriesShort : categories).map((_, index) => {
            let id = categories[index]
            return <span className={`no-tap-highlight tab${selectedId === id ? ' selected' : ''} f6`} role='button' onClick={() => onSelect(id)} key={id}>
              {_}
            </span>
          })
        }
        { 
          !isMobile && <Popover content={<div style={{ whiteSpace: 'nowrap' }}>Share your website!</div>} >
            <Link href={SUBMIT_URL}>
              <a aria-label='Submit Your Website'>
                <span className='tab f5' style={{ verticalAlign: 'top' }}>
                  <HeartIcon />
                </span>
              </a>
            </Link>
          </Popover>
        }
      </div>
    </Container>}</MediaQueryConsumer>
  }
}
