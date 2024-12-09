my-project/
├── components/         # Reusable components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer section
│   ├── HeroSection.tsx # Homepage hero section
│   ├── FAQ.tsx         # FAQ component
│   ├── ProductCard.tsx # Product card for listing
│   └── ContactForm.tsx # Contact form
│
├── layouts/            # Layout components for structure
│   └── MainLayout.tsx  # Primary layout for all pages
│
├── pages/              # Next.js pages for routes
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About Us page
│   ├── contact.tsx     # Contact Us page
│   ├── faq.tsx         # FAQ page
│   ├── products.tsx    # Products listing page
│   └── product/[id].tsx # Dynamic product detail page
│
├── public/             # Static assets from Figma (images, icons)
│   ├── images/         # All image files
│   │   ├── homepage/   # Specific to homepage
│   │   ├── about/      # Specific to about page
│   │   ├── products/   # Product-related images
│   │   └── faq/        # FAQ page assets
│   └── icons/          # SVG icons from Figma
│
├── styles/             # Styling files
│   ├── globals.css     # Global Tailwind styles
│   ├── Homepage.module.css # Homepage specific CSS
│   └── components/     # Optional component-specific styles
│
├── types/              # TypeScript definitions
│   └── products.d.ts   # Example: Product data type
│
├── utils/              # Utility functions
│   ├── fetchData.ts    # API call handler
│   ├── formatPrice.ts  # Price formatting utility
│   └── constants.ts    # Application constants (e.g., API URLs)
│
├── .env.local          # Environment variables for API keys
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
