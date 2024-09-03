// llmNode.js

import { Handle, Position } from "reactflow";
import Node, { NodeBody, NodeHeader } from "./Node";

export const LLMNode = ({ id, data }) => {
  return (
    <Node>
      <NodeHeader>LLM</NodeHeader>
      <NodeBody>
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-system`}
          style={{ top: `${100 / 3}%`, color: "purple"}}
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-prompt`}
          style={{ top: `${200 / 3}%`, color: "purple" }}
        />
        <div>
          <span>This is a LLM.</span>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-response`}
          style={{ color: "purple" }}
        />
      </NodeBody>
    </Node>
  );
};
