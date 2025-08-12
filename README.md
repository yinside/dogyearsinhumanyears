# Dog Years Calculator

A modern, responsive web application built with Next.js and Tailwind CSS that accurately converts your dog's age to human years. The application features a scientific calculator, educational content, and integrates with Contentful CMS for dynamic content management.

## Features

- **Accurate Age Calculator**: Uses scientifically-backed formulas that account for dog size and non-linear aging patterns
- **Responsive Design**: Beautiful, warm-toned design that works on all devices
- **Educational Content**: Learn about dog aging, life stages, and care tips
- **Dynamic Articles**: Content management through Contentful CMS
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js 15 and optimized for speed

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom warm color palette
- **CMS**: Contentful (optional - fallback content included)
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional):
Copy `.env.local.example` to `.env.local` and configure:
```
# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contentful (optional)
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── articles/          # Articles listing and individual article pages
│   ├── globals.css        # Global styles with warm color theme
│   ├── layout.tsx         # Root layout with header and footer
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   └── Footer.tsx     # Site footer
│   └── ui/                # UI components
│       ├── Calculator.tsx # Dog age calculator
│       ├── HowItWorks.tsx # How it works section
│       └── InterestingFacts.tsx # Facts section
└── lib/
    └── contentful.ts      # Contentful client configuration
```

## Features Overview

### Dog Age Calculator
- Accounts for dog size (small, medium, large)
- Uses modern veterinary research
- Provides life stage information
- Interactive and user-friendly interface

### Content Management
- Integrates with Contentful CMS for articles and facts
- Fallback content when CMS is not configured
- Rich text content support
- Image management

### Design System
- Warm color palette (oranges, ambers, browns)
- Consistent typography using Inter font
- Responsive grid layouts
- Smooth animations and transitions
- Accessibility-focused design

## Google Tag Manager Setup (Optional)

To enable Google Tag Manager for analytics and tracking:

1. Create a Google Tag Manager account at [tagmanager.google.com](https://tagmanager.google.com)
2. Create a new container for your website
3. Copy your GTM container ID (format: GTM-XXXXXXX)
4. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
5. Configure your tags, triggers, and variables in the GTM dashboard
6. Publish your container

The GTM code will automatically be included in your application when the environment variable is set.

## Contentful Setup (Optional)

If you want to use Contentful for dynamic content:

1. Create a Contentful account
2. Set up content types:
   - **Article**: title, slug, excerpt, content, featuredImage, publishedDate
   - **InterestingFact**: title, description, icon
3. Add your credentials to `.env.local`
4. The app will automatically use Contentful content when available

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Customization

### Colors
The warm color theme can be customized in:
- `tailwind.config.js` - Tailwind color palette
- `src/app/globals.css` - CSS custom properties

### Content
All fallback content can be modified in the respective component files.

## License

MIT License - feel free to use this project for your own purposes.
