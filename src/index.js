import { React, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/ui/sidebar/Sidebar';
import App from './components/App.js';
import Header from './components/ui/header/Header';
import Home from './components/pages/Home';
import "./assets/styles/css/index.css";


const Index = () => {

  return (
    <StrictMode>
      <Router>
      <div className="appWrapper">
          <Header />
          <Sidebar  />
          <div className="sectionWrapper">
            <Routes>
              <Route path="/analytics" exact element={<Home pTitle="analytics" />} />
              <Route path="/applications" exact element={<Home pTitle="applications" />} />
              <Route path="/cases" exact element={<Home pTitle="cases" />} />
              <Route path="/entities" exact element={<Home pTitle="entities" />} />
              <Route path="/workflows" exact element={<Home pTitle="workflows" />} />
              <Route path="/settings" exact element={<Home pTitle="settings" />} />
              <Route path="/support" exact element={<Home pTitle="support" />} />
              <Route path="/" exact element={<App />} />
            </Routes>
            <span className="Bg-cont"></span>
          </div>
      </div>
      </Router>
    </StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
