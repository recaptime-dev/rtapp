FROM gitpod/workspace-full

USER gitpod

# Install GitHub CLI and then some
RUN brew update; brew upgrade; brew install gh hadolint shellcheck shfmt glab direnv