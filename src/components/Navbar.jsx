import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Event Planner</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/add-project" style={{ marginLeft: '15px', fontWeight: 'bold' }}>+ New Event</Link>
      </div>
    </nav>
  );
}

export default Navbar;