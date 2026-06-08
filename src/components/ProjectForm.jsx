import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    status: 'In Progress'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({
      ...formData,
      id: Date.now().toString()
    });
    setFormData({ title: '', description: '', date: '', location: '', status: 'In Progress' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
      <input name="date" type="date" onChange={handleChange} value={formData.date} />
      <input name="location" placeholder="Location" onChange={handleChange} value={formData.location} />
      <select name="status" onChange={handleChange} value={formData.status}>
        <option>In Progress</option>
        <option>Completed</option>
        <option>Delayed</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default ProjectForm;