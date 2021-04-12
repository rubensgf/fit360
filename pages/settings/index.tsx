import React from "react";
import { FiLogIn, FiMail, FiLock, FiCamera, FiArrowLeft} from 'react-icons/fi';
import { Container, Content, AvatarInput} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from 'next/link';

const Settings: React.FC = () => ( 
    <Container>
        <header>
            <Link href="/dashboard">
                <FiArrowLeft />
            </Link>
        </header>
        <Content>             
            <form>
                <AvatarInput>
                    <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                    <button type="button">
                        <FiCamera />
                    </button>
                </AvatarInput>
                <h1>Meu perfil </h1>
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
        
    </Container>
  );

  export default Settings;
