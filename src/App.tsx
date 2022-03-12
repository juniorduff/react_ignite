import React from 'react';
import styled from 'styled-components'
import {GlobalStyle} from "./assets/styles/global";

const Title = styled.h1`
  color: #8257e6;
  font-size: 34px;
`
function App() {
  return (
    <div className="App">
        <Title>
            <h1 className='title'>Hello word </h1>
        </Title>
        <GlobalStyle/>
    </div>
  );
}

export default App;
