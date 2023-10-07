import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="label">
        <div className="text-wrapper">ONYX</div>
      </div>
      <div className="content">
        <p>
          Explore consolidated open science initiatives
          <br />
          and engage in the discovery and collaboration
          <br />
          of open science projects
        </p>
        {/* Apply the new class to the button */}
        <button type="button" className="btn btn-primary btn-explore-projects">
          <div className="text-wrapper">Explore Projects</div>
          <img className="vector" alt="Vector" src="./vector-1.svg" />
        </button>
      </div>
    </div>
  );
}

export default Home;
