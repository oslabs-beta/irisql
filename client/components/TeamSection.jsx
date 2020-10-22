import React from 'react';
import { Image } from 'react-bootstrap';
import gitHubLogo from '../../public/images/github-black.svg';
import LinkedinLogo from '../../public/images/linkedin-black.svg';

export default function TeamSection() {
  return (
    <div className="mb-4" id="team">
      <div className="section-headings d-flex justify-content-center">
        <hr />
        <h2>Meet The Team</h2>
        <hr />
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars2.githubusercontent.com/u/22757733?s=460&u=622812862383976ddc3e5c861ffba97f1f8f98e0&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Stefan Pougatchev</h5>
          <p className="grey-text">
            LA based full-stack engineer interested in robotics and machine learning.
          </p>
          <div>
            <a className="mx-3" href="https://github.com/StefanPougatchev" target="_blank" rel="noreferrer">
              <img src={gitHubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/stefanpougatchev/" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars2.githubusercontent.com/u/24289044?s=460&u=a28ff1c5bc20680ed1f768104f96f2256b554298&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Ronnie Zhang</h5>
          <p className="grey-text">
            SF based full-stack engineer who loves building products for users.
          </p>
          <div>
            <a className="mx-3" href="https://github.com/ronzhan" target="_blank" rel="noreferrer">
              <img src={gitHubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/ronnie-zhang" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars3.githubusercontent.com/u/61030080?s=400&u=2bc5ddab09ea3ee5771d2ee9817361567d8140f7&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Liam McBride</h5>
          <p className="grey-text">
            LA based full-stack engineer interested in working on creative products.
          </p>
          <div>
            <a className="mx-3" href="https://github.com/LiamMcB" target="_blank" rel="noreferrer">
              <img src={gitHubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/liamemcbride/" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://ca.slack-edge.com/T01BCGH75GS-U01BR6Z4N0Z-2ca38d00eb49-512" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Binish Ali</h5>
          <p className="grey-text">
            MD based full-stack engineer with passion for building robust applications.
          </p>
          <div>
            <a className="mx-3" href="https://github.com/BinishAli" target="_blank" rel="noreferrer">
              <img src={gitHubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/binishali/" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars2.githubusercontent.com/u/39292126?s=460&u=f280eb5642b30997564a92157e01a9d04113b8e6&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Alexander Kim</h5>
          <p className="grey-text">
            Full-stack engineer interested in building applications that make life better.
          </p>
          <div>
            <a className="mx-3" href="https://github.com/akim3235" target="_blank" rel="noreferrer">
              <img src={gitHubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/alexanderkim1/" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
