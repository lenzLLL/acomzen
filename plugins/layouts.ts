// vite-react-hierarchical-layouts.ts
import fs from 'node:fs';
import path from 'node:path';
import type { PluginContext } from 'rollup';
import { normalizePath, transformWithEsbuild, type Plugin } from 'vite';

export interface HierarchicalLayoutOptions {
  /**
   * RegExp that identifies a “page” file.
   * Default:   /\/page\.(jsx?|tsx?)$/
   */
  pagePattern?: RegExp;
  /**
   * File names to look for when searching for a layout in each directory.
   * The first match wins. Default: ['layout.jsx', 'layout.tsx']
   */
  layoutFiles?: string[];
  /**
   * Absolute paths that act as “roots”.
   * The upward walk stops once we reach any of these.
   * Default: the Vite project root (`config.root`)
   */
  srcRoots?: string[];
}

const DEFAULT_PAGE_PATTERN = /\/page\.(jsx?)$/;
const DEFAULT_LAYOUT_FILES = ['layout.jsx'];
const DEFAULT_PARAM_PATTERN = /\[(\.{3})?([^\]]+)\]/g;
const NO_LAYOUT_QUERY = '?noLayout.jsx';

export function layoutWrapperPlugin() {
  // Plugin neutralized during Next.js migration — layout wrapping was Vite-specific
  return {
    name: 'vite-react-hierarchical-layouts-disabled',
  } as Plugin;
}
