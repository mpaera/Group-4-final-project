import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('In Progress');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const newEvent = { title, description, status };

    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Save error.');
        return res.json();
      })
      .then(() => {
        alert('Event added successfully!');
        navigate('/');
      })
      .catch((err) => alert(err.message));
  }

  return (
    <div className="container form-page">
      <h2>Add a New Event</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Event Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter details..." required />

        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Delayed">Delayed</option>
        </select>

        <button type="submit">Save Event</button>
      </form>
    </div>
  );
}

export default AddProject;