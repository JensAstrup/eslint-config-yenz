// Import/Export errors for testing

// Unused imports

// Wrong import order (should be sorted)

// Importing from index when direct import is better

// Relative imports going up too many levels

// Missing file extensions where required

// Importing entire module when only specific exports needed
import * as lodash from 'lodash';

// Circular dependency risk

// Default import with wrong name

// Mixed import styles

// Importing non-existent exports

// Dynamic imports in wrong context
const dynamicImport = import('./dynamic-module');

// Re-exports without proper organization
export { helper } from './helpers/index';
export * from './types';

// Function using imported but unused modules
function badFunction() {
  // Using lodash but should have imported specific function
  return lodash.map([1, 2, 3], x => x * 2);
}

// Export without proper naming
export const a = 'value';
export const b = 42;

// Missing default export when file should have one
export { badFunction };

// Exporting unused function
export function unusedExportedFunction() {
  return 'never used';
} 
