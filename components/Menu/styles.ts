import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 0;
    background-color: #28262e;    
    display: flex;
    align-items: center;
`;


export const TabContainer = styled.div`
    width: 980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content : space-between;


`;

export const TabItem = styled.div`

cursor: pointer;

fill: blue;

&:hover,
&.active {
    fill: red;
}

    
`; 

export const TabItems = styled.div`
    width: 120px;
    height: 100px;
    background: rgba(255,255,255,0.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;

    
`; 

export const TabText = styled.div`
    fonte-size: 5px;
    color: #fff;
`; 
