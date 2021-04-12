import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAirplay, FiBarChart, FiClock, FiCreditCard, FiHome, FiList, FiLock, FiPlus, FiPlusCircle, FiSettings, FiSmile, FiUser } from 'react-icons/fi';

import { Container, TabContainer, TabItem, TabText  } from './styles';



export default function Menu ( ) {
    return (
        <Container>
            <TabContainer>
                <TabItem>
                    <FiLock />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiPlus />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiCreditCard />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiUser />
                    <TabText></TabText>
                </TabItem>
            </TabContainer>
        </Container>
    );
    
  };
  
