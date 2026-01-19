import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    fetch('/api/leaderboard/')
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-primary text-white">Leaderboard</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry.id}>
                <td>{entry.team}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
