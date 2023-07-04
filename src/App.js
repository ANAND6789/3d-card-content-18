import React from 'react';
import Card from './components/Crad';
import './App.css'; // Import the CSS file that contains the global styles for the app

const App = () => {
  return (
    <div>
      <center>
        <h4 className='welcome flip-in'>WELCOME TO STUDYLAB</h4>
        <h1 className='heading-1 flip-in'>We Are StudyLab An Online Learning Center...</h1>
        <p className='para-1 flip-in'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p className='para-2 flip-in'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Card />
      </center>
    </div>
  );
};

export default App;
