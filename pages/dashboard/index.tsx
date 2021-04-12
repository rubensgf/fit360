import React from "react";
import { FiPower, FiClock } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile , Content, ContentMain, NextInvoice, FooterNav, NavMenu, NavHome,
NavInvoice, NavPlan, NavDiv, NavConfig } from './styles';
import Menu from '../../components/Menu';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from 'next/link';

const Dashboard: React.FC = () => {
 return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src="logo.svg" alt="Fit360"  />
                    <Profile>
                        <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Mario de andrade" />
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>Mario de Andrade</strong>
                        </div>
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>Mario de Andrade</strong>
                        </div>
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>Mario de Andrade</strong>
                        </div>
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>Mario de Andrade</strong>
                        </div>
                    </Profile>
                    <button type="button">
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>

            <Content>
                <ContentMain>
                    <h1>Avisos Importantes</h1>
                    <p>
                        <span>Hoje</span>
                        <span>Dia 06</span>
                        <span>Segunda-feira</span>
                    </p>
                    <NextInvoice>
                        <strong>Proxíma Fatura</strong>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                            <strong>Plano Fit - semanal</strong>
                            <span>
                                <FiClock />
                                R$ 240,00 reais
                            </span>
                        </div>
                    </NextInvoice>

                </ContentMain>            
            </Content>
            <Menu />
        </Container>
    );    
        
};

  export default Dashboard;
