import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: #301E46;
    border-radius: 0% 15px 15px 0%;
    position: fixed;
    padding-right: 14px;
    height: 100%;
    overflow: auto;
    width: 5%;
    
    a {
        color: #e5e5e5;
        display: block;
        text-decoration: none;
        padding: 8px;
    }

    @media (max-width: 768px) {
        border-radius: 0;
        height: auto;
        position: relative;
        margin-bottom: 150px;
        width: 100%;
      
        a {
            float: left;
            text-align: center;
        }
    }

    @media (max-width: 400px) {
        a {
            text-align: center;
            float: none;
        }
    }
`
