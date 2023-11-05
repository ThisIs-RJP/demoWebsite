// ############################# IMPORT FILES
import './App.css';

// ##### Images
import cards from "./imgs/jokerCard.png"
import userIcon from "./imgs/userIcon.png"
import cardIcon from "./imgs/cardPlaying.png"
import battleIcon from "./imgs/battleIcon.png"
import victoryIcon from "./imgs/victory.png"

// ############################# IMPORT LIBRARIES
import React, { useState, useEffect } from "react";

// function App() {
export default function App() {
  // ################# NECESSARY VARIABLES ###############################
  const [isHovered, setIsHovered] = useState(false);


  // ################# ADDITIONAL CODE ###############################
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // ################# END NECESSARY VARIABLES ###############################
  return (
    <div className="App">
      {/* ###################### START OF NAV BAR */}
      <div className='wholeNav'>
        <div className='navBar'>

          <div className='logo'>
            This should be where the logo is
          </div>

          <div className='links'>
            <div className='loginBox'>
              Login | Register
            </div>
          </div>


        </div>
        <div className='middleLinks'>
          <a href="youtube.com" className='link'>Link 1</a>
          <a href="youtube.com" className='linkMiddle'>Link 2</a>
          <a href="youtube.com" className='linkMiddle2'>Link 3</a>
          <a href="youtube.com" className='link'>Link 4</a>
        </div>
        <div className='navBufferLine'></div>
      </div>
      {/* ###################### END OF NAV BAR */}
      {/* ###################### START OF TITLE BLOCK CODE */}

      <div className='centerTexts'>
        <div className='textOne'>
          Are you ready <i>Player One</i>?
        </div>
        <div className='textTwo'>
          <div className='moveBox1'></div>
          <div className='moveBox2'></div>

          Start winning. Start earning.<br></br>
          {/* Start <b><i>Now</i></b> */}
        </div>
        <div className='textThree'>

          Start <b><i>Now</i></b>
        </div>
        <div className='whiteLine'>
        </div>
      </div>

      {/* ###################### END OF TITLE BLOCK CODE */}
      <div className='bufferBlack'></div>
      {/* ###################### START OF FIRST BLOCK CODE */}

      <div className='firstBlock'>

        <div className='titleBlock1'>
          <img src={cards} className="cardImg" />
          <div className='titleText'>
            Cryptocurrency, but with a
            <div className='revealWordSoon' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> twist...</div>
            <div className="lineReveal">
            </div>

            <div className='description1'>
              <br></br>
              Create a profile now to emmerse in a world of endless games, meet other players, compete, and <b>win.</b>
            </div>
            <div className="hoverHintReveal">
              Hover on me!
            </div>
            {/* ####### NOTE FOR RJ #######
            You can make an animation with 4 cards stacked on top of each other that slide as an animation */}
            {/* <button className='buttonLearnMore'>
              <b>Learn More ></b>
            </button> */}
            <a href="" className="learnMoreLink">Learn More > </a>
          </div>
          {isHovered && (
            <div className='newRevealedText'>
              This is the new text
            </div>
          )}
        </div>
      </div>
      {/* ###################### END OF FIRST BLOCK CODE */}
      <div className='bufferBlack2'></div>
      {/* ###################### START OF SECOND BLOCK CODE */}

      <div className='secondBlock'>
        <div className='secondBlockTitleBlock'>
          Here's how you can start winning...
        </div>
        <div className='contentsBoxes'>

          <div className='boxesAligned'>
            <img src={userIcon} className='icon' />
            <br></br>
            Login and Signup
            <div className='contentTextBox'>
              It's on our navigation bar. Shouldn't be too hard...
            </div>
          </div>

          <div className='boxesAligned'>
            <img src={cardIcon} className='icon' />
            <br></br>
            Host or Join a Game from our forum chats
            <div className='contentTextBox'>
              Don't worry, admins we've hired make sure that the game is fair for all.
            </div>
          </div>

          <div className='boxesAligned'>
            <img src={battleIcon} className='icon' />
            <br></br>
            Join the game
            <div className='contentTextBox'>
              Make sure you're not late for the main event...
            </div>
          </div>

          <div className='boxesAligned'>
            <img src={victoryIcon} className='icon' />
            <br></br>
            Come out <b>victorious!</b>
            <div className='contentTextBox'>
              Win the games. Earn the money. Earn your place on our global leaderboards. The glory is for yours to take.
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}