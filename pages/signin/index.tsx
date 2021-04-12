import React from "react";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from 'next/link';

const Signin: React.FC = () => ( 
        <Container>
            <Content>
            <img src="logo.svg" alt="Fit360"  width />
                
                <form method="POST" action="/api/login">
                    <h1>Fala seu login</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                    <Button type="submit">Entrar</Button> 
                    <Link href="/forgotPassword">Esqueci minha senha</Link>
                </form>
                <a href="login">
                    <FiLogIn/>
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
  );

  export default Signin;
