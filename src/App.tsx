// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { FC, useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import { BrowserView, MobileView } from "react-device-detect";

//* import global styles
import "./App.css";

//* import browser pages
import BrowserTest from "browser-test/BrowserTest";

//* import mobile pages
import MobileTest from "mobile-test/MobileTest";

const App: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BrowserView>
        <Routes>
          <Route path="" element={<BrowserTest />}></Route>
        </Routes>
      </BrowserView>
      <MobileView>
        <Routes>
          <Route path="" element={<MobileTest />}></Route>
        </Routes>
      </MobileView>
    </BrowserRouter>
  );
};

export default App;
