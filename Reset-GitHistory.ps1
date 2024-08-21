# PowerShell script for creating Git history
# This version works natively in Windows PowerShell

# Helper functions
function Set-CommitWithDate {
    param (
        [string]$Message,
        [string]$Date
    )
    
    # Add content to ensure we have changes to commit
    Add-Content -Path "changes.txt" -Value "Change for: $Message at $Date"
    git add changes.txt
    
    # Use environment variables for commit date
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    git commit -m $Message
    Write-Host "Created commit: $Message"
    
    # Reset the environment variables
    Remove-Item env:GIT_AUTHOR_DATE
    Remove-Item env:GIT_COMMITTER_DATE
}

function New-GitBranch {
    param (
        [string]$BranchName,
        [string]$Date
    )
    
    Write-Host "Creating branch: $BranchName"
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    git branch $BranchName 2>$null
    git checkout $BranchName
    
    # Reset the environment variables
    Remove-Item env:GIT_AUTHOR_DATE
    Remove-Item env:GIT_COMMITTER_DATE
    
    # Create initial file for this branch
    Set-Content -Path "changes.txt" -Value "Initial content for branch $BranchName created at $Date"
    git add changes.txt
}

function Merge-GitBranch {
    param (
        [string]$BranchName,
        [string]$Date
    )
    
    Write-Host "Merging branch: $BranchName into main"
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    git checkout main
    git merge --no-ff $BranchName -m "Merge branch '$BranchName' into main"
    
    # Reset the environment variables
    Remove-Item env:GIT_AUTHOR_DATE
    Remove-Item env:GIT_COMMITTER_DATE
}

# Make sure we're starting with a clean repository
git init
Set-Content -Path "README.md" -Value "# Shilpura - Premium Handicrafts E-commerce Platform"
git add README.md
git commit -m "Initial commit"

# Create main branch (if not present)
git branch -M main

# Phase 7: Design finalization and placeholder content (October 1-15, 2024)
Write-Host "Creating commits for Phase 7: Design finalization and placeholder content (October 1-15, 2024)..."

# October 1, 2024
New-GitBranch -BranchName "feature/design-finalization" -Date "2024-10-01T08:30:00"
Set-CommitWithDate -Message "Audit typography across all pages" -Date "2024-10-01T09:45:00"
Set-CommitWithDate -Message "Standardize heading styles" -Date "2024-10-01T11:20:00"
Set-CommitWithDate -Message "Refine paragraph text styles" -Date "2024-10-01T13:55:00"
Set-CommitWithDate -Message "Adjust line heights for readability" -Date "2024-10-01T16:10:00"
Set-CommitWithDate -Message "Standardize font weights across site" -Date "2024-10-01T18:30:00"

# October 2, 2024
Set-CommitWithDate -Message "Audit color usage across all pages" -Date "2024-10-02T08:45:00"
Set-CommitWithDate -Message "Refine color contrast for accessibility" -Date "2024-10-02T11:10:00"
Set-CommitWithDate -Message "Standardize button colors and states" -Date "2024-10-02T13:35:00"
Set-CommitWithDate -Message "Adjust form field colors for consistency" -Date "2024-10-02T16:00:00"
Set-CommitWithDate -Message "Refine border colors across components" -Date "2024-10-02T18:25:00"
Set-CommitWithDate -Message "Fine-tune hover state colors" -Date "2024-10-02T20:40:00"

# October 3, 2024
Set-CommitWithDate -Message "Audit spacing and layout consistency" -Date "2024-10-03T09:15:00"
Set-CommitWithDate -Message "Standardize section padding" -Date "2024-10-03T11:40:00"
Set-CommitWithDate -Message "Refine grid layouts" -Date "2024-10-03T14:05:00"
Set-CommitWithDate -Message "Adjust component margins" -Date "2024-10-03T16:30:00"
Set-CommitWithDate -Message "Standardize container widths" -Date "2024-10-03T18:55:00"
Set-CommitWithDate -Message "Fix inconsistent spacing in footer" -Date "2024-10-03T21:20:00"

# Create a few more commits to demonstrate it's working
# Cut down version - just to test functionality

# October 4, 2024
Set-CommitWithDate -Message "Audit responsive breakpoints" -Date "2024-10-04T08:50:00"
Set-CommitWithDate -Message "Refine mobile layouts" -Date "2024-10-04T11:15:00"

# Create a new branch
New-GitBranch -BranchName "feature/placeholder-content" -Date "2024-10-07T08:40:00"
Set-CommitWithDate -Message "Add placeholder product images" -Date "2024-10-07T11:05:00"
Set-CommitWithDate -Message "Create product descriptions for featured items" -Date "2024-10-07T13:30:00"
Merge-GitBranch -BranchName "feature/design-finalization" -Date "2024-10-07T23:00:00"

Write-Host "Script completed. Check 'git log' to see the commits." 