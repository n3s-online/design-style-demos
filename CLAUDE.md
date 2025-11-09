# Design Style Demos - AI Agent Guidelines

This document provides comprehensive guidelines for AI coding agents (like Claude) working on this project. It describes the project structure, design philosophy, and detailed instructions for adding new design themes.

## Project Overview

This is a React + TypeScript + Vite project that showcases different design styles (neobrutalism, art-deco, pure-minimalism, glassmorphism, claymorphism, pop-art, y2k, vaporwave). Each design style provides a complete visual experience with custom layouts, iconography, and imagery.

## Architecture Principles

This project follows the **Open-Closed Principle**:
- The code is **open for extension** (adding new design styles is easy)
- The code is **closed for modification** (adding a new style doesn't require changing existing code)

## Project Structure

```
src/
├── components/
│   ├── ui/              # Base shadcn/ui components
│   ├── layouts/         # Per-theme layout components
│   │   ├── BaseLayout.tsx
│   │   ├── NeobrutalismLayout.tsx
│   │   ├── ArtDecoLayout.tsx
│   │   └── ...
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── styles/
│   ├── design-styles.ts # Design style definitions
│   └── ...
├── contexts/
│   └── DesignStyleContext.tsx
├── types/
│   └── design-style.ts
└── App.tsx
```

## Core Page Components

Each theme's page should include the following components to create a complete business dashboard experience:

### 1. Welcome Card
A prominent greeting card that introduces users to "Acme Corp"
- **Title**: "Welcome to Acme Corp"
- **Content**: "Your trusted partner in innovative business solutions. Explore our comprehensive dashboard to manage your projects, team, and resources all in one place."

### 2. Quick Actions Section
A set of action buttons for common tasks:
- **Button 1**: "Create New Project" (primary style, enabled)
- **Button 2**: "View Analytics" (secondary style, enabled)
- **Button 3**: "Team Settings" (outline style, enabled)
- **Button 4**: "Export Report" (primary style, **disabled**)

### 3. Contact Us Form
A comprehensive contact form with the following fields:
- **Full Name** (text input, placeholder: "John Doe")
- **Email Address** (email input, placeholder: "john@acmecorp.com")
- **Company** (text input, placeholder: "Your Company Inc.")
- **Phone Number** (tel input, placeholder: "+1 (555) 123-4567")
- **Message** (textarea, placeholder: "Tell us about your project...", 4 rows)

### 4. Account Preferences Section
Two subsections for user preferences:

**Email Preferences:**
- Checkbox: "Send me product updates"
- Checkbox: "Weekly newsletter" (default checked)
- Checkbox: "Marketing communications"

**Notifications:**
- Switch: "Email Notifications" (controllable)
- Switch: "Push Notifications" (default on)
- Switch: "SMS Alerts"

### 5. Project Status Section
Display project status with badges and progress indicators:

**Badges:**
- "Active" (success style)
- "In Review" (warning style)
- "Blocked" (error style)
- "Planning" (blue style)
- "Completed" (purple style)

**Progress Indicators:**
- Progress bar: "Website Redesign" at 67%
- Slider: "Team Resources" at 75%

### 6. Dashboard Tabs
A tabbed interface with four sections:
- **Overview**: "Welcome to your dashboard overview. Here you'll find key metrics, recent activity, and important updates from your team and projects."
- **Analytics**: "Track your performance with detailed analytics. Monitor user engagement, conversion rates, and revenue growth across all your projects."
- **Team**: "Manage your team members, assign roles, and collaborate effectively. View team performance and resource allocation at a glance."
- **Settings**: "Configure your account preferences, security settings, billing information, and integration options all in one place."

### 7. FAQ Accordion
Four frequently asked questions:

1. **What services does Acme Corp offer?**
   - "Acme Corp provides comprehensive business solutions including project management, team collaboration tools, analytics platforms, and custom software development tailored to your needs."

2. **How do I get started?**
   - "Getting started is easy! Simply create an account, choose your plan, and our onboarding team will guide you through the setup process. We offer personalized training sessions for all new clients."

3. **What support options are available?**
   - "We offer 24/7 email support, live chat during business hours, and dedicated account managers for enterprise customers. Our comprehensive knowledge base and video tutorials are also available anytime."

4. **Can I upgrade or downgrade my plan?**
   - "Yes! You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the end of your current billing cycle."

### 8. System Notifications Section
Four alert types:

1. **New Feature Available** (blue/info style)
   - "Check out our new AI-powered analytics dashboard for deeper insights into your business metrics."

2. **Update Successful** (success style)
   - "Your profile has been updated successfully. All changes are now live."

3. **Action Required** (warning style)
   - "Your payment method will expire soon. Please update your billing information."

4. **Service Disruption** (error style)
   - "We're experiencing higher than normal traffic. Some features may be temporarily unavailable."

### 9. Important Actions Dialog
A dialog for destructive actions:
- **Trigger Button**: "Delete Project"
- **Title**: "Confirm Deletion"
- **Description**: "Are you sure you want to delete this project? This action cannot be undone and all associated data will be permanently removed."
- **Actions**: "Cancel" (outline) and "Confirm Delete" (primary)

### 10. Services Grid
Six service cards in a responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop):

