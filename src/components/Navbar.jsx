import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0, color: 'white' }}>
        🎯 Event Planner
      </h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            backgroundColor: '#3498db',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          📊 Dashboard
        </Link>
        <Link 
          to="/add-project" 
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            backgroundColor: '#27ae60',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#219a52'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#27ae60'}
        >
          ➕ New Event
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;