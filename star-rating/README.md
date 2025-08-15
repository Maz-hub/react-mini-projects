# ⭐ React Star Rating Component

An interactive and reusable star rating UI built with React. Users can rate their experience from 1 to 5 stars. The component is fully customizable via props and built using component composition for flexibility and reusability.

---

## ⚙️ Features

- Hover to preview the rating
- Click to lock in your selection
- Custom feedback messages based on the rating
- Dynamic star coloring via props
- Clean component structure using composition
- Submit button and thank-you modal
- Reusable `Button` component using `children` prop

---

## 🧩 Components

### `Rating.jsx`

- Main component that handles all app logic and state
- Tracks:
  - `rating`: selected value
  - `hover`: current hovered star
  - `submitted`: whether rating is submitted
- Renders all stars and buttons using child components
- Accepts props:
  - `heading` _(string)_ – optional custom heading
  - `feedbackMessages` _(array)_ – optional array of feedback texts
  - `color` _(string)_ – customizable star color

### `Star.jsx`

- Stateless and reusable star unit
- Receives props for its number, current `rating`, `hover`, and color
- Uses `onClick`, `onMouseEnter`, and `onMouseLeave` for interaction
- Applies dynamic color based on hover or rating

### `Modal.jsx`

- Reusable modal component shown after submitting rating
- Displays a thank-you message and selected rating
- Includes a close button that resets the state

### `Button.jsx`

- Simple, reusable button component
- Accepts:
  - `className`, `disabled`, `onClick`
  - `children` (React keyword) to render dynamic button content
- Used for both submit and close buttons

---

## 🧠 Hooks & Logic

- `useState()` used for:
  - `rating`: saved rating
  - `hover`: star preview
  - `submitted`: tracks modal state
- `Array.from()` to generate the list of stars `[1, 2, 3, 4, 5]`
- `.map()` to render `<Star />` components
- Conditional rendering for feedback message and modal
- Props used to pass event functions and dynamic values to child components
