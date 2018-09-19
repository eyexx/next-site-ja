import { PureComponent } from 'react';

import withPure from './hoc/pure';

export default class Tabs extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selected: props.data[0]
    };
  }

  onSelect = id => {
    if (this.props.data.indexOf(id) === -1) {
      return;
    }
    if (this.state.selected === id) {
      return;
    }
    this.setState({
      selected: id
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        selected: this.props.data[0]
      });
    }
  }

  render() {
    const { data, children } = this.props;
    if (!data.length) {
      return null;
    }

    let { selected } = this.state;
    const index = data.indexOf(selected);
    if (index === -1) {
      selected = data[0];
    }

    if (typeof children !== 'function') {
      return null;
    }
    return children(this.onSelect, selected, index);
  }
}

export const Indicator = withPure(({ selected, onClick }) => (
  <div onClick={onClick}>
    <style jsx>
      {`
         {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
          transition: background 0.2s ease;
          background: ${selected ? '#EEEEEE' : '#909090'};
          cursor: pointer;
        }
        div:hover {
          background: ${selected ? '#EEEEEE' : '#AAAAAA'};
        }
      `}
    </style>
  </div>
));
