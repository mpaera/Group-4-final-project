import { Link } from 'react-router-dom';

function ProjectCard({ project, onDelete, onEdit }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return '🟢';
      case 'In Progress': return '🟡';
      case 'Delayed': return '🔴';
      default: return '⚪';
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
      onDelete(project.id);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newTitle = prompt('Edit title:', project.title);
    const newStatus = prompt('Edit status (In Progress/Completed/Delayed):', project.status);
    
    if (newTitle && newStatus) {
      onEdit(project.id, { title: newTitle, status: newStatus });
    }
  };

  return (
    <div className="project-card">
      <h3>{getStatusColor(project.status)} {project.title}</h3>
      <p><strong>📅 Date:</strong> {project.date || 'TBD'}</p>
      <p><strong>📍 Location:</strong> {project.location || 'TBD'}</p>
      <p><strong>📌 Status:</strong> {project.status}</p>
      <p>{project.description?.substring(0, 100)}...</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
        <Link to={`/projects/${project.id}`} style={{ flex: 1 }}>
          <button style={{ width: '100%' }}>🔍 View</button>
        </Link>
        <button 
          onClick={handleEdit}
          style={{ 
            background: 'linear-gradient(135deg, #48bb78 0%, #2f855a 100%)',
            flex: 1
          }}
        >
          ✏️ Edit
        </button>
        <button 
          onClick={handleDelete}
          style={{ 
            background: 'linear-gradient(135deg, #f56565 0%, #c53030 100%)',
            flex: 1
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;