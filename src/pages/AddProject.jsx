import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';

function AddProject() {
  const navigate = useNavigate();

  function handleAddProject(newEvent) {
    fetch('http://localhost:5001/events', {
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
      <ProjectForm onAddProject={handleAddProject} />
    </div>
  );
}

export default AddProject;