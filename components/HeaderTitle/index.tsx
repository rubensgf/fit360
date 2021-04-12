import Link from 'next/link';
import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiArrowLeft, FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Title } from './styles';



export default function Tabs ( ) {
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <button type="button">
                        <Link href="/"><FiArrowLeft /></Link>
                    </button>
                    <Title>
                        <span>título</span>
                    </Title>  
                    <button type="button">
                        <FiPower />
                    </button>  
                </HeaderContent>
            </Header>
        </Container>
    );
};
  
