import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import EnterScreen from './EnterScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SelectMovie from './SelectMovie';
import FakePage from "./Charecteristics/FakePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<EnterScreen/>} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/movie/:imgpath/:title/:overview/:rating/:releasedate/:popularity/:votecount/:id/:lang" element={<SelectMovie/>} />
        <Route path="*" element={<FakePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// :id/:original_title/:overview/:popularity/:poster_path/:release_date/:vote_average/:vote_count
