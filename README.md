# Nazara by Aisha - Luxury Indian Couture

A luxury e-commerce website for bespoke Indian bridal and ethnic wear, built with React and integrated with Shopify.

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Shopify store (development or production)

### Setup Instructions

1. **Update the base path in `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Change this to your GitHub repository name
     // ...
   })
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on every push to main

4. **Claim Your Shopify Store**:
   - After deployment, you can claim your Shopify store to start accepting real orders
   - This starts your 30-day free trial with Shopify
   - After the trial, a paid Shopify plan is required to continue selling

### 🛍️ Shopify Integration

This site uses Shopify for:
- Product management
- Shopping cart and checkout
- Order processing
- Customer account management
- Payment processing

All backend e-commerce functionality is handled by Shopify, making this a truly static frontend that can be hosted anywhere.

### 🏗️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router DOM
- **E-commerce Backend**: Shopify Storefront API

### 📱 Features

- Responsive design for all devices
- Product browsing and filtering
- Shopping cart with persistent state
- Shopify checkout integration
- Wishlist functionality (localStorage)
- Contact forms
- Lookbook gallery
- About and company information

### 🎨 Design System

The site uses a luxury black and gold color scheme with:
- Primary font: Playfair Display (serif)
- Secondary font: Inter (sans-serif)
- Pure black background (#000000)
- Gold accents (#FFD700)

### 📝 Customization

To customize the store for your needs:

1. Update branding in `src/components/Navbar.tsx`
2. Modify colors in `src/index.css` and `tailwind.config.ts`
3. Replace images in `src/assets/`
4. Update Shopify store credentials in `src/lib/shopify.ts`

### 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📄 License

All rights reserved - Nazara by Aisha

---

Built with ❤️ using [Lovable](https://lovable.dev)
