import React, { useEffect, useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-primary text-white">Users</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
              <th>Superhero</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.team}</td>
                <td>{user.is_superhero ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Add User</Button>
      </Card.Body>
    </Card>
  );
}
