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

  if (isLoading) return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      Loading event details...
    </div>
  );
  
  if (!event) return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <p>Event not found.</p>
      <Link to="/">Return to Dashboard</Link>
    </div>
  );

  const getStatusColor = () => {
    switch(event.status) {
      case 'Completed': return '#27ae60';
      case 'In Progress': return '#f39c12';
      case 'Delayed': return '#e74c3c';
      default: return '#7f8c8d';
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#3498db',
          textDecoration: 'none',
          fontSize: '16px'
        }}
      >
        ← Back to Dashboard
      </Link>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Header Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '30px',
          color: 'white'
        }}>
          <h1 style={{ margin: 0, fontSize: '28px' }}>{event.title}</h1>
          <div style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '6px 12px',
            borderRadius: '20px',
            backgroundColor: getStatusColor(),
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {event.status}
          </div>
        </div>
        
        {/* Body Section */}
        <div style={{ padding: '30px' }}>
          {/* Info Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>📅 Date</strong>
              <p style={{ margin: '5px 0 0', color: '#555' }}>{event.date || 'TBD'}</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>⏰ Time</strong>
              <p style={{ margin: '5px 0 0', color: '#555' }}>{event.time || 'TBD'}</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>📍 Location</strong>
              <p style={{ margin: '5px 0 0', color: '#555' }}>{event.location || 'TBD'}</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>🏷️ Category</strong>
              <p style={{ margin: '5px 0 0', color: '#555' }}>{event.category || 'General'}</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>💰 Price</strong>
              <p style={{ margin: '5px 0 0', color: '#555' }}>${event.price || 'Free'}</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>👥 Available Seats</strong>
              <p style={{ margin: '5px 0 0', color: '#555' }}>{event.availableSeats || 'Unlimited'}</p>
            </div>
          </div>
          
          {/* Description Section */}
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>📝 Description</h3>
            <p style={{ lineHeight: '1.6', color: '#555' }}>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;