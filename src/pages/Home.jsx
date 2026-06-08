import { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

function Home() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch('http://localhost:5001/events')
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
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      fetch(`http://localhost:5001/events/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) throw new Error('Could not delete event.');
          setEvents(events.filter(event => event.id !== id));
          alert('Event deleted successfully!');
        })
        .catch((err) => {
          alert('Error deleting event: ' + err.message);
        });
    }
  };

  const handleEdit = (id, updatedData) => {
    fetch(`http://localhost:5001/events/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Could not update event.');
        return res.json();
      })
      .then((updatedEvent) => {
        setEvents(events.map(event => 
          event.id === id ? { ...event, ...updatedEvent } : event
        ));
        alert('Event updated successfully!');
      })
      .catch((err) => {
        alert('Error updating event: ' + err.message);
      });
  };

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
      
      {!isLoading && !error && (
        <ProjectList 
          projects={events} 
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default Home;