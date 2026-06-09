import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'Conference',
    price: '',
    availableSeats: '',
    status: 'In Progress'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEvent = {
      ...formData,
      id: Date.now().toString(),
      price: parseFloat(formData.price) || 0,
      availableSeats: parseInt(formData.availableSeats) || 0
    };
    
    fetch('http://localhost:5001/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent)
    })
      .then(res => res.json())
      .then(() => {
        alert('Event added successfully!');
        navigate('/');
      })
      .catch(err => alert('Error adding event: ' + err.message));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '28px'
      }}>
        ➕ Add a New Event
      </h2>
      
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555'
          }}>
            📌 Event Title *
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter event title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: 'white',
              color: '#333'
            }}
          />
        </div>
        
        {/* Description */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555'
          }}>
            📝 Description
          </label>
          <textarea
            name="description"
            placeholder="Enter event description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              resize: 'vertical',
              backgroundColor: 'white',
              color: '#333'
            }}
          />
        </div>
        
        {/* Date and Time */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555'
            }}>
              📅 Date
            </label>
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                color: '#333'
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555'
            }}>
              ⏰ Time
            </label>
            <input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                color: '#333'
              }}
            />
          </div>
        </div>
        
        {/* Location */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#555'
          }}>
            📍 Location
          </label>
          <input
            name="location"
            type="text"
            placeholder="Enter event location"
            value={formData.location}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: 'white',
              color: '#333'
            }}
          />
        </div>
        
        {/* Category and Status */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555'
            }}>
              🏷️ Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                backgroundColor: 'white',
                color: '#333',
                cursor: 'pointer'
              }}
            >
              <option value="Conference" style={{ color: '#333' }}>Conference</option>
              <option value="Workshop" style={{ color: '#333' }}>Workshop</option>
              <option value="Hackathon" style={{ color: '#333' }}>Hackathon</option>
              <option value="Maintenance" style={{ color: '#333' }}>Maintenance</option>
              <option value="Social" style={{ color: '#333' }}>Social</option>
              <option value="Meeting" style={{ color: '#333' }}>Meeting</option>
            </select>
          </div>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555'
            }}>
              📌 Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                backgroundColor: 'white',
                color: '#333',
                cursor: 'pointer'
              }}
            >
              <option value="In Progress" style={{ color: '#f39c12' }}>🟡 In Progress</option>
              <option value="Completed" style={{ color: '#27ae60' }}>🟢 Completed</option>
              <option value="Delayed" style={{ color: '#e74c3c' }}>🔴 Delayed</option>
            </select>
          </div>
        </div>
        
        {/* Price and Available Seats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555'
            }}>
              💰 Price ($)
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.price}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                color: '#333'
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555'
            }}>
              👥 Available Seats
            </label>
            <input
              name="availableSeats"
              type="number"
              placeholder="0"
              value={formData.availableSeats}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                color: '#333'
              }}
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#219a52'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#27ae60'}
        >
          ➕ Create Event
        </button>
      </form>
    </div>
  );
}

export default AddProject;