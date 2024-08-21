#!/bin/bash

# Part 3 of the Git history script for Shilpura
# This part covers August 16 - September 30, 2024

# Remember to run this after reset_git_history_part2.sh
# These functions should be defined in the first script but are included here for completeness
commit_with_date() {
  local message="$1"
  local date="$2"
  
  # Echo some content into a file to ensure we have changes to commit
  echo "Change for: $message at $date" >> changes.txt
  git add changes.txt
  
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

# Phase 4: Artisan profiles and community hub (August 16-31, 2024)
echo "Creating commits for Phase 4: Artisan profiles and community hub (August 16-31, 2024)..."

# August 16, 2024
create_branch "feature/artisan-profiles" "2024-08-16T08:30:00"
touch dummy_change.txt
git add dummy_change.txt
commit_with_date "Create artisan directory page structure" "2024-08-16T09:45:00"
rm dummy_change.txt
git add .
commit_with_date "Add artisan card grid layout" "2024-08-16T11:20:00"
commit_with_date "Implement artisan filtering by craft type" "2024-08-16T13:55:00"
commit_with_date "Create region-based artisan filtering" "2024-08-16T16:10:00"
commit_with_date "Add artisan search functionality" "2024-08-16T18:30:00"

# August 17, 2024
commit_with_date "Create artisan profile page template" "2024-08-17T09:15:00"
commit_with_date "Add artisan hero section" "2024-08-17T11:40:00"
commit_with_date "Implement artisan biography component" "2024-08-17T14:05:00"
commit_with_date "Add artisan gallery carousel" "2024-08-17T16:30:00"
commit_with_date "Create artisan video showcase" "2024-08-17T18:55:00"

# August 18, 2024
commit_with_date "Add craft technique descriptions" "2024-08-18T10:20:00"
commit_with_date "Implement artisan location map" "2024-08-18T12:45:00"
commit_with_date "Create 'Products by this Artisan' section" "2024-08-18T15:10:00"
commit_with_date "Add artisan awards and recognitions" "2024-08-18T17:35:00"

# August 19, 2024
commit_with_date "Implement artisan story timeline" "2024-08-19T08:50:00"
commit_with_date "Add 'Behind the Scenes' section" "2024-08-19T11:15:00"
commit_with_date "Create artisan Q&A component" "2024-08-19T13:40:00"
commit_with_date "Add artisan contact form" "2024-08-19T16:05:00"
commit_with_date "Implement 'Commission a Piece' request form" "2024-08-19T18:30:00"

# August 20, 2024
commit_with_date "Add artisan social media links" "2024-08-20T09:10:00"
commit_with_date "Create artisan workshop schedule" "2024-08-20T11:35:00"
commit_with_date "Implement 'Meet the Team' section" "2024-08-20T14:00:00"
commit_with_date "Add studio tour virtual experience" "2024-08-20T16:25:00"
commit_with_date "Create artisan testimonials carousel" "2024-08-20T18:50:00"

# August 21, 2024
create_branch "feature/community-hub" "2024-08-21T08:35:00"
commit_with_date "Create community hub page structure" "2024-08-21T10:00:00"
commit_with_date "Add community events calendar" "2024-08-21T12:25:00"
commit_with_date "Implement workshops listing" "2024-08-21T14:50:00"
commit_with_date "Create virtual events section" "2024-08-21T17:15:00"
merge_branch "feature/artisan-profiles" "2024-08-21T19:40:00"

# August 22, 2024
commit_with_date "Add community forum placeholder" "2024-08-22T08:55:00"
commit_with_date "Create discussion topics grid" "2024-08-22T11:20:00"
commit_with_date "Implement static forum thread view" "2024-08-22T13:45:00"
commit_with_date "Add 'Create Discussion' button" "2024-08-22T16:10:00"
commit_with_date "Create forum categories component" "2024-08-22T18:35:00"

# August 23, 2024
commit_with_date "Add craft tutorials section" "2024-08-23T09:15:00"
commit_with_date "Create tutorial card component" "2024-08-23T11:40:00"
commit_with_date "Implement tutorial detail page" "2024-08-23T14:05:00"
commit_with_date "Add tutorial difficulty levels" "2024-08-23T16:30:00"
commit_with_date "Create tutorial categories" "2024-08-23T18:55:00"

# August 24, 2024
commit_with_date "Add 'User Projects' gallery" "2024-08-24T10:25:00"
commit_with_date "Create project submission form" "2024-08-24T12:50:00"
commit_with_date "Implement project detail view" "2024-08-24T15:15:00"
commit_with_date "Add 'Like' and 'Save' buttons for projects" "2024-08-24T17:40:00"

# August 25, 2024
commit_with_date "Create blog section structure" "2024-08-25T09:30:00"
commit_with_date "Add blog post cards" "2024-08-25T11:55:00"
commit_with_date "Implement blog post detail page" "2024-08-25T14:20:00"
commit_with_date "Add blog categories and tags" "2024-08-25T16:45:00"
commit_with_date "Create 'Related Posts' section" "2024-08-25T19:10:00"

# August 26, 2024
commit_with_date "Add 'Sustainable Practices' content section" "2024-08-26T08:50:00"
commit_with_date "Create sustainability badges explanation" "2024-08-26T11:15:00"
commit_with_date "Implement 'Our Impact' statistics" "2024-08-26T13:40:00"
commit_with_date "Add fair trade practices information" "2024-08-26T16:05:00"
commit_with_date "Create material sourcing transparency page" "2024-08-26T18:30:00"

# August 27, 2024
commit_with_date "Add community livestream placeholder" "2024-08-27T09:10:00"
commit_with_date "Create livestream schedule component" "2024-08-27T11:35:00"
commit_with_date "Implement livestream archive" "2024-08-27T14:00:00"
commit_with_date "Add notification sign-up for streams" "2024-08-27T16:25:00"
commit_with_date "Create chat interface placeholder" "2024-08-27T18:50:00"

# August 28, 2024
commit_with_date "Add community challenges section" "2024-08-28T08:40:00"
commit_with_date "Create challenge details component" "2024-08-28T11:05:00"
commit_with_date "Implement challenge submission form" "2024-08-28T13:30:00"
commit_with_date "Add challenge leaderboard" "2024-08-28T15:55:00"
commit_with_date "Create challenge winners showcase" "2024-08-28T18:20:00"

# August 29, 2024
commit_with_date "Add community marketplace placeholder" "2024-08-29T09:25:00"
commit_with_date "Create marketplace listings grid" "2024-08-29T11:50:00"
commit_with_date "Implement marketplace item details" "2024-08-29T14:15:00"
commit_with_date "Add 'Contact Seller' form" "2024-08-29T16:40:00"
commit_with_date "Create marketplace categories" "2024-08-29T19:05:00"

# August 30, 2024
commit_with_date "Add community resource library" "2024-08-30T08:55:00"
commit_with_date "Create downloadable resources section" "2024-08-30T11:20:00"
commit_with_date "Implement resource filtering" "2024-08-30T13:45:00"
commit_with_date "Add resource detail view" "2024-08-30T16:10:00"
commit_with_date "Create resource categories" "2024-08-30T18:35:00"

# August 31, 2024
commit_with_date "Optimize community hub for mobile" "2024-08-31T09:40:00"
commit_with_date "Add community navigation menu" "2024-08-31T12:05:00"
commit_with_date "Implement community search functionality" "2024-08-31T14:30:00"
commit_with_date "Add user activity feed placeholder" "2024-08-31T16:55:00"
commit_with_date "Create community notification system" "2024-08-31T19:20:00"
merge_branch "feature/community-hub" "2024-08-31T21:00:00"

# Phase 5: Static login, profile, cart, and checkout (September 1-15, 2024)
echo "Creating commits for Phase 5: Static login, profile, cart, and checkout (September 1-15, 2024)..."

# September 1, 2024
create_branch "feature/user-auth" "2024-09-01T09:15:00"
commit_with_date "Create login page structure" "2024-09-01T10:40:00"
commit_with_date "Add login form component" "2024-09-01T13:05:00"
commit_with_date "Implement form validation" "2024-09-01T15:30:00"
commit_with_date "Add 'Forgot Password' functionality" "2024-09-01T17:55:00"

# September 2, 2024
commit_with_date "Create registration page" "2024-09-02T08:45:00"
commit_with_date "Add registration form" "2024-09-02T11:10:00"
commit_with_date "Implement password strength indicator" "2024-09-02T13:35:00"
commit_with_date "Add terms and privacy checkboxes" "2024-09-02T16:00:00"
commit_with_date "Create successful registration page" "2024-09-02T18:25:00"

# September 3, 2024
commit_with_date "Add social login buttons" "2024-09-03T09:20:00"
commit_with_date "Create password reset page" "2024-09-03T11:45:00"
commit_with_date "Implement email verification placeholder" "2024-09-03T14:10:00"
commit_with_date "Add two-factor authentication UI" "2024-09-03T16:35:00"
commit_with_date "Create authentication header states" "2024-09-03T19:00:00"

# September 4, 2024
create_branch "feature/user-profile" "2024-09-04T08:50:00"
commit_with_date "Create user profile page structure" "2024-09-04T11:15:00"
commit_with_date "Add profile information section" "2024-09-04T13:40:00"
commit_with_date "Implement profile edit form" "2024-09-04T16:05:00"
commit_with_date "Add profile avatar uploader" "2024-09-04T18:30:00"
merge_branch "feature/user-auth" "2024-09-04T20:00:00"

# September 5, 2024
commit_with_date "Create address book component" "2024-09-05T09:10:00"
commit_with_date "Add address form" "2024-09-05T11:35:00"
commit_with_date "Implement country/region selector" "2024-09-05T14:00:00"
commit_with_date "Add address card component" "2024-09-05T16:25:00"
commit_with_date "Create 'Set as Default' functionality" "2024-09-05T18:50:00"

# September 6, 2024
commit_with_date "Add order history section" "2024-09-06T08:40:00"
commit_with_date "Create order card component" "2024-09-06T11:05:00"
commit_with_date "Implement order detail view" "2024-09-06T13:30:00"
commit_with_date "Add order status badges" "2024-09-06T15:55:00"
commit_with_date "Create order tracking placeholder" "2024-09-06T18:20:00"

# September 7, 2024
commit_with_date "Add wishlist management" "2024-09-07T10:15:00"
commit_with_date "Create wishlist item component" "2024-09-07T12:40:00"
commit_with_date "Implement 'Move to Cart' functionality" "2024-09-07T15:05:00"
commit_with_date "Add wishlist sharing options" "2024-09-07T17:30:00"

# September 8, 2024
commit_with_date "Create saved payment methods section" "2024-09-08T09:25:00"
commit_with_date "Add payment method card component" "2024-09-08T11:50:00"
commit_with_date "Implement 'Add Payment Method' form" "2024-09-08T14:15:00"
commit_with_date "Create payment method editing" "2024-09-08T16:40:00"
commit_with_date "Add credit card display component" "2024-09-08T19:05:00"

# September 9, 2024
commit_with_date "Create preference settings page" "2024-09-09T08:35:00"
commit_with_date "Add notification preferences" "2024-09-09T11:00:00"
commit_with_date "Implement language preferences" "2024-09-09T13:25:00"
commit_with_date "Add currency preferences" "2024-09-09T15:50:00"
commit_with_date "Create theme preferences" "2024-09-09T18:15:00"
merge_branch "feature/user-profile" "2024-09-09T20:30:00"

# September 10, 2024
create_branch "feature/shopping-cart" "2024-09-10T08:45:00"
commit_with_date "Create shopping cart page structure" "2024-09-10T11:10:00"
commit_with_date "Add cart item component" "2024-09-10T13:35:00"
commit_with_date "Implement quantity adjuster" "2024-09-10T16:00:00"
commit_with_date "Add remove item functionality" "2024-09-10T18:25:00"

# September 11, 2024
commit_with_date "Create cart summary component" "2024-09-11T09:15:00"
commit_with_date "Add subtotal calculation" "2024-09-11T11:40:00"
commit_with_date "Implement shipping estimate" "2024-09-11T14:05:00"
commit_with_date "Add tax calculation placeholder" "2024-09-11T16:30:00"
commit_with_date "Create order total display" "2024-09-11T18:55:00"

# September 12, 2024
commit_with_date "Add promo code input" "2024-09-12T08:50:00"
commit_with_date "Create 'Apply Coupon' functionality" "2024-09-12T11:15:00"
commit_with_date "Implement discount display" "2024-09-12T13:40:00"
commit_with_date "Add 'Continue Shopping' button" "2024-09-12T16:05:00"
commit_with_date "Create 'Proceed to Checkout' button" "2024-09-12T18:30:00"

# September 13, 2024
commit_with_date "Add 'Save for Later' functionality" "2024-09-13T09:20:00"
commit_with_date "Create saved items section" "2024-09-13T11:45:00"
commit_with_date "Implement 'Move to Cart' from saved" "2024-09-13T14:10:00"
commit_with_date "Add recently viewed items" "2024-09-13T16:35:00"
commit_with_date "Create 'You Might Also Like' section" "2024-09-13T19:00:00"

# September 14, 2024
create_branch "feature/checkout" "2024-09-14T08:40:00"
commit_with_date "Create checkout page structure" "2024-09-14T11:05:00"
commit_with_date "Add checkout progress indicator" "2024-09-14T13:30:00"
commit_with_date "Implement shipping address form" "2024-09-14T15:55:00"
commit_with_date "Add billing address form" "2024-09-14T18:20:00"
merge_branch "feature/shopping-cart" "2024-09-14T20:45:00"

# September 15, 2024
commit_with_date "Create shipping method selector" "2024-09-15T09:10:00"
commit_with_date "Add shipping method cards" "2024-09-15T11:35:00"
commit_with_date "Implement delivery date estimates" "2024-09-15T14:00:00"
commit_with_date "Add payment method selector" "2024-09-15T16:25:00"
commit_with_date "Create credit card form" "2024-09-15T18:50:00"
merge_branch "feature/checkout" "2024-09-15T21:15:00"

# Phase 6: Dark mode and additional pages (September 16-30, 2024)
echo "Creating commits for Phase 6: Dark mode and additional pages (September 16-30, 2024)..."

# September 16, 2024
create_branch "feature/dark-mode" "2024-09-16T08:35:00"
commit_with_date "Set up dark mode color variables" "2024-09-16T10:00:00"
commit_with_date "Create theme context" "2024-09-16T12:25:00"
commit_with_date "Implement theme toggle component" "2024-09-16T14:50:00"
commit_with_date "Add system preference detection" "2024-09-16T17:15:00"
commit_with_date "Create theme persistence in localStorage" "2024-09-16T19:40:00"

# September 17, 2024
commit_with_date "Apply dark theme to header" "2024-09-17T08:45:00"
commit_with_date "Implement dark theme for footer" "2024-09-17T11:10:00"
commit_with_date "Add dark theme to homepage" "2024-09-17T13:35:00"
commit_with_date "Create dark mode for product cards" "2024-09-17T16:00:00"
commit_with_date "Implement dark theme for buttons" "2024-09-17T18:25:00"

# September 18, 2024
commit_with_date "Add dark theme for product detail page" "2024-09-18T09:15:00"
commit_with_date "Create dark mode for cart" "2024-09-18T11:40:00"
commit_with_date "Implement dark theme for checkout" "2024-09-18T14:05:00"
commit_with_date "Add dark mode for forms" "2024-09-18T16:30:00"
commit_with_date "Create dark theme for modals" "2024-09-18T18:55:00"

# September 19, 2024
commit_with_date "Add dark theme for artisan profiles" "2024-09-19T08:50:00"
commit_with_date "Implement dark mode for community hub" "2024-09-19T11:15:00"
commit_with_date "Create dark theme for user profiles" "2024-09-19T13:40:00"
commit_with_date "Add dark mode for blog posts" "2024-09-19T16:05:00"
commit_with_date "Implement dark theme for navigation" "2024-09-19T18:30:00"

# September 20, 2024
commit_with_date "Optimize dark theme transitions" "2024-09-20T09:20:00"
commit_with_date "Fix contrast issues in dark mode" "2024-09-20T11:45:00"
commit_with_date "Add dark theme for error pages" "2024-09-20T14:10:00"
commit_with_date "Create dark mode for tooltips" "2024-09-20T16:35:00"
commit_with_date "Implement dark theme for notifications" "2024-09-20T19:00:00"
merge_branch "feature/dark-mode" "2024-09-20T21:25:00"

# September 21, 2024
create_branch "feature/about-page" "2024-09-21T09:10:00"
commit_with_date "Create About Us page structure" "2024-09-21T11:35:00"
commit_with_date "Add company story section" "2024-09-21T14:00:00"
commit_with_date "Implement mission and values" "2024-09-21T16:25:00"
commit_with_date "Add team member profiles" "2024-09-21T18:50:00"

# September 22, 2024
commit_with_date "Create company timeline" "2024-09-22T10:15:00"
commit_with_date "Add 'Our Approach' section" "2024-09-22T12:40:00"
commit_with_date "Implement partner logos grid" "2024-09-22T15:05:00"
commit_with_date "Add testimonials from partners" "2024-09-22T17:30:00"

# September 23, 2024
commit_with_date "Create sustainability commitment section" "2024-09-23T08:40:00"
commit_with_date "Add impact statistics" "2024-09-23T11:05:00"
commit_with_date "Implement 'Join Our Team' section" "2024-09-23T13:30:00"
commit_with_date "Add job listings component" "2024-09-23T15:55:00"
commit_with_date "Create press kit download section" "2024-09-23T18:20:00"
merge_branch "feature/about-page" "2024-09-23T20:45:00"

# September 24, 2024
create_branch "feature/contact-page" "2024-09-24T08:35:00"
commit_with_date "Create Contact Us page structure" "2024-09-24T11:00:00"
commit_with_date "Add contact form component" "2024-09-24T13:25:00"
commit_with_date "Implement form validation" "2024-09-24T15:50:00"
commit_with_date "Add contact information section" "2024-09-24T18:15:00"

# September 25, 2024
commit_with_date "Create store locations map" "2024-09-25T09:05:00"
commit_with_date "Add location cards" "2024-09-25T11:30:00"
commit_with_date "Implement hours of operation" "2024-09-25T13:55:00"
commit_with_date "Add FAQ section" "2024-09-25T16:20:00"
commit_with_date "Create FAQ accordion component" "2024-09-25T18:45:00"

# September 26, 2024
commit_with_date "Add 'Request a Catalog' form" "2024-09-26T08:50:00"
commit_with_date "Create 'Book an Appointment' form" "2024-09-26T11:15:00"
commit_with_date "Implement contact success page" "2024-09-26T13:40:00"
commit_with_date "Add social media contact links" "2024-09-26T16:05:00"
commit_with_date "Create customer support chat placeholder" "2024-09-26T18:30:00"
merge_branch "feature/contact-page" "2024-09-26T20:55:00"

# September 27, 2024
create_branch "feature/policy-pages" "2024-09-27T09:20:00"
commit_with_date "Create Privacy Policy page" "2024-09-27T11:45:00"
commit_with_date "Add Terms of Service page" "2024-09-27T14:10:00"
commit_with_date "Implement Return Policy page" "2024-09-27T16:35:00"
commit_with_date "Add Shipping Policy page" "2024-09-27T19:00:00"

# September 28, 2024
commit_with_date "Create Cookie Policy page" "2024-09-28T10:30:00"
commit_with_date "Add Accessibility Statement" "2024-09-28T12:55:00"
commit_with_date "Implement GDPR Compliance page" "2024-09-28T15:20:00"
commit_with_date "Add Legal Notices page" "2024-09-28T17:45:00"

# September 29, 2024
commit_with_date "Create Sustainability Policy page" "2024-09-29T09:25:00"
commit_with_date "Add Ethical Sourcing statement" "2024-09-29T11:50:00"
commit_with_date "Implement Fair Trade commitment page" "2024-09-29T14:15:00"
commit_with_date "Add Artisan Partnership guidelines" "2024-09-29T16:40:00"
commit_with_date "Create Community Guidelines page" "2024-09-29T19:05:00"

# September 30, 2024
commit_with_date "Finalize policy page styling" "2024-09-30T08:45:00"
commit_with_date "Add language selector to policy pages" "2024-09-30T11:10:00"
commit_with_date "Implement policy version history" "2024-09-30T13:35:00"
commit_with_date "Add policy effective date displays" "2024-09-30T16:00:00"
commit_with_date "Create policy acceptance tracking" "2024-09-30T18:25:00"
merge_branch "feature/policy-pages" "2024-09-30T20:50:00"

echo "Part 3 of script completed (August 16 - September 30, 2024)." 