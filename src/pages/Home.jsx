import { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

function Home() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((res) => {
        if (!res.ok) throw new Error('Could not fetch events.');
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    document.title = `Events (${events.length})`;
  }, [events]);

  return (
    <div className="container">
      <div className="hero">
        <h1>Track Ongoing Events</h1>
        <p>Simple tracking interface for project milestones and tasks.</p>
      </div>

      {isLoading && <p>Loading event board...</p>}
      {error && <p className="error">{error}</p>}
      
      
      {!isLoading && !error && <ProjectList projects={events} />}
    </div>
  );
}

export default Home;