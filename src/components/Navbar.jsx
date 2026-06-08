import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#007bff',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white'
    }}>
      <h2 style={{ margin: 0 }}>Event Planner</h2>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Dashboard</Link>
        <Link to="/add-project" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>+ New Event</Link>
      </div>
    </nav>
  );
}

export default Navbar;