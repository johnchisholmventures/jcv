#!/usr/bin/env bash
# Vercel / CI build for Next + TinaCloud.
# Prints how the Tina branch is resolved so logs are debuggable.
set -euo pipefail

echo "=== Tina branch resolution ==="
echo "NEXT_PUBLIC_TINA_BRANCH=${NEXT_PUBLIC_TINA_BRANCH:-<unset>}"
echo "NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF=${NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF:-<unset>}"
echo "VERCEL_GIT_COMMIT_REF=${VERCEL_GIT_COMMIT_REF:-<unset>}"
echo "HEAD=${HEAD:-<unset>}"
echo "VERCEL_ENV=${VERCEL_ENV:-<unset>}"
echo "VERCEL_GIT_COMMIT_SHA=${VERCEL_GIT_COMMIT_SHA:-<unset>}"

# Same priority as tina/config.ts
BRANCH="${NEXT_PUBLIC_TINA_BRANCH:-}"
if [ -z "$BRANCH" ]; then BRANCH="${NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF:-}"; fi
if [ -z "$BRANCH" ]; then BRANCH="${VERCEL_GIT_COMMIT_REF:-}"; fi
if [ -z "$BRANCH" ]; then BRANCH="${HEAD:-}"; fi
if [ -z "$BRANCH" ]; then BRANCH="master"; fi

export NEXT_PUBLIC_TINA_BRANCH="$BRANCH"
echo ">>> Using Tina branch: $BRANCH"
echo "=============================="

# master/dev are the pre-Tina site until the redesign is merged.
if [ "$BRANCH" = "master" ] || [ "$BRANCH" = "main" ] || [ "$BRANCH" = "dev" ]; then
  echo "WARNING: Branch '$BRANCH' has no Tina schema until the redesign is merged."
  echo "TinaCloud will fail indexing checks for this branch. Use modernize-tinacms for previews."
fi

pnpm exec tinacms build
NODE_ENV=production pnpm exec next build
