import React, { useEffect, useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-primary text-white">Teams</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Add Team</Button>
      </Card.Body>
    </Card>
  );
}
