import React from "react";
import { Container, Content, Invoice, ListInvoice, Header, Line, Body} from './styles';
import HeaderTitle from '../../components/HeaderTitle';
import Footer from '../../components/Footer';
import MainTitle from "../../components/MainTitle";


const Invoices: React.FC = () => {
 return (
        <Container>
            <HeaderTitle />
            <Content>
                <MainTitle />
                 <Invoice>
                     
                        <Header>
                        <span>descricao</span>
                        </Header>
                        <ListInvoice>
                            <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                            <Line>
                                <div>
                                    <span>Plano fit</span>
                                    <span>20/05/2021</span>
                                </div>
                                <div>    
                                    <span>20/05/2021</span>
                                    <span>Cartão</span>
                                </div>
                                <div>    
                                    <span>Pago</span>
                                    <span>240,00</span>
                                </div>
                            </Line>
                        </ListInvoice>
                        <ListInvoice>
                        
                            <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                            <div>
                                <div>
                                    <span>Plano fit</span>
                                    <span>20/05/2021</span>
                                </div>
                                <div>    
                                    <span>20/05/2021</span>
                                    <span>Cartão</span>
                                </div>
                                <div>    
                                    <span>Pago</span>
                                    <span>240,00</span>
                                </div>
                            </div>
                        </ListInvoice>
                  
                 </Invoice>      
            </Content>
            <Footer />
        </Container>
    );          
};

export default Invoices;
