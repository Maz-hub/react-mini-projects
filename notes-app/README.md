# 📝 React Notes App  
A React application to create, view, and manage notes. Each note includes a title, description, category, and priority. Notes are styled with dynamic colors based on their priority, and the form is collapsible for a cleaner interface.  

---

## ⚙️ Features  
- Add new notes with title, category, priority, and description  
- Collapsible form to toggle visibility  
- Delete notes with a confirmation prompt  
- Dynamic left border colors based on priority:  
  - 🔴 High → Red  
  - 🟡 Medium → Yellow  
  - 🔵 Low → Blue  
- Responsive design with Tailwind CSS  

---

## 🧩 Components  

### `App.jsx`  
- Holds the global `notes` state  
- Passes `setNotes` and `deleteNote` function to children  
- Renders `NoteForm` and `NoteList`  

### `NoteForm.jsx`  
- Controlled form component with collapsible toggle  
- Handles:  
  - `formData` state (title, description, category, priority)  
  - Validation for required fields  
  - Submit logic to create new notes  
  - Resetting the form after submission  

### `NoteList.jsx`  
- Renders all notes  
- Applies dynamic border color based on priority  
- Displays message if no notes exist  
- Includes delete button for each note  

### `inputs/` (Reusable Components)  
- **`TextInput.jsx`** – Reusable input for text fields  
- **`SelectInput.jsx`** – Reusable dropdown, accepts dynamic `options` prop  
- **`TextArea.jsx`** – Reusable textarea for multi-line input  

---

## 🧠 Hooks & Logic  
- **`useState()`** used for:  
  - `notes` → global list of notes  
  - `formData` → controlled form fields  
  - `isFormVisible` → collapsible form toggle  
- `.map()` to render notes and options dynamically  
- Conditional rendering for:  
  - Empty state ("No Notes Yet")  
  - Collapsible form toggle  
- Event handling for form submission, input changes, and note deletion  
