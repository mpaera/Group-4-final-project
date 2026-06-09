import { Link } from 'react-router-dom';

function ProjectCard({ project, onDelete, onEdit }) {
  const getStatusClass = (status) => {
    switch(status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-in-progress';
      case 'Delayed': return 'status-delayed';
      default: return '';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return '✅';
      case 'In Progress': return '🔄';
      case 'Delayed': return '⏰';
      default: return '📌';
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm(`Delete "${project.title}"?`)) {
      onDelete(project.id);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newTitle = prompt('Edit title:', project.title);
    const newStatus = prompt('Status (In Progress/Completed/Delayed):', project.status);
    if (newTitle && newStatus) {
      onEdit(project.id, { title: newTitle, status: newStatus });
    }
  };

  return (
    <div className="event-card">
      <div className="event-card-header">
        <h3>
          {getStatusIcon(project.status)} {project.title}
        </h3>
        <div className={`status-badge ${getStatusClass(project.status)}`}>
          {project.status}
        </div>
      </div>
      
      <div className="event-card-body">
        <div className="event-info">
          <div className="info-row">
            <span className="info-label">📅 Date:</span>
            <span className="info-value">{project.date || 'TBD'}</span>
          </div>
          <div className="info-row">
            <span className="info-label">📍 Location:</span>
            <span className="info-value">{project.location || 'TBD'}</span>
          </div>
          <div className="description">
            {project.description?.substring(0, 100)}...
          </div>
        </div>
      </div>
      
      <div className="event-card-footer">
        <Link to={`/projects/${project.id}`} style={{ flex: 1 }}>
          <button className="btn-view">📋 View</button>
        </Link>
        <button className="btn-edit" onClick={handleEdit}>✏️ Edit</button>
        <button className="btn-delete" onClick={handleDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default ProjectCard;