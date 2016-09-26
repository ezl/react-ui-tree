var cx = require('classnames');
var Tree = require('../lib/react-ui-tree.js');
var React = require('../lib/react.js');
var ReactDOM = require('../lib/react-dom.js');
var tree = require('./tree');

import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags } from 'riek'

require('../lib/react-ui-tree.less');
require('./theme.less');
require('./app.less');

var App = React.createClass({
  getInitialState() {
    return {
      active: null,
      tree: tree
    };
  },

  virtualServerCallback() {
    console.log("virtualServerCallback");
  },

  renderNode(node) {
    return (
      <span className={cx('node', {
        'is-active': node === this.state.active
        })} onClick={this.onClickNode.bind(null, node)}>

        <RIETextArea
          value={node.module}
          change={this.virtualServerCallback}
          propName="textarea" />

      </span>
    );
  },

  onClickNode(node) {
    this.setState({
      active: node
    });
  },

  render() {
    return (
      <div className="app">
        <div className="tree">
          <Tree
            paddingLeft={10}
            tree={this.state.tree}
            onChange={this.handleChange}
            isNodeCollapsed={this.isNodeCollapsed}
            renderNode={this.renderNode}
          />
        </div>
      </div>
    );
  },

  handleChange(tree) {
    this.setState({
      tree: tree
    });
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
