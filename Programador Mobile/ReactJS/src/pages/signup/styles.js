import styled from 'styled-components';

export const Container = styled.div` 
    height: auto;
    width: 100%;
`;

export const ContainerSecundary = styled.div`
    display: flex;
    height: auto;
    margin: auto; 
    max-width: 940px;

    img {
        padding-top: 30%;
        width: 50%;
    }  

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        img {
            padding: 0;
        }
    }
`;

export const FormContainer = styled.form`     
    display: flex;   
    flex-direction: column;
`;

export const Titleform = styled.div`   
    height: auto; 
    width: 100%;

    h2{   
        font-size: 48px;
        margin-top: 60px;     
        text-align: center;              
    }
`;

export const Form = styled.form` 
    display: flex;     
    flex-direction: column;   
    width: 30rem;

    input{
        border-radius: 20px; 
        border-style: none;
        background-color: #E5E5E5;       
        height: 30px;
        margin: auto;
        margin-top: 30px; 
        padding-left: 1.5rem;
        width: 80%;

        &[type="date"]{
            color: #8C8C8C;     
            font-size: 1rem;            
            padding-right: 1rem;  
            text-transform: uppercase;                
        }
    }

    button {
        background-color: #301E46;     
        border-radius: 30px;
        border-style: none;
        color: white;
        height: 40px;             
        margin: 0 0 0 48px;         
        margin-top: 30px; 
        width: 25%;

        &:hover{
            background-color: #E5E5E5;
            color: black;
            transition: 0.5s;
        }   

        .buttonArea{
            display: flex;
        }                           
    }   

    @media (max-width: 768px) {
        padding-bottom: 5em;
        width: 22em;
    }

    @media (max-width: 320px) {
        padding-bottom: 5em;
        width: 17em;

        button {
            width: 40%;
        }
    }
`;



 
