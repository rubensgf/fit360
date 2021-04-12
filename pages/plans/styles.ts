import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
`;

export const Content  = styled.main`
    height: 100vh;
`;

export const ListPlan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        display:flex;
        align-items: center;
        
        margin-top: 10px;
        padding: 10px 16px;
        border-radius: 10px;
        background: #3e3b47;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        > span {
            margin-left: auto;
            display: flex;
            aligin-items: center;
            color:#ff9000;
        }
    }
`;

export const Description = styled.div` 

    div {
        display: flex;
        flex-direction: column;
              
        strong {
            margin-right: auto;
            font-size:20px;
            color:#ff9000;
        }

        span {
            color: #f4ede8;
        }
}
   

`;
