import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  // Form Collaps
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!formData.title || !formData.description) return;

    // create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    // Add notes to state
    setNotes([newNote, ...notes]);

    //Reset the formData
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ✖" : "Add New Note ✏️"}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          {/* Title */}
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {/* Priority */}
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟡 Medium" },
              { value: "Low", label: "🔵 Low" },
            ]}
          />

          {/* Category */}
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "👩🏻‍💻 Work" },
              { value: "Personal", label: "🤸 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />
          {/* Description */}
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          {/* Button */}
          <button className="w-full bg-purple-900 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-950">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
