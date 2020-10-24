import styled from 'styled-components';

export const BottomContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    padding: 10px;
    max-width: 940px;
`;

export const Title = styled.h1`
    font-weight: 600;
    padding-top: 40px;
    text-align: center;
`;


export const Card = styled.div`
    background-color: #E4D3FA; 
    border-radius: 20px;
    height: auto;
    margin: 10px;
    padding: 10px;
    width: auto;

    .text-title {
        font-weight: 400;
        margin-left: 20px;
        margin-top: 14px;
    }

    &:hover {
        background-color: #edf2f4;
    }

    a {
        text-decoration: none;
    }

    h4 {
        color: #333;
    }

    p {
        color: #555;
    }
`;

export const Icon = styled.img`
    height: 78px;
    margin-left: 84px;
    width: 78px;
`;