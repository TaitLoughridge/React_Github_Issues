import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import IssueList from './components/IssueList';

function App() {
  return (
    <div>
      <Router>
      <IssueList/>
      </Router>
    </div>
  );
}

export default App;
