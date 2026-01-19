import React, { useEffect, useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('/api/activities/')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-primary text-white">Activities</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.user}</td>
                <td>{activity.type}</td>
                <td>{activity.duration} min</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Add Activity</Button>
      </Card.Body>
    </Card>
  );
}
