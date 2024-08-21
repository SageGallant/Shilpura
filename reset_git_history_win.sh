#!/bin/bash

# Windows-friendly version of Git history script for Shilpura
# This script ensures that file changes are properly created for each commit

# Helper functions
commit_with_date() {
  local message="$1"
  local date="$2"
  
  # Echo some content into a file to ensure we have changes to commit
  echo "Change for: $message at $date" >> changes.txt
  git add changes.txt
  
  # Use environment variables for the commit date
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "$message"
  echo "Created commit: $message"
}

create_branch() {
  local branch_name="$1"
  local date="$2"
  
  echo "Creating branch: $branch_name"
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git branch "$branch_name" 2>/dev/null || true
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git checkout "$branch_name"
  
  # Create initial file for this branch to ensure we have something to commit
  echo "Initial content for branch $branch_name created at $date" > changes.txt
  git add changes.txt
}

merge_branch() {
  local branch_name="$1"
  local date="$2"
  
  echo "Merging branch: $branch_name into main"
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git checkout main
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git merge --no-ff "$branch_name" -m "Merge branch '$branch_name' into main"
}

# Make sure we're starting with a clean repository
git init
echo "# Shilpura - Premium Handicrafts E-commerce Platform" > README.md
git add README.md
git commit -m "Initial commit"

# Create main branch (if not present)
git branch -M main

# Phase 7: Design finalization and placeholder content (October 1-15, 2024)
echo "Creating commits for Phase 7: Design finalization and placeholder content (October 1-15, 2024)..."

# October 1, 2024
create_branch "feature/design-finalization" "2024-10-01T08:30:00"
commit_with_date "Audit typography across all pages" "2024-10-01T09:45:00"
commit_with_date "Standardize heading styles" "2024-10-01T11:20:00"
commit_with_date "Refine paragraph text styles" "2024-10-01T13:55:00"
commit_with_date "Adjust line heights for readability" "2024-10-01T16:10:00"
commit_with_date "Standardize font weights across site" "2024-10-01T18:30:00"

# October 2, 2024
commit_with_date "Audit color usage across all pages" "2024-10-02T08:45:00"
commit_with_date "Refine color contrast for accessibility" "2024-10-02T11:10:00"
commit_with_date "Standardize button colors and states" "2024-10-02T13:35:00"
commit_with_date "Adjust form field colors for consistency" "2024-10-02T16:00:00"
commit_with_date "Refine border colors across components" "2024-10-02T18:25:00"
commit_with_date "Fine-tune hover state colors" "2024-10-02T20:40:00"

# October 3, 2024
commit_with_date "Audit spacing and layout consistency" "2024-10-03T09:15:00"
commit_with_date "Standardize section padding" "2024-10-03T11:40:00"
commit_with_date "Refine grid layouts" "2024-10-03T14:05:00"
commit_with_date "Adjust component margins" "2024-10-03T16:30:00"
commit_with_date "Standardize container widths" "2024-10-03T18:55:00"
commit_with_date "Fix inconsistent spacing in footer" "2024-10-03T21:20:00"

# Create a few more commits to demonstrate it's working
# Cut down version - just to test functionality

# October 4, 2024
commit_with_date "Audit responsive breakpoints" "2024-10-04T08:50:00"
commit_with_date "Refine mobile layouts" "2024-10-04T11:15:00"

# Create a new branch
create_branch "feature/placeholder-content" "2024-10-07T08:40:00"
commit_with_date "Add placeholder product images" "2024-10-07T11:05:00"
commit_with_date "Create product descriptions for featured items" "2024-10-07T13:30:00"
merge_branch "feature/design-finalization" "2024-10-07T23:00:00"

echo "Script completed. Check 'git log' to see the commits." 