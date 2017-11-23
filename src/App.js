import React from 'react';

import CreatePersonGroupForm from './components/CreatePersonGroupForm';
import CreatePersonForm from './components/CreatePersonForm';
import AddPersonFaceForm from './components/AddPersonFaceForm';
import DetectFaceForm from './components/DetectFaceForm';
import TrainPersonGroupId from './components/TrainPersonGroupIdForm';
import StatusTrainPersonGroupId from './components/StatusTrainPersonGroupIdForm';
import IdentifyFaceForm from './components/IdentifyFaceForm';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Azure Face API Playground</h1>

      <h2>Don't forget to set the AZURE_FACE_API_KEY environment variable before running this code.</h2>
    </header>

    <CreatePersonGroupForm />
    <CreatePersonForm />
    <AddPersonFaceForm />
    <DetectFaceForm />
    <TrainPersonGroupId />
    <StatusTrainPersonGroupId />
    <IdentifyFaceForm />
  </div>
);

export default App;
