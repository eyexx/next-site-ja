import { Component, PureComponent } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import classNames from 'classnames'
import { format, parse } from 'url'
import { List, WindowScroller, defaultCellRangeRenderer } from 'react-virtualized'
import { directionalProperty } from 'polished'

import Button from '../button'
import Container from '../container'
import { MediaQueryConsumer } from '../media-query'
import SitePreview from './site-preview'

import ArrowUpIcon from '../icons/arrow-up'
import HeartIcon from '../icons/heart'

import { sortOrder, mapping } from '../../showcase-manifest'

const SUBMIT_URL = `https://spectrum.chat/thread/e425a8b6-c9cb-4cd1-90bb-740fb3bd7541`

const GAP_X = 48
const GAP_Y = 48
const ROW_HEIGHT = 220 + GAP_Y

function getData(category) {
  return sortOrder.filter(id => {
    return category === 'all' || (mapping[id].tags && mapping[id].tags.indexOf(category) !== -1)
  })
}

let dataCategory = 'All'
let dataSource = getData('all')

const getRowHeight = ({index}, columnCount) => {
  if (columnCount < 3) {
    // no highlighted
    return 1
  }
  let height = 1, startIndex = index * columnCount
  for (let i = 0; i < columnCount; ++i) {
    if (dataSource[startIndex + i] && mapping[dataSource[startIndex + i]].highlighted) {
      height *= (columnCount - 1)
    }
  }
  return height
}

const SitePreviewPlaceholder = () => <div style={{
  flex: 1,
  height: '100%'
}} />

const scrollTo = (top) => {
  window.scrollTo({ top, left: 0, behavior: 'smooth' })
}

const getRowRender = columnCount => ({
  index,
  isScrolling,
  isVisible,
  key,
  parent,
  style
}) => {
  // let height = getRowHeight({index}, columnCount)
  let content = []
  let highlighted = null
  let rowDir = 'row'

  let startIndex = index * columnCount
  for (let i = 0; i < columnCount; ++i) {
    let siteData = mapping[dataSource[startIndex + i]]
    if (!siteData) {
      if (columnCount > 1) {
        // push placeholder
        content.push(<SitePreviewPlaceholder key={`site-${startIndex + i}`} />)
      }
      continue
    }
    if (siteData.highlighted && columnCount === 3) {
      highlighted = <SitePreview siteData={siteData} flex={columnCount - 1} isVisible={isVisible} isScrolling={isScrolling} isTablet={columnCount < 3} key={`site-${siteData.internalUrl}`}/>
      rowDir = siteData.highlighted === 1 ? 'row' : 'row-reverse'
    } else {
      content.push(<SitePreview siteData={siteData} isVisible={isVisible} isScrolling={isScrolling} isTablet={columnCount < 3} key={`site-${siteData.internalUrl}`}/>)
    }
  }

  return <div key={`row-${index}`} style={{
    display: 'flex',
    flexDirection: columnCount === 1 ? 'column' : rowDir,
    ...directionalProperty('padding', 0, GAP_X / 2),
    ...style
  }}>
    {
      highlighted ? [highlighted, <div key={`column-normal`} style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        {content}
      </div>] : content
    }
  </div>
}

// render 3 images per row
const Row = getRowRender(3)

// render 2 images per row
const TabletRow = getRowRender(2)

// render 1 image per row
const MobileRow = getRowRender(1)

export default class extends Component {
  state = {
    width: 1
  }
  stopCachedIndex = 0
  startCachedIndex = Infinity
  lastColumnCount = 3
  
  resize = () => {
    this.setState({
      width: Math.min(window.innerWidth, 1440)
    })
  }
  updateCategory(category) {
    if (category !== dataCategory) {
      dataCategory = category
      dataSource = getData(category.toLowerCase())
      if (window.scrollY > 16 * 12) {
        scrollTo(16 * 12)
      }
    }
  }
  componentDidMount () {
    this.updateCategory(this.props.category)
    window.addEventListener('resize', this.resize)
    this.resize()
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }
  componentWillReceiveProps(newProps) {
    this.updateCategory(newProps.category)
  }
  overscanIndicesGetter = ({
    cellCount,
    overscanCellsCount,
    startIndex,
    stopIndex
  }, isTablet) => {
    // preload +- 5 rows
    // cache += 50 rows
    let overscanStartIndex = Math.max(0, Math.min(startIndex - overscanCellsCount, this.startCachedIndex))
    this.startCachedIndex = Math.max(startIndex - 50, Math.min(this.startCachedIndex, overscanStartIndex))

    let overscanStopIndex = Math.min(cellCount - 1, Math.max(stopIndex + overscanCellsCount, this.stopCachedIndex))
    this.stopCachedIndex = Math.min(stopIndex + 50, Math.max(this.stopCachedIndex, overscanStopIndex))

    return {
      overscanStartIndex,
      overscanStopIndex
    }
  }
  render() {
    return <Container wide gray center><MediaQueryConsumer>{({isMobile, isTablet}) =>
      <div className='container'>
        <style jsx>{`
          .container {
            margin: 1rem 0 6rem;
          }
          .spacer {
            margin-top: 2rem;
          }
          .icon-label {
            margin-right: .625rem;
          }
          .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
        <WindowScroller serverHeight={800}>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              width={this.state.width}
              rowCount={Math.ceil(dataSource.length / (isMobile ? 1 : isTablet ? 2 : 3))}
              estimatedRowSize={500}
              rowHeight={args => getRowHeight(args, (isMobile ? 1 : isTablet ? 2 : 3)) * ROW_HEIGHT}
              rowRenderer={isMobile ? MobileRow : isTablet ? TabletRow : Row}
              overscanRowCount={5}
              overscanIndicesGetter={(args) => this.overscanIndicesGetter(args, isTablet)}
              style={{
                willChange: '',
                margin: 'auto'
              }}
              ref={list => {
                let columnCount = (isMobile ? 1 : isTablet ? 2 : 3)
                if (columnCount !== this.lastColumnCount) {
                  // reset row height for responsive width
                  this.lastColumnCount = columnCount
                  list.recomputeRowHeights()
                }
              }}
            />
          )}
        </WindowScroller>
        <div className='spacer'/>
        <Button onClick={() => scrollTo(0)}>
          <div className='flex-center'>
            <span className='icon-label'>Back to Top</span><ArrowUpIcon color='#0076ff' />
          </div>
        </Button>
        <div className='spacer'/>
        <Button href={SUBMIT_URL} invert>
          <span className='icon-label'>Share Your Website</span><HeartIcon color="white" />
        </Button>
      </div>
    }</MediaQueryConsumer></Container>  
  }
}
