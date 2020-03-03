import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const LandingPage = () => {

    return(
        <>
      
        <LandingPageContainer>
            <MyLink to="/Login">
                <button className="log"><h3>Log In</h3></button>
            </MyLink>
            <MyLink to="/SignUp">
                <button><h3>Create Account</h3></button>
            </MyLink>
        </LandingPageContainer>       
        </>
    )
}

export default LandingPage;

const LandingPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

        button{
            display: flex;
            justify-content: center;
            border: none;
            width: 60vw;
            background:  #2C7873;
            border-radius: 4px;
            border: #52DE97 solid 1px;
            padding: 1%;
            font-family: 'Raleway', sans-serif;
            margin-bottom: 2%;

            &:hover{
                background: #FFBA5A;
                color: white;
                cursor: pointer;
            }
        }
    
`
const MyLink = styled(Link)`
        text-decoration: none;
        margin:5%;
  
`