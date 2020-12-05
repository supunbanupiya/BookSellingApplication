import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import Fetchbook from './fetchbook/fetchbook';
import FetchData from './fetchbook/fetchdata';



function App() {
  return (
    <Router>
      <GlobalStyle />
    
      <Fetchbook />
      
    </Router>
  );
}

export default App;



