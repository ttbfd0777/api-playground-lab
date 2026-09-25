#!/bin/bash
# Installation script — creates symlinks for config files.

set -e

DOTFILES_DIR="$(cd "$(dirname "$0")" && pwd)"

link_file() {
    local src="$1"
    local dest="$2"
    if [ -f "$dest" ]; then
        echo "Backing up existing $dest"
        mv "$dest" "$dest.bak"
    fi
    ln -s "$src" "$dest"
    echo "Linked: $src → $dest"
}

echo "Installing dotfiles from $DOTFILES_DIR"
link_file "$DOTFILES_DIR/.bashrc" "$HOME/.bashrc"
link_file "$DOTFILES_DIR/.gitconfig" "$HOME/.gitconfig"

echo "Done!"
