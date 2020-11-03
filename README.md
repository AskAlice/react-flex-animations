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

import { AnimatedFlexbox } from 'react-flex-animations'
import styled from 'styled-components';
const Nav = styled(AnimatedFlexbox)`
height:72px;
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
          <section data-hidden={hide%4===2}>
          middle content here
          </section>
          <section data-hidden={hide%4===0}>
          right content here
          </section>
        </Nav>
     );
}
```

## License

MIT © [AskAlice.me](https://github.com/AskAlice)
