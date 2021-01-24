import React from 'react'

import { AnimatedFlexbox } from 'react-flex-animations'
import 'react-flex-animations/dist/index.css'
import styled from 'styled-components';

const Nav = styled(AnimatedFlexbox)`
height:72px;
a, section:nth-child(odd) {
  background:#03d19a;
}
section:nth-child(even){
  background:#bada55;
}
`;
const Sidebar = styled(AnimatedFlexbox)`
width:fit-content;
> *{
  align-items:flex-start;
}
section{
  background:#131313;
  color:white;
  font-size:2rem;
}
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
  return (
  <>
    <Nav component="nav" spacerComponent="div">
      <a href="#!" role="button" data-hidden={hide%4 === 1} >Logo</a>
      <section className="taskSwitcher" data-hidden={hide%4 === 2}>TaskSwitcher</section>
      <Test className="rightNav" data-hidden={hide%4 === 0} data-ratio={1}>
        <section><span role="img" aria-label="Help">❓</span></section>
        <section><span role="img" aria-label="Bell">🔔</span></section>
        <section><span role="img" aria-label="Settings">⚙</span></section>
        <section><span role="img" aria-label="User">👤</span></section>
      </Test>
    </Nav>
    <Sidebar>
    <section data-hidden={!(hide%4)} >   <img src="https://picsum.photos/300/300" /></section>
    <section data-hidden={!(hide%3)} >   <img src="https://picsum.photos/300/301" /></section>
    <section data-hidden={3===(hide%4)} ><img src="https://picsum.photos/300/302" /></section>
    <section data-hidden={4===(hide%8)} ><img src="https://picsum.photos/300/303" /></section>
    <section data-hidden={5===(hide%8)} ><img src="https://picsum.photos/300/304" /></section>
    <section data-hidden={6===(hide%8)} ><img src="https://picsum.photos/300/305" /></section>
    <section data-hidden={7===(hide%8)} ><img src="https://picsum.photos/300/306" /></section>
    <section data-hidden={2===(hide%8)} ><img src="https://picsum.photos/300/307" /></section>
    </Sidebar>
    <Sidebar>
    <section data-hidden={!(hide%4)} >   <img src="https://picsum.photos/308/200" /></section>
    <section data-hidden={!(hide%3)} >   <img src="https://picsum.photos/301/201" /></section>
    <section data-hidden={3===(hide%4)} ><img src="https://picsum.photos/302/202" /></section>
    <section data-hidden={4===(hide%8)} ><img src="https://picsum.photos/303/203" /></section>
    <section data-hidden={5===(hide%8)} ><img src="https://picsum.photos/304/204" /></section>
    <section data-hidden={6===(hide%8)} ><img src="https://picsum.photos/305/205" /></section>
    <section data-hidden={7===(hide%8)} ><img src="https://picsum.photos/306/206" /></section>
    <section data-hidden={2===(hide%8)} ><img src="https://picsum.photos/307/207" /></section>
    </Sidebar>
    <Sidebar>
    <section data-hidden={!(hide%4)} >   <img src="https://picsum.photos/309/208" /></section>
    <section data-hidden={!(hide%3)} >   <img src="https://picsum.photos/301/209" /></section>
    <section data-hidden={3===(hide%4)} ><img src="https://picsum.photos/302/210" /></section>
    <section data-hidden={4===(hide%8)} ><img src="https://picsum.photos/303/211" /></section>
    <section data-hidden={5===(hide%8)} ><img src="https://picsum.photos/304/212" /></section>
    <section data-hidden={6===(hide%8)} ><img src="https://picsum.photos/305/213" /></section>
    <section data-hidden={7===(hide%8)} ><img src="https://picsum.photos/306/214" /></section>
    <section data-hidden={2===(hide%8)} ><img src="https://picsum.photos/307/215" /></section>
    </Sidebar>
  </>
  );
}

export default App
