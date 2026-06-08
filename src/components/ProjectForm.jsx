import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('In Progress');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    // Call the parent function with the form values
    onAddProject({ title, description, status });

    // Reset fields
    setTitle('');
    setDescription('');
    setStatus('In Progress');
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Event Title</label>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter title" 
        required 
      />

      <label>Description</label>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Enter details..." 
        required 
      />

      <label>Status</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Delayed">Delayed</option>
      </select>

      <button type="submit">Save Event</button>
    </form>
  );
}

export default ProjectForm;