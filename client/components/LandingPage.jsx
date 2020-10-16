import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FeatureSection from './FeatureSection';


export default function LandingPage() {
  return (
    <div>
      <div className='landing-page d-flex flex-column justify-content-around align-items-center'>
        <div>
          <Typewriter
            options={{
              strings: 'Welcome to the future of GraphQL!',
              autoStart: true,
              delay: 200
            }}
          />
        </div>
        <div>
          <Link to='/prototyper'>
            <Button variant='outline-light'>Get started</Button>
          </Link>
        </div>
        <div style={{ color: 'white' }}>
          <p>Scroll down to learn more</p>
        </div>
      </div>
      <div>
        <FeatureSection />
      </div>
      <div>

      </div>
    </div>
  );
}
