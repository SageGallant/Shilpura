#!/bin/bash
# Shell script to deploy Shilpura to GitHub Pages

# Exit on error
set -e

# Configuration - update these values
REPO_NAME="Shilpura"
BRANCH_NAME="main"
DEPLOY_BRANCH="gh-pages"
COMMIT_MESSAGE="Deploy to GitHub Pages - January 13, 2025"
GIT_USER_NAME="Your Name" # Replace with your actual name
GIT_USER_EMAIL="your.email@example.com" # Replace with your actual email
COMMIT_DATE="2025-01-13T12:00:00"

echo -e "\033[0;36m=== Shilpura GitHub Pages Deployment Script ===\033[0m"
echo -e "\033[0;33mStarting deployment process...\033[0m"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "\033[0;31m✗ Git not found. Please install Git before running this script.\033[0m"
    exit 1
else
    echo -e "\033[0;32m✓ Git is installed\033[0m"
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "\033[0;33m✗ Not a git repository. Initializing...\033[0m"
    git init
    git remote add origin "https://github.com/yourusername/$REPO_NAME.git" # Replace yourusername with your GitHub username
    echo -e "\033[0;32m✓ Git repository initialized\033[0m"
fi

# Configure git user
git config user.name "$GIT_USER_NAME"
git config user.email "$GIT_USER_EMAIL"
echo -e "\033[0;32m✓ Git user configured\033[0m"

# Make sure we're on the main branch
git checkout -B "$BRANCH_NAME"
echo -e "\033[0;32m✓ Switched to $BRANCH_NAME branch\033[0m"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "\033[0;33mInstalling dependencies...\033[0m"
    npm install
    echo -e "\033[0;32m✓ Dependencies installed\033[0m"
else
    echo -e "\033[0;32m✓ Dependencies already installed\033[0m"
fi

# Build the project
echo -e "\033[0;33mBuilding project...\033[0m"
npm run build
echo -e "\033[0;32m✓ Project built successfully\033[0m"

# Ensure .nojekyll file exists in the out directory
if [ ! -f "out/.nojekyll" ]; then
    echo -e "\033[0;33mCreating .nojekyll file...\033[0m"
    touch out/.nojekyll
    echo -e "\033[0;32m✓ .nojekyll file created\033[0m"
else
    echo -e "\033[0;32m✓ .nojekyll file already exists\033[0m"
fi

# Add CNAME file if you have a custom domain
# echo "yourdomain.com" > out/CNAME

# Commit changes to main branch with the specified date
echo -e "\033[0;33mCommitting changes to $BRANCH_NAME branch...\033[0m"
git add .
export GIT_AUTHOR_DATE="$COMMIT_DATE"
export GIT_COMMITTER_DATE="$COMMIT_DATE"
git commit -m "Update project files - $COMMIT_DATE"
echo -e "\033[0;32m✓ Changes committed to $BRANCH_NAME branch\033[0m"

# Push to origin main
echo -e "\033[0;33mPushing to remote repository...\033[0m"
git push -u origin "$BRANCH_NAME" -f
echo -e "\033[0;32m✓ Changes pushed to remote repository\033[0m"

# Deploy to GitHub Pages
echo -e "\033[0;33mDeploying to GitHub Pages...\033[0m"

# Create a temporary branch for deployment
TEMP_BRANCH="temp-deploy-branch"
git checkout -b "$TEMP_BRANCH"

# Use git worktree to manage the gh-pages branch
if [ -d ".git/worktrees/gh-pages" ]; then
    echo -e "\033[0;33mCleaning up existing worktree...\033[0m"
    git worktree remove -f gh-pages
fi

# Add worktree for gh-pages branch
git worktree add -B "$DEPLOY_BRANCH" gh-pages origin/"$DEPLOY_BRANCH" 2>/dev/null || git worktree add -B "$DEPLOY_BRANCH" gh-pages
echo -e "\033[0;32m✓ Worktree added for $DEPLOY_BRANCH branch\033[0m"

# Copy the build output to the gh-pages directory
echo -e "\033[0;33mCopying build files to gh-pages branch...\033[0m"
rm -rf gh-pages/*
cp -R out/* gh-pages/

# Commit changes to gh-pages branch with the specified date
echo -e "\033[0;33mCommitting to $DEPLOY_BRANCH branch...\033[0m"
cd gh-pages
git add --all
export GIT_AUTHOR_DATE="$COMMIT_DATE"
export GIT_COMMITTER_DATE="$COMMIT_DATE"
git commit -m "$COMMIT_MESSAGE"
echo -e "\033[0;32m✓ Changes committed to $DEPLOY_BRANCH branch\033[0m"

# Push the gh-pages branch
git push -u origin "$DEPLOY_BRANCH" -f
echo -e "\033[0;32m✓ Deployed successfully to GitHub Pages\033[0m"

# Clean up
cd ..
git worktree remove gh-pages
git checkout "$BRANCH_NAME"
git branch -D "$TEMP_BRANCH"
echo -e "\033[0;32m✓ Cleanup completed\033[0m"

echo -e "\033[0;36m=== Deployment Complete! ===\033[0m"
echo -e "\033[0;35mYour site should be available at: https://yourusername.github.io/$REPO_NAME\033[0m"
echo -e "\033[0;33mNote: It may take a few minutes for GitHub Pages to update.\033[0m" 