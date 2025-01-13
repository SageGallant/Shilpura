# Shilpura - Premium Handicrafts E-commerce Platform

Welcome to Shilpura, a premium e-commerce platform for handicrafts designed to evoke the luxury feel of high-end brands. This project showcases artisan craftsmanship through an elegant and modern website.

## Features

- Premium design with luxury brand aesthetics
- Product showcase with detailed descriptions and images
- Artisan profiles highlighting their craftsmanship
- Responsive design optimized for all devices
- Dark mode support
- Static shopping cart and checkout experience
- Client-side search functionality

## Tech Stack

- **Framework**: Next.js
- **Frontend**: React, TypeScript, TailwindCSS
- **Deployment**: GitHub Pages

## Deployment

### Automatic Deployment with GitHub Actions

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment process is managed by GitHub Actions workflow in `.github/workflows/deploy.yml`.

To set up automatic deployment:

1. Fork or push this repository to your GitHub account
2. Go to your repository settings
3. Navigate to Pages and select "GitHub Actions" as the source
4. Make sure GitHub Pages is enabled for your repository

### Manual Deployment

To manually deploy the project to GitHub Pages:

1. Make sure you have Git and Node.js installed
2. Clone the repository
3. Run the deployment script:

```bash
# On Windows
.\deploy-to-github-pages.ps1

# On macOS/Linux
chmod +x deploy-to-github-pages.sh
./deploy-to-github-pages.sh
```

Before running the script, update the configuration variables at the top of the script with your GitHub username and repository details.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- All product images and descriptions are placeholders
- Design inspired by luxury brands and artisanal craftsmanship
