// inputNode.js

import './node.css';

const NodeBody = ({ children }) => {
  return (
    <div className="node-body">{children}</div>
  );
}

const NodeInput = ({ children }) => {
  return (
    <div className="node-input">{children}</div>
  );
}


const NodeHeader = ({ children }) => {
  return (
    <div className="node-header">{children}</div>
  );
}

const Node = ({ id, data, children }) => {

  return (
    <div className="node">
      {children}
    </div>
  );
}


export default Node;
export { NodeBody, NodeHeader, NodeInput };
