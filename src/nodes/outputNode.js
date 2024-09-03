// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import Node, { NodeBody, NodeHeader, NodeInput } from "./Node";
import "./inputNode.css";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <Node>
      <NodeHeader>Output</NodeHeader>
      <NodeBody>
        <NodeInput>
          <>
            <label>
              Name:
              <input type="text" value={currName} onChange={handleNameChange} />
            </label>
            <label>
              Type:
              <select value={outputType} onChange={handleTypeChange}>
                <option value="Text">Text</option>
                <option value="File">Image</option>
              </select>
            </label>
          </>
        </NodeInput>
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-value`}
          style={{
            background: "light-purple", // Purple background for the dot
            border: "2px solid #000", // Inner black border
            width: ".5rem", // Width of the dot
            height: ".5rem", // Height of the dot
            borderRadius: "50%", // Make the dot circular
            padding: "5px", // Add padding to create space between border and circle
            boxSizing: "border-box", // Ensure padding is included in the element's total width and height
            boxShadow: "0 0 0 2px white, 0 0 0 4px black", // Outer white and black border
          }}
        />
      </NodeBody>
    </Node>
  );
};
