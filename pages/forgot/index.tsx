import React from "react";
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from 'next/link';

interface ForgotPasswordFormData{
    email: string;
}
const ForgotPassword: React.FC = () => ( 
        <Container>
            <Content>
                <img src="/vercel.svg"  />
                
                <form>
                    <h1>REcuperar senha</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Button type="submit">Recuperar</Button> 
                </form>
                <Link href="/signin">
                    <FiLogIn/>
                    Voltar ao login
                </Link>
            </Content>
            <Background />
        </Container>
  );

  export default ForgotPassword;
