import React, {Component} from 'react';
import { HashRouter, Routes ,Route,} from 'react-router-dom'
import './App.css';
import Mbti from './Mbti'
import MbtiResult from './Mbti/MbtiResult'

function App() {
  
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) kakao.init('8599d91d51c0d1bdbf2af586ada8667b')
  }


  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Mbti/>}/>
              <Route path="/MbtiResult" element={<MbtiResult/>}/>
            </Routes>
        </HashRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;
