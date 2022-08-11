import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black t0 bg-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div>
          <h2> I'm a Full Stack Developer</h2>
          <p>
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
