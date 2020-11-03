# react-flex-animations

> Show/hide flexbox items with animation

[![NPM](https://img.shields.io/npm/v/react-flex-animations.svg)](https://www.npmjs.com/package/react-flex-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-flex-animations
```

## Usage

```tsx
import React, { useState, useEffect } from 'react'

import AnimatedFlexbox from 'react-flex-animations'
import styled from 'styled-components';


const Nav = styled(AnimatedFlexbox)`
height:72px;
`;

const RightNav = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    margin:0;
    padding:0;
`;

const Example = () => {
    const [hide,setHide] = useState(0);
      useEffect(() => {
        const t = setTimeout(()=>setHide(hide+1),2000);
        return () => {
          clearTimeout(t);
        }
      }, [hide])
     return (
        <Nav component="nav" spacerComponent="div">
          <section data-hidden={hide%4===1}>
          logo here
          </section>
          {/* you can use any html element as a child */}
          <section data-hidden={hide%4===2}>
          middle content here
          </section>
          {/* components work too! */}
          <RightNav data-hidden={hide%4===0}>
            <section>
              <span role="img" aria-label="Help">❓</span>
            </section>
            <section>
              <span role="img" aria-label="Bell">🔔</span>
            </section>
            <section>
              <span role="img" aria-label="Settings">⚙</span>
            </section>
            <section>
              <span role="img" aria-label="User">👤</span>
            </section>
          </RightNav>
        </Nav>
     );
}
```

## License

MIT © [AskAlice.me](https://github.com/AskAlice)
