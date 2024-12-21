import {
  Server,
  ServerOptions,
} from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { transformComponent } from "./transformer/transformComponent.js";
import { transformDirectory } from "./transformer/transformDirectory.js";
import { analyzeComponent } from "./transformer/analyzeComponent.js";

const tools = {
  "transform-component": {
    name: "transform-component",
    description: "Transform a single component from Tailwind to NativeWind",
    parameters: {
      type: "object",
      properties: {
        code: {
          type: "string",
          description: "The component code to transform",
        },
      },
      required: ["code"],
    },
    handler: transformComponent,
  },
  "transform-directory": {
    name: "transform-directory",
    description:
      "Transform all components in a directory from Tailwind to NativeWind",
    parameters: {
      type: "object",
      properties: {
        directory: {
          type: "string",
          description: "The directory path containing components to transform",
        },
      },
      required: ["directory"],
    },
    handler: transformDirectory,
  },
  "analyze-component": {
    name: "analyze-component",
    description: "Analyze Tailwind usage in a component",
    parameters: {
      type: "object",
      properties: {
        code: {
          type: "string",
          description: "The component code to analyze",
        },
      },
      required: ["code"],
    },
    handler: analyzeComponent,
  },
};

const transport = new StdioServerTransport();
const server = new Server(
  { name: "@tokenizin-com/mcp-server-nativewind", version: "1.0.0" },
  { capabilities: { tools } }
);

await server.connect(transport);
