import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p><strong>Date:</strong> {project.date || 'TBD'}</p>
      <p><strong>Location:</strong> {project.location || 'TBD'}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p>{project.description?.substring(0, 100)}...</p>
      <Link to={`/projects/${project.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProjectCard;