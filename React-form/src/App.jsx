import { useState } from "react";
import Input from "./Components/Input";
import Select from "./Components/Select";
import MapComponent from "./Components/Map";
import Textarea from "./Components/Textarea";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    level: "",
    dateEnrolled: "",
    gpa: "",
    hobbies: [],
    major: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((form) => ({
          ...form,
          hobbies: [...form.hobbies, value],
        }));
      }
      else {
        setFormData((form) => ({
          ...form,
          hobbies: form.hobbies.filter((hobby) => hobby !== value),
        }));
      }
    }
    else {
      setFormData((form) => ({
        ...form,
        [name]: value,
      }));
    }
  };

  const validation = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.level.trim()) newErrors.level = "What is your level? (required)";
    if (!formData.major.trim()) newErrors.major = "What is your major? (required)";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <h1>Create Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <Input inputname="Name:"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name} />

          <Input inputname="Email:"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email} />
        </div>

        <Textarea value={formData.bio}
          onChange={handleChange} />

        <div className="level">
          <Select value={formData.level}
            error={errors.level}
            onChange={handleChange} />

          <Input inputname="GPA:"
            type="number"
            name="gpa"
            min="0"
            max="10"
            value={formData.gpa}
            onChange={handleChange} />

          <Input inputname="Date Enrolled:"
            type="date"
            name="dateEnrolled"
            value={formData.dateEnrolled}
            onChange={handleChange} />
        </div>

        <MapComponent className="hobby"
          title="Hobbies:"
          options={["Surfing", "Running", "Biking", "Paddling"]}
          type="checkbox"
          name="hobbies"
          formData={formData}
          handleChange={handleChange}
        />

        <MapComponent className="major"
          title="Major:"
          options={["Physics", "Math", "Chemistry", "Computer Science"]}
          type="radio"
          name="major"
          formData={formData}
          handleChange={handleChange}
          error={errors.major}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
