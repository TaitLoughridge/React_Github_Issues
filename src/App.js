import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IssueList from './components/IssueList';
import { Container } from 'bloomer';
import 'bulma/css/bulma.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Container>
          <IssueList/>
        </Container>
      </Router>
    </div>
  );
}

export default App;
