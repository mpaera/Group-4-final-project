import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete, onEdit }) {
  if (projects.length === 0) {
    return <p>No events logged yet.</p>;
  }

  return (
    <div className="grid">
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