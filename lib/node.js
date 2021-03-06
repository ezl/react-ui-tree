var cx = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');

var Node = React.createClass({
  displayName: 'UITreeNode',

  renderCollapse() {
    var index = this.props.index;

    if(index.children && index.children.length) {
      var collapsed = index.node.collapsed;

      return (
        <span
          className={cx('collapse', collapsed ? 'caret-right' : 'caret-down')}
          onMouseDown={function(e) {e.stopPropagation()}}
          onClick={this.handleCollapse}>
        </span>
      );
    }

    return null;
  },

  handleEdit() {
    console.log("handleEdit");
  },

  handleInsertSiblingAfter() {
    var nodeId = this.props.index.id;
    var tree = this.props.tree;
    var newNode = {
      module: "THIS IS A NEW NODE\nasdfa\nasdfasdf\nafaksdj gaksdhfak sdjh aklsdjl hadkls haskldh adkls hasldk jdhlskg ajhadklsjga",
      leaf: true
    };

    tree.insertAfter(newNode, nodeId);
    this.props.change(tree);
  },

  handleInsertChild() {
    var nodeId = this.props.index.id;
    var tree = this.props.tree;
    var node = tree.get(nodeId);
    var newNode = {
      module: "THIS IS A NEW NODE\nasdfa\nasdfasdf\nafaksdj gaksdhfak sdjh aklsdjl hadkls haskldh adkls hasldk jdhlskg ajhadklsjga",
      leaf: true
    };
    tree.append(newNode, nodeId);

    this.props.change(tree);
  },

  handleRemove() {
    var nodeId = this.props.index.id;
    var tree = this.props.tree;

    tree.remove(nodeId);
    this.props.change(tree);
  },

  renderNodeMenu() {
    return (
      <div
        className="node-menu">
        <span className="edit"
          onClick={this.handleEdit}>
          ✎
        </span>
        <span className="add"
          onClick={this.handleInsertSiblingAfter}>
          +
        </span>
        <span className="add"
          onClick={this.handleInsertChild}>
          →
        </span>
        <span className="remove"
          onClick={this.handleRemove}>
          ×
        </span>
      </div>
    );
  },

  renderChildren() {
    var index = this.props.index;
    var tree = this.props.tree;
    var dragging = this.props.dragging;

    if(index.children && index.children.length) {
      var childrenStyles = {};
      if(index.node.collapsed) childrenStyles.display = 'none';
      childrenStyles['paddingLeft'] = this.props.paddingLeft + 'px';

      return (
        <div className="children" style={childrenStyles}>
          {index.children.map((child) => {
            var childIndex = tree.getIndex(child);
            return (
              <Node
                tree={tree}
                index={childIndex}
                key={childIndex.id}
                dragging={dragging}
                paddingLeft={this.props.paddingLeft}
                onCollapse={this.props.onCollapse}
                onDragStart={this.props.onDragStart}
                change={this.props.change}
              />
            );
          })}
        </div>
      );
    }

    return null;
  },

  render() {
    var tree = this.props.tree;
    var index = this.props.index;
    var dragging = this.props.dragging;
    var node = index.node;
    var styles = {};

    return (
      <div className={cx('m-node', {
        'placeholder': index.id === dragging
      })} style={styles}>
        <div className="inner" ref="inner" onMouseDown={this.handleMouseDown}>
          {this.renderCollapse()}
          {this.renderNodeMenu()}
          {tree.renderNode(node)}
        </div>
        {this.renderChildren()}
      </div>
    );
  },

  handleCollapse(e) {
    e.stopPropagation();
    var nodeId = this.props.index.id;
    if(this.props.onCollapse) this.props.onCollapse(nodeId);
  },

  handleMouseDown(e) {
    var nodeId = this.props.index.id;
    var dom = this.refs.inner;

    if(this.props.onDragStart) {
      this.props.onDragStart(nodeId, dom, e);
    }
  }
});

module.exports = Node;
