// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Node, { NodeBody, NodeHeader, NodeInput } from "./Node";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <Node>
      <NodeBody>
      <NodeHeader>Text</NodeHeader>
        <NodeInput><div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div></NodeInput>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
      </NodeBody>
    </Node>
  );
}
