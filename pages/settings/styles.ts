import styled from 'styled-components'
import { shade } from 'polished';

export const Container = styled.div`
    > header {
        height: 144px;
        backgrount: #28262e;

        display: flex;
        align-items: center;

        div{
            max-width: 1120px;
            margin: 0 auto;
        }
        svg {
            color: #999591;
            width:50px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -150px auto 0;

    width: 100%;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
        
        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            }

            &:hover {
                color: ${shade(0.2, '#f4ede8')};

            }
        }
    }
`;



export const AvatarInput = styled.div`
    margin-botton: 32px ;
    positon: relative;
    width: 186px;

    img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    button {
        position: absolute;
        width: 48px;
        height: 48px;
        background: #ff9000;
        border-radius: 50%;
        right: 0;
        bottom: 0;
        border: 0;
        transition: background-color 0.2;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 20px;
            height: 20px;
        }

        &:hover {
            background: ${shade(0.2, '#ff9000')}
        }
    }
`;