import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
    padding-top: 3%;
    margin-left: 27%;
    
    h1{
        border-bottom: 2px solid #000; 
        width: 30rem;
    }
    @media (max-width:1049px){
        margin-left: 0;
        margin-bottom: 6%;
        text-align: center;
    }
`;
export const FormContainer = styled.div`
    max-width: 940px;
    display: flex;
    justify-content: center;
    margin-left: 10%;
  
`;
export const Form = styled.form`
    width: 75%;
    flex-direction: column;
    display: flex;
    padding: 10px 0;
    input{
        border-radius: 20px;
        border-style: none; 
        background-color: #e5e5e5;
        height: 30px;
        margin-top: 15px;
        padding-left: 1.5rem;
        width: 80%;

        &[type = "date"]{
            color: #8c8c8c;
            font-size: 1rem;
            padding-right: 1rem;
            text-transform: uppercase;
        }
    }
`;

export const ButtonContainer = styled.div`
    margin: 5%;
    display: flex;

    a{
        text-decoration: none;
        width: 105%;
    }
    
    button{
        border-radius: 20px;
        background-color: #301e46;
        color: #fff;
        height: 40px;
        width: 25%;
        margin:0 0 0 48px;        
    }

    @media  (max-width: 764px){
        margin: 5% 0 0 0;

        button{
            margin: 0 0 0 20px;
            padding: 8px;
        }   
    }
`;

export const UserContainer = styled.div`
    background-color: #6930c3;
    height: 100%;
    width: 25%;
    border-radius: 30px 0 0 30px;
    position: fixed; 
    top: 0;
    right: 0;
    @media (max-width: 1049px){
        position: relative;
        border-radius: 30px;
        display: block;
        flex-wrap: wrap;
        width: 75%;
        justify-content: center;
        margin: auto;
    }
`;

export const Info = styled.div``;

export const ListContainer = styled.div`
    margin-top: 10%;
    margin-left: 18%;
    color: #fff;

    h4{
        margin-top: 10%;
        }
       
    @media (max-width:1049px){
        text-align:center;
        margin:0;
        
        h4{
            margin: 0;
        }
    }
`;

export const InfoList = styled.ul`
    list-style: none;
`;