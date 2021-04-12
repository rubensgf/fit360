import React from "react";
import { Container, Content, ListPlan, Description} from './styles';
import HeaderTitle from '../../components/HeaderTitle';
import Footer from '../../components/Footer';
import MainTitle from "../../components/MainTitle";


const plans: React.FC = () => {
 return (
        <Container>
            <HeaderTitle />
            <Content>
                <MainTitle />
                <ListPlan>
                    <div> 
                        <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                        <Description>
                            <div>
                                <strong>Plano Fit - semanal</strong>
                                <span>nononon asdf a sd f asdasdfasdfafasd fasdfasd fo no no no no no no n</span>
                            </div>
                        </Description>
                        <span>
                            R$ 240,00 
                        </span>
                    </div>
                    <div> 
                        <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                        <Description>
                            <div>
                                <strong>Plano Fit - semanal</strong>
                                <span>nononon asdf a sd f asdasdfasdfasdfasdfasdfasdfasd asdf asdfafa afasd fasdfasd fo no no no no no no n</span>
                            </div>
                        </Description>
                        <span>
                            R$ 240,00
                        </span>
                    </div>
                    <div> 
                        <img src="https://cdn.pixabay.com/photo/2018/02/27/17/40/credit-card-3186083_960_720.png" alt="pagamento"></img>
                        <Description>
                            <div>
                                <strong>Plano Fit - semanal</strong>
                                <span>nononon asdf a sd f asdasdfasdfasdfasdfasdfasdfasd asdf asdfafa afasd fasdfasd fo no no no no no no n</span>
                            </div>
                        </Description>
                        <span>
                            R$ 240,00
                        </span>
                    </div>
                </ListPlan>
                       
            </Content>
            <Footer />
        </Container>
    );          
};

export default plans;
