import React from 'react';
import { Image } from 'react-bootstrap';

export default function TeamSection() {
  return (
    <div>
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
          <p className="text-uppercase blue-text"><strong>Software Engineer</strong></p>
          <p className="grey-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars2.githubusercontent.com/u/24289044?s=460&u=a28ff1c5bc20680ed1f768104f96f2256b554298&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Ronnie Zhan</h5>
          <p className="text-uppercase blue-text"><strong>Software Engineer</strong></p>
          <p className="grey-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars3.githubusercontent.com/u/61030080?s=400&u=2bc5ddab09ea3ee5771d2ee9817361567d8140f7&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Liam McBride</h5>
          <p className="text-uppercase blue-text"><strong>Software Engineer</strong></p>
          <p className="grey-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.
          </p>
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://ca.slack-edge.com/T01BCGH75GS-U01BR6Z4N0Z-2ca38d00eb49-512" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Binish Ali</h5>
          <p className="text-uppercase blue-text"><strong>Software Engineer</strong></p>
          <p className="grey-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <Image style={{ height: '10rem' }} src="https://avatars2.githubusercontent.com/u/39292126?s=460&u=f280eb5642b30997564a92157e01a9d04113b8e6&v=4" roundedCircle />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Alexander Kim</h5>
          <p className="text-uppercase blue-text"><strong>Software Engineer</strong></p>
          <p className="grey-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.
          </p>
        </div>
      </div>
    </div>
  );
}
