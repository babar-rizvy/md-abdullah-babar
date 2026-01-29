

## Add Dedicated CV Page

This plan will create a professional CV/Resume page for your portfolio website where visitors can view and download your CV.

### What Will Be Created

1. **New CV Page at `/cv` route**
   - Beautiful header with your name and profile photo
   - Embedded PDF viewer so visitors can preview your CV directly on the page
   - Prominent "Download CV" button for easy downloading
   - Back to home navigation
   - Consistent styling with the rest of your portfolio

2. **Navigation Updates**
   - Add "CV" link to the main navigation menu (desktop and mobile)
   - Add "Download CV" button in the hero section next to existing buttons

3. **CV File**
   - Your uploaded PDF will be copied to `public/cv.pdf` for direct access and downloading

### Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `public/cv.pdf` | Copy | Your uploaded CV file |
| `src/pages/CV.tsx` | Create | New dedicated CV page component |
| `src/App.tsx` | Modify | Add `/cv` route |
| `src/components/Navigation.tsx` | Modify | Add CV link to navigation |
| `src/components/Hero.tsx` | Modify | Add "Download CV" button |

### Page Design

The CV page will feature:
- Glassmorphism header card with your name "Md. Abdullah Babar" and title "Curriculum Vitae"
- Your profile photo in the header
- Full-width PDF viewer embedded in the page
- Large download button with hover animation
- Background decorative elements matching the site theme
- Responsive design for all screen sizes

### Navigation Changes

**Desktop Navigation:**
```text
Home | About | Services | Portfolio | CV | Contact | [Hire Me]
```

**Hero Section:**
- New "Download CV" button with download icon alongside existing "View Portfolio" and "Contact Me" buttons

---

### Technical Details

**CV Page Structure:**
- Uses `react-router-dom` for navigation
- PDF embedded using `<iframe>` with fallback download link
- Download button uses `<a>` tag with `download` attribute
- Reuses existing glass-card and gradient styles

**Route Configuration:**
```text
/     -> Index (Home page)
/cv   -> CV Page (New)
/*    -> NotFound (404)
```

**File References:**
- PDF accessed via `/cv.pdf` (from public folder)
- Profile photo imported from `@/assets/profile-photo.jpg`

