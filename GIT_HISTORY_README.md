# Shilpura Git History Generator

This set of scripts will create a realistic git history for the Shilpura e-commerce project with approximately 1500 commits spanning from July 7, 2024, to January 13, 2025. The history includes proper branching, varied commit frequencies, and follows the development phases outlined in the project documentation.

## Overview

The Git History Generator creates a simulated development timeline with:

- Approximately 1500 commits with descriptive messages
- Multiple feature branches and merges
- Varied commit frequencies to appear natural
- Author name set to "SageGallant" and email to "ramchouhan160@gmail.com"
- Development phases aligned with the project requirements

## Files Included

- `create_git_history.sh` - Main script that runs all parts in sequence
- `reset_git_history.sh` - Part 1: Project setup and initial development (July 7-22, 2024)
- `reset_git_history_part2.sh` - Part 2: Homepage and product catalog (July 23 - August 15, 2024)
- `reset_git_history_part3.sh` - Part 3: Artisan profiles and user features (August 16 - September 30, 2024)
- `reset_git_history_part4.sh` - Part 4: Finalization and deployment (October 1 - November 22, 2024)
- `reset_git_history_part5.sh` - Part 5: Post-launch updates (November 23, 2024 - January 13, 2025)

## Prerequisites

- Bash-compatible shell environment
- Git installed and available in your PATH
- The scripts must be run from the root of the Shilpura repository

## Usage Instructions

1. **Backup your current git history** (if needed)

   Before running the scripts, make sure to back up any important information in your current git history.

2. **Make the scripts executable**

   ```bash
   chmod +x create_git_history.sh
   chmod +x reset_git_history.sh
   chmod +x reset_git_history_part*.sh
   ```

3. **Run the main script**

   ```bash
   ./create_git_history.sh
   ```

   This will guide you through the process and confirm that you want to delete your existing git history.

4. **Verify the results**

   After the script completes, you can verify the git history with:

   ```bash
   git log
   git branch -a
   ```

## Important Notes

- **WARNING**: These scripts will **DELETE** your existing git history and create a new one.
- The scripts create a realistic development timeline but don't actually modify your project files (except for temporary dummy files that are immediately removed).
- To make this work with actual file changes, you would need to modify the scripts to include real file modifications.
- Each commit is backdated to the specified date using Git's author and committer date settings.

## Customization

If you want to customize the commit messages, dates, or other aspects:

1. Edit the appropriate script file(s)
2. Modify the commit messages, dates, or branch names as needed
3. Run the scripts again to create your customized git history

## Troubleshooting

- If any script fails, check the error message and ensure you're running from the root of your repository
- Make sure git is properly configured on your system
- Verify that you have write permissions in the repository directory

## License

These scripts are provided as-is for the Shilpura project. You are free to modify and use them as needed.

---

Created for the Shilpura e-commerce platform - a premium static website for handicrafts.
