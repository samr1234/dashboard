// Sidebar.js


import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><a href="#home">Dashboard</a></li>
        <li><a href="#about">Projects</a></li>
        <li><a href="#services">Tasks</a></li>
        <li><a href="#contact">Teams</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#calendar">Calendar</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
