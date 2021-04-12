import React, { InputHTMLAttributes } from 'react';
import Menu from '../Menu';

import { Container, NavBar} from './styles';

export default function Footer ( ) {
    return (
        <Container>
             <NavBar>
                <Menu />
            </NavBar>
        </Container>
    );
};
  
