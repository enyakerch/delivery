import React from 'react';
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import {Banner} from "../Banner/Banner";
import {Container} from "../Container/Container";
import {Menu} from "../Menu/Menu";

import './App.scss';
import '../Header/Header.scss';



function App() {
  return (
      <div className={'layout_layoutWrapper'}>
          <Header/>
          <div className="header_spacer"></div>
          <Menu/>
          <Banner/>
          <Container/>
          <Footer/>
      </div>
  );
}

export default App;
