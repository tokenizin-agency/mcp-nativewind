# @modelcontextprotocol/server-nativewind

MCP server for transforming Tailwind components to NativeWind 4.

## Installation

```bash
npm install -g @modelcontextprotocol/server-nativewind
```

## Usage

### As a CLI tool
```bash
mcp-nativewind
```

### In Claude for Desktop

Add to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "nativewind-transformer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-nativewind"]
    }
  }
}
```

## Available Tools

1. transform-component: Transform a single component
2. transform-directory: Transform all components in a directory
3. analyze-component: Analyze Tailwind usage

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run tests: `npm test`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 