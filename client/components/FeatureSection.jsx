import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function FeatureSection() {
  return (
    <div id="features">
      <div className="section-headings d-flex justify-content-center">
        <hr />
        <h2>Features</h2>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <CardDeck>
          <Card>
            <div className="feature-icons d-flex justify-content-center">
              <Icon.BoundingBoxCircles color="#29274c" size={50} />
            </div>
            <Card.Body>
              <Card.Title>Build a Visualized Schema</Card.Title>
              <Card.Text>
                Prototype your GraphQL schema with an intuitive and interactive GUI.
                Assemble your graph using object types as building blocks.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="feature-icons d-flex justify-content-center">
              <Icon.CodeSquare color="#29274c" size={50} />
            </div>
            <Card.Body>
              <Card.Title>Auto Generated Code</Card.Title>
              <Card.Text>
                Generate GraphQL API with user-defined object types, relationships, and database.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="feature-icons d-flex justify-content-center">
              <Icon.LayersFill color="#29274c" size={50} />
            </div>
            <Card.Body>
              <Card.Title>Connect To A DataBase</Card.Title>
              <Card.Text>
                In development. Choose either a relational (PostgreSQL) or non-relational (MongoDB)
                database to query from.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
