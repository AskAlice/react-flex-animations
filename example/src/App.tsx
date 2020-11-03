import React from 'react'

import { AnimatedFlexbox } from 'react-flex-animations'
import 'react-flex-animations/dist/index.css'
import styled from 'styled-components';
const Nav = styled(AnimatedFlexbox)`
height:72px;

`;
const Test = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    margin:0;
    padding:0;
`;
const App = () => {
  const [hide,setHide] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(()=>setHide(hide+1),2000);
    return () => {
      clearTimeout(t);
    }
  }, [hide])
  return (<Nav component="nav" spacerComponent="div">
      <a href="#" role="button" data-hidden={hide%4 === 1} data-ratio={0.5}>Logo</a>
      <section className="taskSwitcher" data-hidden={hide%4 === 2}>TaskSwitcher</section>
      <Test className="rightNav" data-hidden={hide%4 === 0} data-ratio={1}>
        <section><span role="img" aria-label="Help">❓</span></section>
        <section><span role="img" aria-label="Bell">🔔</span></section>
        <section><span role="img" aria-label="Settings">⚙</span></section>
        <section><span role="img" aria-label="User">👤</span></section>
      </Test>
    </Nav>
    );
}

export default App
