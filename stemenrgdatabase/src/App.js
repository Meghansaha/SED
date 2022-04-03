import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBpYnLa6fwn0Ntw0q8OrGP9pcx93UHxOkY",
    authDomain: "stem-enrg-database.firebaseapp.com",
    databaseURL: "https://stem-enrg-database-default-rtdb.firebaseio.com",
    projectId: "stem-enrg-database",
    storageBucket: "stem-enrg-database.appspot.com",
    messagingSenderId: "528151912924",
    appId: "1:528151912924:web:c143b9a6ec98284094ef19",
    measurementId: "G-Q36XMS7RYB"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
