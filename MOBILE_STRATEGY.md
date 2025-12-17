# Mobile Optimization Strategy

## 1. Core Philosophy: "Spacious & Intuitive"
The goal is to translate the premium, high-tech desktop experience into a fluid, accessible mobile interface without losing the visual impact. We prioritize content legibility, touch ease, and performance.

## 2. Responsive Design Framework
We utilize **Tailwind CSS** as our primary engine for responsive design, adhering to a "Mobile-First" mental model where base styles target mobile, and `md:`, `lg:` prefixes enhance the layout for larger screens.

### Grid & Layout
- **Fluid Grids:** Use `grid-cols-1` for mobile by default, moving to `md:grid-cols-2` or `lg:grid-cols-3` for tablets and desktops.
- **Container Constraints:** Ensure `container` class is used with `mx-auto px-6` to provide safe consistent gutters on small screens.
- **Vertical Spacing:** 
  - Mobile: `py-16` or `gap-8` (Compact but breathable).
  - Desktop: `py-32` or `gap-16` (Expansive).

### Typography Scale
To prevent visual overcrowding, we adjust font sizes dynamically:
- **Headings (H1):** `text-4xl` on mobile -> `md:text-6xl`, `lg:text-7xl` on desktop.
- **Body Text:** `text-lg` minimum for readability on phones, `text-xl` on desktop for "premium" feel.
- **Line Height:** Increased `leading-relaxed` to enhance readability on narrower viewports.

## 3. Navigation & Interaction
- **Top Navigation:** Collapsed into a `Sheet` (Side Drawer) component on screens smaller than `md` (768px).
- **Sub-navigation (e.g., Services):** converted from Sidebar lists to `Select` (Dropdown) components on mobile to save vertical space.
- **Touch Targets:** All interactive elements (buttons, links, inputs) must have a minimum touch target size of **44x44px**.
  - Buttons: `py-3` default on mobile.
  - Links: Added padding or block display to inline links where necessary.

## 4. Image & Asset Optimization
- **Background Elements:** Large glowing orbs/gradients are resized (`w-[300px]` mobile vs `w-[600px]` desktop) or reduced in opacity to prevent distraction on small screens.
- **Lazy Loading:** `loading="lazy"` on all below-the-fold images.
- **Aspect Ratios:** Use `aspect-video` or `aspect-square` to prevent layout shifts.

## 5. Testing & Validation Strategy
### Tools
- **Chrome DevTools:** Use Device Mode to simulate iPhone SE (small), iPhone 14 Pro (medium), and iPad Air (tablet).
- **Physical Testing:** Verify "thumb zone" reachability on actual devices.

### Checklist
1. [ ] No horizontal scrolling (overflow-x hidden).
2. [ ] Text does not touch edges (minimum `px-4` or `px-6`).
3. [ ] Modals take up full screen height/width if necessary on mobile.
4. [ ] Hover states (which don't exist on touch) have active state equivalents or are not critical for functionality.

## 6. Implementation Status
- [x] **Header:** Implemented Mobile Drawer.
- [x] **Services Page:** Implemented Mobile Dropdown for category selection.
- [x] **Team Modal:** Adjusted to scroll content on mobile.
- [x] **Hero Sections:** Standardized font scaling across all pages.
- [ ] **Forms:** Review input font size (16px+ prevents iOS zoom) and padding.
