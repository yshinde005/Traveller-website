import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Mainsection.css";

function MainSection() {
  return (
    <div className="main-container">
      <video src="/videos/vid-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What's stopping you?</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LET'S GO!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-cicle" />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
