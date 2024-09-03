// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Node, { NodeBody, NodeInput, NodeHeader } from './Node';
import './inputNode.css';


export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  // const handles = [
  //   {
  //     type: 'source',
  //     position: Position.Right,
  //     id: `${id}-value `
  // }]

  return (
    <Node>
      <div style={{}}>
        <NodeHeader>Input</NodeHeader>
        <NodeBody >
          <NodeInput><>
            <label>
              Input
              <textarea
                type="text"
                value={currName}
                onChange={handleNameChange}
              />
            </label>

            <label>
              Type:
              <select value={inputType} onChange={handleTypeChange}>
                <option value="Text">Text</option>
                <option value="File">File</option>
              </select>
            </label>
          </></NodeInput>

          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-value`}
          />
        </NodeBody>
      </div>
    </Node>

  );
}
