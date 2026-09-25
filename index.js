/**
 * Simple utility functions for everyday use.
 */

const fs = require('fs');
const path = require('path');

/**
 * Format bytes to human-readable string.
 */
function formatBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let i = 0;
    while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
    }
    return `${size.toFixed(1)} ${units[i]}`;
}

/**
 * Recursively list files in a directory.
 */
function listFiles(dir, ext) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...listFiles(full, ext));
        } else if (!ext || entry.name.endsWith(ext)) {
            results.push(full);
        }
    }
    return results;
}

module.exports = { formatBytes, listFiles };