1. **Cloud Solutions**
   - "Scalable cloud infrastructure designed to grow with your business. Deploy, manage, and scale applications effortlessly."

2. **Data Analytics**
   - "Transform your data into actionable insights with our powerful analytics platform and visualization tools."

3. **Security Services**
   - "Enterprise-grade security solutions to protect your business from modern cyber threats and vulnerabilities."

4. **Team Collaboration**
   - "Streamline communication and boost productivity with integrated collaboration tools for distributed teams."

5. **API Integration**
   - "Seamlessly connect with third-party services and build custom integrations with our robust API platform."

6. **24/7 Support**
   - "Round-the-clock technical support from our expert team to keep your operations running smoothly."

## Adding a New Design Theme

### Step 1: Define the Design Style

Add a new style definition to `src/styles/design-styles.ts`:

```typescript
const myNewStyle: DesignStyle = {
  name: 'my-new-style',
  displayName: 'My New Style',
  metadata: {
    description: '...',
    characteristics: [...],
    colorPalette: [...],
    typography: [...]
  },
  background: { ... },
  card: { ... },
  navbar: { ... },
  button: { ... },
  // ... other component styles
}
```

Add it to the registry:

```typescript
export const designStyleRegistry: Record<DesignStyleName, DesignStyle> = {
  // ... existing styles
  'my-new-style': myNewStyle,
}
```

### Step 2: Update TypeScript Types

Add the new style name to `src/types/design-style.ts`:

```typescript
export type DesignStyleName =
  | 'neobrutalism'
  | 'art-deco'
  // ... other styles
  | 'my-new-style'
```

### Step 3: Create a Custom Layout Component

Create a new file `src/components/layouts/MyNewStyleLayout.tsx`:

```typescript
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'
// Import all necessary components

export function MyNewStyleLayout() {
  const { currentStyle } = useDesignStyle()

  return (
    <div className="w-full space-y-12">
      {/* Implement all 10 core sections with theme-specific customizations */}
      {/* 1. Welcome Card */}
      {/* 2. Quick Actions */}
      {/* 3. Contact Form */}
      {/* 4. Account Preferences */}
      {/* 5. Project Status */}
      {/* 6. Dashboard Tabs */}
      {/* 7. FAQ */}
      {/* 8. System Notifications */}
      {/* 9. Important Actions */}
      {/* 10. Services Grid */}
    </div>
  )
}
```

### Step 4: Add Theme-Specific Imagery

Each theme should have its own visual identity. Download and add appropriate images to the `public/` directory:

```
public/
├── neobrutalism/
│   ├── hero-image.jpg
│   ├── icon-1.svg
│   └── ...
├── art-deco/
│   ├── hero-image.jpg
│   └── ...
└── my-new-style/
    ├── hero-image.jpg
    └── ...
```

**Guidelines for imagery:**
- Use AI image generators (DALL-E, Midjourney, Stable Diffusion) or free stock photo sites (Unsplash, Pexels)
- Match the aesthetic of the theme (e.g., geometric patterns for Art Deco, bold graphics for Neobrutalism)
- Optimize images for web (compress to reasonable file sizes)
- Use appropriate formats: JPG for photos, SVG for icons/illustrations, PNG for images with transparency

