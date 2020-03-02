import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const LandingPage = () => {

    return(
        <>
      
        <LandingPageContainer>
            <MyLink to="/Login">
                <button className="log">Log In</button>
            </MyLink>
            <MyLink to="/SignUp">
                <button>Create Account</button>
            </MyLink>
        </LandingPageContainer>       
        </>
    )
}

export default LandingPage;

const LandingPageContainer = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

        button{
            display: flex;
            justify-content: center;
            border: none;
            width: 60vw;
            background: white;
            border-radius: 4px;
            border: #314d86 solid 1px;
            padding: 1%;
            font-family: 'Raleway', sans-serif;
            margin-bottom: 2%;

            &:hover{
                background: #488ac0;
                color: white;
                cursor: pointer;
            }
        }
    
`
const MyLink = styled(Link)`
        text-decoration: none;
  
`