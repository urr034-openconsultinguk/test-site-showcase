#!/usr/bin/env sh
set -euo pipefail

# Deploy script (run on the machine that hosts the container).
# When this repo is updated (main branch), the self-hosted runner will call this.

# If you want to deploy from a fixed location rather than the runner workspace,
# set DEPLOY_DIR to that path (e.g. /home/urr034/test-site-showcase).
DEPLOY_DIR=${DEPLOY_DIR:-$(pwd)}

cd "$DEPLOY_DIR"

# Ensure we're on main and up to date
git checkout main
git pull --ff-only

# Build / restart
docker compose up -d --build
