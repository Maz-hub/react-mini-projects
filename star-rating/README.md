# ⭐ React Star Rating Component

An interactive star rating UI built with React, allowing users to rate their experience from 1 to 5 stars. Stars highlight on hover and lock in place when selected, with dynamic feedback messages based on the rating.

---

### ⚙️ Hooks & Features

- `useState()` to manage:
  - Selected rating
  - Star hover state
- `Array.from()` to dynamically generate stars
- `.map()` to render interactive elements in JSX
- Conditional rendering and class styling
- Event handlers:
  - `onClick` to select a rating
  - `onMouseEnter` / `onMouseLeave` for preview effect
- Feedback messages linked to each rating (e.g. “Fair”, “Excellent”)
- Unicode stars (`★`) with custom styling (no icon library)

---

### ✅ Key Features

- Hover to preview your rating
- Click to lock in your rating
- Feedback text updates based on selected value
- Fully responsive, lightweight, and easy to reuse

---

### 📁 File Overview

/src
└── Rating.jsx # Star rating component logic
└── App.jsx # Main app entry
└── styles.css # Component styling
