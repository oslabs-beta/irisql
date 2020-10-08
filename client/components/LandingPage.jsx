import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import bgImage from '../../public/images/pexels-felix-mittermeier-956999.jpg';

export default function LandingPage() {
  return (
    <div
      style={{ height: '100vh', backgroundImage: 'url(' + bgImage + ')' }}
      className='d-flex justify-content-center align-items-center mt-5'>
      <Link to='/prototyper'>
        <Button>Get started</Button>
      </Link>
    </div>
  );
}
