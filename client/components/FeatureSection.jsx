import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

export default function FeatureSection() {
  return (
    <div>
      <div className='features-heading d-flex justify-content-center'>
        <hr></hr>
        <h2>Features</h2>
        <hr></hr>
      </div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="../../public/images/favicon.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="../../public/images/favicon.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="../../public/images/favicon.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  )
}