import React from 'react';
import ReactPlayer from 'react-player';

export default function DemoSection() {
  const viewControls = true;
  return (
    <div id="demo">
      <div className="section-headings demo-section d-flex justify-content-center">
        <hr className="demo-hr" />
        <h2>Watch A Demo</h2>
        <hr className="demo-hr" />
      </div>
      <div className="demo-video d-flex justify-content-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PUYPu1N_9lc"
          controls={viewControls}
        />
      </div>
    </div>
  );
}