**Example prompts for AI image generation:**
- **Neobrutalism**: "Bold geometric shapes, thick black borders, bright yellow and pink colors, playful energetic design"
- **Art Deco**: "1920s luxury, gold geometric patterns, elegant art deco architecture, sophisticated design"
- **Pure Minimalism**: "Clean white space, minimal design, simple elegant shapes, ultra-minimalist aesthetic"
- **Glassmorphism**: "Frosted glass effect, translucent surfaces, colorful gradients, modern blurred background"
- **Claymorphism**: "Soft clay texture, 3D puffy elements, pastel colors, tactile inflated design"
- **Pop Art**: "1960s pop art, bold primary colors, comic book style, Roy Lichtenstein inspired"
- **Y2K**: "Early 2000s internet aesthetic, chrome effects, bubblegum colors, glossy surfaces"
- **Vaporwave**: "80s/90s aesthetic, pastel pink and cyan, dreamy nostalgic vibe, retro digital art"

### Step 5: Update the Layout Selector

Create a layout selector that maps style names to layout components in `src/components/LayoutSelector.tsx`:

```typescript
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { BaseLayout } from './layouts/BaseLayout'
import { NeobrutalismLayout } from './layouts/NeobrutalismLayout'
// ... import other layouts
import { MyNewStyleLayout } from './layouts/MyNewStyleLayout'

export function LayoutSelector() {
  const { currentStyle } = useDesignStyle()

  switch (currentStyle.name) {
    case 'neobrutalism':
      return <NeobrutalismLayout />
    // ... other cases
    case 'my-new-style':
      return <MyNewStyleLayout />
    default:
      return <BaseLayout />
  }
}
```

### Step 6: Integration

Update `src/App.tsx` to use the layout selector:

```typescript
import { LayoutSelector } from '@/components/LayoutSelector'

function App() {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn("min-h-screen flex flex-col", currentStyle.background.body)}>
      <Navbar />
      <main className="flex-1 p-8">
        <div className={cn("max-w-7xl mx-auto p-8 rounded-lg", currentStyle.background.container)}>
          <LayoutSelector />
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

## Theme Customization Guidelines

### Layout Variations
Each theme can customize:
- **Section ordering**: Rearrange sections to fit the theme's narrative
- **Component variants**: Use different UI components (e.g., cards vs. plain divs)
- **Spacing**: Adjust margins, padding, and gaps
- **Grid layouts**: Change column counts, alignment, and responsiveness
- **Visual hierarchy**: Emphasize different elements based on the theme

### Iconography
- **Neobrutalism**: Bold, geometric icons with thick borders
- **Art Deco**: Elegant, symmetrical icons with geometric patterns
- **Pure Minimalism**: Simple line icons, minimal detail
- **Glassmorphism**: Translucent, modern icons with subtle effects
- **Claymorphism**: Soft, rounded 3D icons
- **Pop Art**: Comic-style, high-contrast icons
- **Y2K**: Chrome/metallic icons with glossy effects
- **Vaporwave**: Retro icons with pastel gradients

### Imagery Guidelines
- **Aspect ratios**: Use consistent aspect ratios within each theme
- **Color treatment**: Apply filters or overlays to match the color palette
- **Composition**: Choose images that complement the design philosophy
- **Accessibility**: Ensure sufficient contrast for text overlays

## Development Workflow

1. **Create the design style definition** in `design-styles.ts`
2. **Update type definitions** in `design-style.ts`
3. **Create custom layout component** in `layouts/`
4. **Download and optimize imagery** for the theme
5. **Test responsiveness** on mobile, tablet, and desktop
6. **Verify accessibility** (contrast ratios, keyboard navigation)
7. **Commit changes** with a descriptive message

## Best Practices

1. **Consistency**: Maintain consistent spacing and sizing within each theme
2. **Responsiveness**: Test all layouts on different screen sizes
3. **Accessibility**: Ensure proper color contrast and semantic HTML
4. **Performance**: Optimize images and avoid unnecessary re-renders
5. **Maintainability**: Keep layouts focused and well-organized
6. **Documentation**: Comment complex styling decisions

## Common Pitfalls to Avoid

1. **Mixing theme styles**: Don't apply classes from multiple themes simultaneously
2. **Hardcoding values**: Use the design style object, not hardcoded Tailwind classes
3. **Inconsistent spacing**: Follow the theme's spacing system
4. **Poor contrast**: Always check text readability against backgrounds
5. **Missing fallbacks**: Provide default layouts for unknown themes

## Resources

- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **shadcn/ui Components**: https://ui.shadcn.com/
- **React Documentation**: https://react.dev/
- **Vite Documentation**: https://vitejs.dev/

## Getting Help

If you encounter issues:
1. Check this documentation first
2. Review existing theme implementations for examples
3. Ensure all types are correctly defined
4. Test in isolation before integrating
5. Ask for clarification on ambiguous requirements
