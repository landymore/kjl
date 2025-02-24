import * as React from 'react';
import Logo from './Logo';

import './Header.css';

function Header (props: {}) {
    return (
        <>
          <header>
            <Logo />
          </header>
        </>
      );
}

export default Header;