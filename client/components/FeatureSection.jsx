import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'

export default function FeatureSection() {
  return (
    <div>
      <div className='section-headings d-flex justify-content-center'>
        <hr></hr>
        <h2>Features</h2>
        <hr></hr>
      </div>
      <CardDeck>
        <Card>
          <div className='feature-icons d-flex justify-content-center'>
            <Icon.BoundingBoxCircles  color="#29274c" size={50} />
          </div>
          <Card.Body>
            <Card.Title>Build a Schema</Card.Title>
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
          <div className='feature-icons d-flex justify-content-center'>
            <Icon.CodeSquare color="#29274c" size={50} />
          </div>
          <Card.Body>
            <Card.Title>Auto Generated Code</Card.Title>
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
          <div className='feature-icons d-flex justify-content-center'>
            <Icon.LayersFill  color="#29274c" size={50} />
          </div>
          <Card.Body>
            <Card.Title>Connect To A DataBase</Card.Title>
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