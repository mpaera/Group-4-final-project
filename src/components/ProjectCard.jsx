import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description.substring(0, 80)}...</p>
      <div className="card-footer">
        <span className="status-badge">Status: {project.status}</span>
        <Link to={`/projects/${project.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProjectCard;