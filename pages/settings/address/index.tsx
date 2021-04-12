import React from "react";
import { Container, Content} from './styles';
import HeaderTitle from '../../../components/HeaderTitle';
import Footer from '../../../components/Footer';
import MenuSettings from '../../../components/MenuSettings';
import MainTitle from "../../../components/MainTitle";


const Address: React.FC = () => {
 return (
        <Container>
            <HeaderTitle />
            <Content>
                <MainTitle />
                       
            </Content>
            <MenuSettings />
        </Container>
    );          
};

export default Address;
