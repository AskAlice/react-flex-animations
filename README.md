# react-flex-animations

> Show/hide flexbox items with animation

[![NPM](https://img.shields.io/npm/v/react-flex-animations.svg)](https://www.npmjs.com/package/react-flex-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

react-flex-animations depends on styled-components. It's best to keep the number of styled-components installations down, so I've made it a peer dependency that you will need to satisfy in the project you intend to use library with.

```bash
npm install --save react-flex-animations styled-components
```

## Usage

```tsx
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
      <a href="#!" role="button" data-hidden={hide%4 === 1} >Logo</a>
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
```

## License

MIT © [AskAlice.me](https://github.com/AskAlice)
