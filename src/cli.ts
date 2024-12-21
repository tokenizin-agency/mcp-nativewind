#!/usr/bin/env node
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run the MCP server
const result = spawnSync('node', [resolve(__dirname, 'index.js')], {
  stdio: 'inherit'
});

process.exit(result.status ?? 0); 