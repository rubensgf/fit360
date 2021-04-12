import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAirplay, FiBarChart, FiClock, FiHome, FiList, FiPlus, FiPlusCircle, FiSettings, FiSmile } from 'react-icons/fi';

import { Container, TabContainer, TabItem, TabText  } from './styles';



export default function Menu ( ) {
    return (
        <Container>
            <TabContainer>
                <TabItem>
                    <FiHome />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiList />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiPlus />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiBarChart />
                    <TabText></TabText>
                </TabItem>
                <TabItem>
                    <FiSettings />
                    <TabText></TabText>
                </TabItem>
            </TabContainer>
        </Container>
    );
    
  };
  
