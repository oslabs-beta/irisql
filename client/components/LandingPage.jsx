import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='landing-page d-flex justify-content-center align-items-center'>
      <Link to='/prototyper'>
        <Button variant='outline-light'>Get started</Button>
      </Link>
    </div>
  );
}
