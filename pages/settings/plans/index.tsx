import React from "react";
import { Container, Content} from './styles';
import HeaderTitle from '../../../components/HeaderTitle';
import Footer from '../../../components/Footer';
import MainTitle from "../../../components/MainTitle";


const Plans: React.FC = () => {
 return (
        <Container>
            <HeaderTitle />
            <Content>
                <MainTitle />
                
                       
            </Content>
            <Footer />
        </Container>
    );          
};

export default Plans;
