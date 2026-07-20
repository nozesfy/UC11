---
name: Retail Operations Matrix
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3e4941'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6e7a71'
  outline-variant: '#bdcabf'
  surface-tint: '#006d43'
  primary: '#006a41'
  on-primary: '#ffffff'
  primary-container: '#128555'
  on-primary-container: '#f6fff5'
  inverse-primary: '#76daa2'
  secondary: '#596057'
  on-secondary: '#ffffff'
  secondary-container: '#dde5d9'
  on-secondary-container: '#5f665d'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#92f7bc'
  primary-fixed-dim: '#76daa2'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#005231'
  secondary-fixed: '#dde5d9'
  secondary-fixed-dim: '#c1c9be'
  on-secondary-fixed: '#161d16'
  on-secondary-fixed-variant: '#414940'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#723600'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-padding: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for high-velocity retail environments where operational efficiency and data clarity are paramount. The personality is professional, authoritative, and industrial—reflecting the scale of a large supermarket chain. 

The aesthetic is a hybrid of **Minimalism** and **Modern Corporate**, utilizing high-contrast boundaries and a rigid structural grid to organize dense information. It prioritizes "functional density," ensuring that warehouse managers and regional directors can scan inventory levels, sales metrics, and logistics status at a glance without visual fatigue. The emotional response is one of reliability, precision, and control.

## Colors
The palette is grounded in a high-contrast functional logic. 
- **Primary (#2a9462):** Used for primary actions, success states, and key navigational indicators. It represents growth and operational health.
- **Secondary (#ecf4e8):** Used for large surface areas, row highlighting, and subtle categorization to reduce eye strain on data-heavy screens.
- **Accent (#f97f08):** Reserved for alerts, critical warnings, and attention-grabbing data points that require immediate intervention.
- **Neutral (#1a1a1a):** Provides the foundation for typography and structural borders, ensuring maximum legibility against the white background.

## Typography
This design system utilizes **Inter** for its exceptional legibility in data-dense interfaces and neutral, systematic tone. 

The type hierarchy is optimized for dashboards:
- **Headlines:** Bold and tight to anchor sections of data.
- **Data Display:** Utilizes tabular numbers (`tnum`) for all numerical values to ensure columns of figures align perfectly for comparison.
- **Labels:** Uppercase with slight tracking for clear categorization of data fields and table headers.

## Layout & Spacing
A **Fixed Grid** model is employed for the primary dashboard structure to maintain consistent information hierarchy across desktop viewports. The layout utilizes a 12-column grid with 16px gutters.

- **Desktop (1440px+):** 12 columns, 24px side margins.
- **Tablet (768px - 1439px):** 8 columns, 16px side margins.
- **Mobile (<767px):** 4 columns, 12px side margins.

Information density is high; spacing follows a strict 4px baseline grid. Elements within cards should use tight internal padding (12px or 16px) to maximize the amount of visible data on a single screen.

## Elevation & Depth
This design system rejects shadows in favor of **Low-contrast outlines** and **Tonal layering**. 

Depth is communicated through 1px solid borders using a light neutral stroke (#E0E0E0). Backgrounds for cards remain flat white to ensure maximum contrast for text and data visualizations. For nested content or active states, the secondary green (#ecf4e8) provides a subtle tonal shift without breaking the flat, industrial aesthetic. 

The absence of shadows emphasizes the "operational tool" feel, removing any visual fluff that might obscure data.

## Shapes
The shape language is strictly **geometric and orthogonal**. 
- **Containers & Cards:** 0px border-radius (sharp corners). This reinforces the grid and allows for seamless tiling of data modules.
- **Inputs & Dropdowns:** 0px border-radius to match the container logic.
- **Buttons Only:** To distinguish interactive triggers from static data containers, buttons utilize a "Pill-shaped" or highly rounded treatment. This creates a clear visual affordance for "action" versus "information."

## Components
- **Buttons:** Rounded (Pill-shaped). Primary buttons use the Primary Green background with white text. Secondary buttons use an outline style with Primary Green text. 
- **Cards:** Sharp corners (0px), white background, 1px neutral border. No shadow.
- **Data Tables:** High-density. Header rows use the Secondary Green background with Label-Bold typography. Rows have a 1px bottom border; zebra-striping is not required unless the table exceeds 20 rows.
- **Chips/Status Tags:** Sharp corners. Use a background color corresponding to the status (e.g., Secondary Green for "Success", Accent Orange for "Pending").
- **Input Fields:** Sharp corners, 1px border. On focus, the border thickens to 2px Primary Green.
- **KPI Widgets:** Large numerical displays using the `headline-lg` style, aligned to the top left of the card, with trend indicators (arrows) placed immediately to the right of the figure.
- **Navigation:** Vertical side-bar with a white background and 1px right border. Active states are indicated by a 4px Primary Green left-edge highlight.