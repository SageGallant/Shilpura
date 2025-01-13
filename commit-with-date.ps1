#!/usr/bin/env pwsh
# Script to commit changes with a specific date

# Configuration
$commitDate = "2025-01-13T12:00:00"
$commitMessage = "Complete Shilpura E-commerce Platform - Project Finalization"
$gitUserName = "Your Name" # Replace with your actual name
$gitUserEmail = "your.email@example.com" # Replace with your actual email
$branchName = "main"

Write-Host "=== Commit with Custom Date Script ===" -ForegroundColor Cyan
Write-Host "Committing changes with date: $commitDate" -ForegroundColor Yellow

# Configure git user
git config user.name $gitUserName
git config user.email $gitUserEmail
Write-Host "✓ Git user configured" -ForegroundColor Green

# Add all files to staging
Write-Host "Adding files to staging..." -ForegroundColor Yellow
git add .
Write-Host "✓ Files added to staging" -ForegroundColor Green

# Set environment variables for the commit date
$env:GIT_AUTHOR_DATE = $commitDate
$env:GIT_COMMITTER_DATE = $commitDate

# Commit changes with the specified date
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m $commitMessage
Write-Host "✓ Changes committed with date: $commitDate" -ForegroundColor Green

# Push changes to the remote repository
Write-Host "Pushing changes to remote repository..." -ForegroundColor Yellow
git push origin $branchName
Write-Host "✓ Changes pushed to remote repository" -ForegroundColor Green

Write-Host "=== Commit with Custom Date Completed! ===" -ForegroundColor Cyan 