import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <p className="container">Loading details...</p>;
  if (!event) return <p className="container">Event records missing. <Link to="/">Return home</Link></p>;

  return (
    <div className="container detail-page">
      <Link to="/">&larr; Back to Dashboard</Link>
      <div className="detail-box">
        <h1>{event.title}</h1>
        <p className="status-banner"><strong>Current Status:</strong> {event.status}</p>
        <h3>Scope & Details</h3>
        <p className="desc">{event.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;