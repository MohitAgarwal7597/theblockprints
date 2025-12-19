# The Block Prints - E-commerce Website

A fully static, ultra-fast, image-first e-commerce website for a textile brand built with Next.js and Tailwind CSS.

## 🚀 Features

- **100% Static Website** - No backend, no APIs, fully exportable
- **Modern UI/UX** - Premium design with smooth animations
- **Mobile-First & Responsive** - Perfect on all devices
- **Performance Optimized** - Fast loading with lazy loading and optimized images
- **Interactive Elements**:
  - Hero carousel with category slides
  - Horizontal scrolling video cards
  - First-visit popup modal
  - Smooth scroll animations
  - Product filters
  - Shopping cart (localStorage)
  - WhatsApp & Email checkout

## 📁 Project Structure

```
textile-ecommerce/
├── app/
│   ├── layout.jsx              # Root layout
│   ├── page.jsx                # Home page
│   ├── about/
│   │   └── page.jsx
│   ├── cart/
│   │   └── page.jsx
│   ├── category/
│   │   └── [slug]/
│   │       └── page.jsx        # Dynamic category pages
│   ├── checkout/
│   │   └── page.jsx
│   ├── contact/
│   │   └── page.jsx
│   ├── custom-design/
│   │   └── page.jsx
│   └── product/
│       └── [slug]/
│           └── page.jsx        # Dynamic product pages
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── HeroCarousel.jsx
│   ├── VideoCards.jsx
│   ├── FirstVisitPopup.jsx
│   ├── FloatingContact.jsx
│   └── ScrollAnimations.jsx
├── data/
│   └── products.json           # Single source of truth for all products
├── styles/
│   ├── globals.css             # Global styles & CSS variables
│   ├── animations.css          # Animation definitions
│   └── components.css          # Component-specific styles
├── public/
│   ├── images/                 # All product & hero images
│   └── videos/                 # Product videos
├── next.config.js              # Next.js configuration for static export
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js
└── package.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Images & Videos**
   
   Place your images in these directories:
   ```
   public/images/hero/              # Hero carousel images
   public/images/products/          # Product images
   public/images/video-posters/     # Video thumbnail posters
   public/images/popup/             # Popup modal images
   public/images/gallery/           # Gallery images
   public/images/about/             # About page images
   public/videos/                   # Product videos
   ```

3. **Update Product Data**
   
   Edit `data/products.json` to add/modify products. This is your single source of truth for all product data.

4. **Customize Contact Information**
   
   Update phone numbers and email in:
   - `components/Footer.jsx`
   - `components/FloatingContact.jsx`
   - `app/checkout/page.jsx`
   - `app/contact/page.jsx`

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Export

Build the static website:

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Next.js settings

### Deploy to Any Static Host

1. Run `npm run build`
2. Upload the `out/` folder to your host
3. Configure your domain

## 🎨 Customization

### Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --color-primary: #B85C38;
  --color-secondary: #8A9A5B;
  --color-accent: #D4A574;
  --color-dark: #2C2C2C;
  --color-light: #F8F8F8;
}
```

### Fonts

Update fonts in `styles/globals.css` (currently using Philosopher & Laila from Google Fonts).

### Navigation

Edit menu items in `components/Navigation.jsx`.

### Products

All product data is in `data/products.json`. Edit this file to:
- Add new products
- Change prices
- Update categories
- Modify descriptions

## 📱 Contact Integration

The website integrates with:

- **WhatsApp**: Orders and queries
- **Email**: Backup contact method
- **Phone**: Direct calls
- **Instagram**: Social engagement
- **Facebook**: Social presence

Update contact details in the components listed above.

## ⚡ Performance Features

- Static generation (no server required)
- Image lazy loading
- Skeleton loaders
- Intersection Observer animations
- localStorage for cart
- Optimized fonts
- Minimal JavaScript bundle

## 🎯 Key Pages

- **/** - Home with hero carousel, featured products, video cards
- **/category/[slug]** - Category listings with filters
- **/product/[slug]** - Product details with gallery
- **/cart** - Shopping cart
- **/checkout** - WhatsApp/Email order placement
- **/custom-design** - Custom printing service info
- **/about** - About the brand
- **/contact** - Contact information

## 📝 Notes

- This is a **static-only** website
- No backend or database required
- Cart stored in browser localStorage
- Orders sent via WhatsApp/Email
- No file uploads or server forms
- Perfect for small to medium catalogs

## 🐛 Troubleshooting

### Build Errors

- Ensure all images exist in public/ directory
- Check product JSON for syntax errors
- Verify Node.js version is 18+

### Images Not Loading

- Check image paths in products.json
- Ensure images are in public/ directory
- Images must use absolute paths starting with /

### Routing Issues

- Use next/link for all internal links
- Don't use React Router
- Category/product slugs must match data

## 📄 License

This project is proprietary and confidential.

## 💬 Support

For questions or custom development:
- WhatsApp: +91 93145 21343
- Email: theblockprintsjpr@gmail.com

---

Built with ❤️ using Next.js & Tailwind CSS
