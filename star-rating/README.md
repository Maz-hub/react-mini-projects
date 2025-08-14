# ⭐ React Star Rating Component

An interactive and reusable star rating UI built with React. Users can rate their experience from 1 to 5 stars. The component is fully customizable via props and built using component composition for flexibility and reusability.

---

## ⚙️ Features

- Hover to preview the rating
- Click to lock in your selection
- Custom feedback messages based on the rating
- Dynamic star coloring via props
- Clean component structure using composition

---

## 🧩 Components

### `Rating.jsx`

- Handles the main rating logic and state (`rating`, `hover`)
- Maps over an array of 5 numbers to render individual `<Star />` components
- Displays a heading and a feedback message after selection
- Accepts the following props:
  - `heading` _(string)_ – custom heading text
  - `feedbackMessages` _(array)_ – optional custom feedback
  - `color` _(string)_ – star color

### `Star.jsx`

- Stateless, reusable component that:
  - Receives color, star number, rating, hover, and event functions via props
  - Handles individual star rendering with dynamic color
  - Responds to click and hover events

---

## 🧠 Hooks & Logic

- `useState()` to manage:
  - `rating`: saved rating after user click
  - `hover`: temporary preview value while hovering
- `Array.from()` to generate 5-star array
- `.map()` to render stars dynamically
- Conditional styling and event handlers to update state

---

## 🛠️ Tech Stack

- React (functional components + hooks)
- Plain CSS for styling
- No external libraries — stars rendered via Unicode (`★`)
