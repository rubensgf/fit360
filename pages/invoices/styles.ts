import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Content  = styled.main`
    height: 100vh;
`;

export const Invoice  = styled.div`
  
    max-width: 960px;
    margin: 0 auto;
    
`;

export const Header  = styled.div`
    max-width: 620px;
    margin: 0 auto;
    background: green;

    div {
        
        whidth: 100vh;
        strong {
            color: red;
            
        }

    }
 
`;

export const ListInvoice  = styled.div`
    
    display: flex;
    margin: 0 auto;
    background-color:blue;
    margin-top: 5px;
    padding: 10px ;  
    border-radius: 10px;

    img {
        width: 30px;
        height: 30px;
        border-radius: 15%;
    }

    div {
        background-color: blue;
        display: flex;
        margin: 0 auto;
    }
`;


export const Line  = styled.div`

    diplay: flex;
    align-items: center;
    justifiy-content: space-between;
    

    div {
        
        display: flex;
        justifiy-content: space-between;
        flex-direction: column;

    }
`;
