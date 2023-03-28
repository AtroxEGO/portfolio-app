import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="root">
      <div className="pie">
        <Link to={'/pawel'}>
          <button className="firstPie">
            <span className="text">Paweł</span>
          </button>
        </Link>
        <Link to={'/michal'}>
          <button className="secondPie">
            <span className="text">Michał</span>
          </button>
        </Link>
        <Link to={'/jakub'}>
          <button className="thirdPie">
            <span className="text">Jakub</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
