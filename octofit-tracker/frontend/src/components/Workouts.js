import React, { useEffect, useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch('/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-primary text-white">Workouts</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Suggested For</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
                <td>{workout.suggested_for}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Add Workout</Button>
      </Card.Body>
    </Card>
  );
}
