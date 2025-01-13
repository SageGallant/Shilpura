#!/usr/bin/env pwsh
# PowerShell script to deploy Shilpura to GitHub Pages

# Stop script on first error
$ErrorActionPreference = 'Stop'

# Configuration - update these values
$repoName = "Shilpura"
$branchName = "main"
$deployBranch = "gh-pages"
$commitMessage = "Deploy to GitHub Pages - January 13, 2025"
$gitUserName = "SageGallant" # Replace with your actual name
$gitUserEmail = "ramchouhan160@gmail.com" # Replace with your actual email
$commitDate = "2025-01-13T12:00:00"

Write-Host "=== Shilpura GitHub Pages Deployment Script ===" -ForegroundColor Cyan
Write-Host "Starting deployment process..." -ForegroundColor Yellow

# Check if git is installed
try {
    git --version | Out-Null
    Write-Host "✓ Git is installed" -ForegroundColor Green
} catch {
    Write-Host "✗ Git not found. Please install Git before running this script." -ForegroundColor Red
    exit 1
}

# Check if we're in a git repository
if (-not (Test-Path -Path ".git")) {
    Write-Host "✗ Not a git repository. Initializing..." -ForegroundColor Yellow
    git init
    git remote add origin "https://github.com/SageGallant/$repoName.git" # Replace yourusername with your GitHub username
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
}

# Configure git user
git config user.name $gitUserName
git config user.email $gitUserEmail
Write-Host "✓ Git user configured" -ForegroundColor Green

# Make sure we're on the main branch
git checkout -B $branchName
Write-Host "✓ Switched to $branchName branch" -ForegroundColor Green

# Install dependencies if needed
if (-not (Test-Path -Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host "✓ Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
}

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build
Write-Host "✓ Project built successfully" -ForegroundColor Green

# Ensure .nojekyll file exists in the out directory
if (-not (Test-Path -Path "out/.nojekyll")) {
    Write-Host "Creating .nojekyll file..." -ForegroundColor Yellow
    New-Item -Path "out/.nojekyll" -ItemType File -Force | Out-Null
    Write-Host "✓ .nojekyll file created" -ForegroundColor Green
} else {
    Write-Host "✓ .nojekyll file already exists" -ForegroundColor Green
}

# Add CNAME file if you have a custom domain
# New-Item -Path "out/CNAME" -ItemType File -Value "yourdomain.com" -Force | Out-Null

# Commit changes to main branch with the specified date
Write-Host "Committing changes to $branchName branch..." -ForegroundColor Yellow
git add .
$env:GIT_AUTHOR_DATE = $commitDate
$env:GIT_COMMITTER_DATE = $commitDate
git commit -m "Update project files - $commitDate"
Write-Host "✓ Changes committed to $branchName branch" -ForegroundColor Green

# Push to origin main
Write-Host "Pushing to remote repository..." -ForegroundColor Yellow
git push -u origin $branchName -f
Write-Host "✓ Changes pushed to remote repository" -ForegroundColor Green

# Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow

# Create a temporary branch for deployment
$tempBranch = "temp-deploy-branch"
git checkout -b $tempBranch

# Use git worktree to manage the gh-pages branch
if (Test-Path -Path ".git/worktrees/gh-pages") {
    Write-Host "Cleaning up existing worktree..." -ForegroundColor Yellow
    git worktree remove -f gh-pages
}

# Add worktree for gh-pages branch
git worktree add -B $deployBranch gh-pages origin/$deployBranch 2>$null
if (-not $?) {
    Write-Host "Creating new $deployBranch branch..." -ForegroundColor Yellow
    git worktree add -B $deployBranch gh-pages
}

# Copy the build output to the gh-pages directory
Write-Host "Copying build files to gh-pages branch..." -ForegroundColor Yellow
Get-ChildItem -Path "gh-pages" -Exclude ".git" | Remove-Item -Recurse -Force
Copy-Item -Path "out/*" -Destination "gh-pages" -Recurse -Force

# Commit changes to gh-pages branch with the specified date
Write-Host "Committing to $deployBranch branch..." -ForegroundColor Yellow
Set-Location -Path "gh-pages"
git add --all
$env:GIT_AUTHOR_DATE = $commitDate
$env:GIT_COMMITTER_DATE = $commitDate
git commit -m $commitMessage
Write-Host "✓ Changes committed to $deployBranch branch" -ForegroundColor Green

# Push the gh-pages branch
git push -u origin $deployBranch -f
Write-Host "✓ Deployed successfully to GitHub Pages" -ForegroundColor Green

# Clean up
Set-Location -Path ".."
git worktree remove gh-pages
git checkout $branchName
git branch -D $tempBranch
Write-Host "✓ Cleanup completed" -ForegroundColor Green

Write-Host "=== Deployment Complete! ===" -ForegroundColor Cyan
Write-Host "Your site should be available at: https://SageGallant.github.io/$repoName" -ForegroundColor Magenta
Write-Host "Note: It may take a few minutes for GitHub Pages to update." -ForegroundColor Yellow 