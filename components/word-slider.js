/* global window */
import React, { PureComponent } from 'react';
import { Spring } from 'react-spring';

const ANIMATION_STAGES = [
  { opacity: 0, y: -60 },
  { opacity: 1, y: 0 },
  { opacity: 0, y: 50 }
];

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.children = React.Children.toArray(props.children);
    this.state = {
      count: React.Children.count(props.children),
      currentIndex: 0,
      stage: 0
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.animation);
  }

  startAnimation() {
    this.animation = setInterval(() => {
      if (window.document.visibilityState === 'hidden') {
        // tab invisible; pause for one round to avoid flickering
        this.pauseAnimation = true;
        return;
      }
      if (!this.pauseAnimation) {
        const stage = (this.state.stage + 1) % 3;
        this.setState({
          stage,
          currentIndex: (this.state.currentIndex + 1) % this.state.count
        });
      } else {
        this.pauseAnimation = false;
      }
    }, this.props.duration || 1500);
  }

  render() {
    const { currentIndex, count, stage, width } = this.state;

    const prev =
      currentIndex > 0
        ? this.children[currentIndex - 1]
        : this.children[count - 1];
    const current = this.children[currentIndex];
    const next =
      currentIndex + 1 < count
        ? this.children[currentIndex + 1]
        : this.children[0];

    // a loop of 3 keyframes:
    //
    // stage      0          1          2
    //
    // next      [A]        [C]        [B]
    // current   [B]   =>   [A]   =>   [C]    =>   ...
    // prev      [C]        [B]        [A]

    const content = (
      <div>
        <Spring from={ANIMATION_STAGES[0]} to={ANIMATION_STAGES[stage]}>
          {({ opacity, y }) => (
            <div
              className="slug"
              style={{ transform: `translate3d(0, ${y + 100}%, 0)`, opacity }}
            >
              {stage === 0 ? next : stage === 1 ? current : prev}
            </div>
          )}
        </Spring>
        <br />
        <Spring
          from={ANIMATION_STAGES[1]}
          to={ANIMATION_STAGES[(stage + 1) % 3]}
        >
          {({ opacity, y }) => (
            <div
              className="slug"
              style={{ transform: `translate3d(0, ${y}%, 0)`, opacity }}
            >
              {stage === 0 ? current : stage === 1 ? prev : next}
            </div>
          )}
        </Spring>
        <br />
        <Spring
          from={ANIMATION_STAGES[2]}
          to={ANIMATION_STAGES[(stage + 2) % 3]}
        >
          {({ opacity, y }) => (
            <div
              className="slug"
              style={{ transform: `translate3d(0, ${y - 100}%, 0)`, opacity }}
            >
              {stage === 0 ? prev : stage === 1 ? next : current}
            </div>
          )}
        </Spring>
        <style jsx>
          {`
            .slug {
              display: inline-block;
            }
            br {
              display: block;
              font-size: 0;
              line-height: 0;
              visibility: hidden;
            }
          `}
        </style>
      </div>
    );

    return content;
  }
}
