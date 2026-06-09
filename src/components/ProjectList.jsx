import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete, onEdit }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>🎯 No Events Yet</h3>
        <p>Click the "+ New Event" button to create your first event!</p>
      </div>
    );
  }

  return (
    <div className="events-grid">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProjectList;