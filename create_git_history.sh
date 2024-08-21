#!/bin/bash

# Main script to create a realistic git history for Shilpura
# This script will execute all five parts in sequence

echo "🌱 Shilpura Git History Generator 🌱"
echo "====================================="
echo "This script will create a realistic git history with 1500+ commits"
echo "from July 7, 2024 to January 13, 2025 for the Shilpura project."
echo ""
echo "WARNING: This will delete your existing git history and create a new one."
echo "Make sure you have backed up any important information."
echo ""
read -p "Are you sure you want to continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Operation cancelled"
  exit 1
fi

# Make all scripts executable
chmod +x reset_git_history.sh
chmod +x reset_git_history_part2.sh
chmod +x reset_git_history_part3.sh
chmod +x reset_git_history_part4.sh
chmod +x reset_git_history_part5.sh

# Execute each script in sequence
echo "🔄 Starting Part 1: Project Setup and Initial Development (July 7-22, 2024)..."
./reset_git_history.sh
echo "✅ Part 1 completed."

echo "🔄 Starting Part 2: Homepage and Product Catalog (July 23 - August 15, 2024)..."
./reset_git_history_part2.sh
echo "✅ Part 2 completed."

echo "🔄 Starting Part 3: Artisan Profiles and User Features (August 16 - September 30, 2024)..."
./reset_git_history_part3.sh
echo "✅ Part 3 completed."

echo "🔄 Starting Part 4: Finalization and Deployment (October 1 - November 22, 2024)..."
./reset_git_history_part4.sh
echo "✅ Part 4 completed."

echo "🔄 Starting Part 5: Post-Launch Updates (November 23, 2024 - January 13, 2025)..."
./reset_git_history_part5.sh
echo "✅ Part 5 completed."

# Count total commits
TOTAL_COMMITS=$(git rev-list --count HEAD)

echo "🎉 Git history creation completed successfully! 🎉"
echo "=================================================="
echo "Created $TOTAL_COMMITS commits spanning from July 7, 2024 to January 13, 2025."
echo "The history includes multiple feature branches and realistic development workflow."
echo ""
echo "All commits are authored by:"
echo "  Name:  SageGallant"
echo "  Email: ramchouhan160@gmail.com"
echo ""
echo "To use your repository normally now, just continue making commits as usual."
echo "Thank you for using the Shilpura Git History Generator!" 