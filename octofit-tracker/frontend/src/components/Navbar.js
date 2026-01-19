
import React from 'react';
import { Link } from 'react-router-dom';
// No import de logo, se usa ruta pública
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/octofitapp-small.png" alt="OctoFit Logo" className="octofit-logo" />
          OctoFit Tracker
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
