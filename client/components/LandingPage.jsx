import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <Link to='/prototyper'>
        <Button>
          Get started
        </Button>
      </Link>
    </div>
  )
}
