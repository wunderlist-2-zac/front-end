import React, {} from 'react';
import axios from "axios"
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

let renderCount = 0;

export default function SignUp() {
  const { register, handleSubmit,} = useForm();
  renderCount++;
  const onSubmit = data => {
    console.log(data.password);
    console.log(data)
    axios({ method: 'POST', url: 'https://wunderlistclone.herokuapp.com/api/auth/register',
    header: {"Content-Type": "application/json"}, data: {
    "username":data.username,
    "password":data.password
  }})
    .then(res =>{
      console.log(res);
    })
    .catch(errors => {
      console.error('Server Error', errors);
        
    })
  }
  
  
  

  return (
    <>
    <SignUpContainer>
    <div className= 'login'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create Account</h2> 
{/*      
        <h3>First Name:</h3>
        <input type="text"
         placeholder="First name" 
         name="first name" 
         ref={register({required: true, maxLength: 10})} />

      
      
        <h3>Last Name:</h3>
        <input type="text" placeholder="Last name" name="last name" ref={register({required: true, maxLength: 10})} /> */}
      
        <h3>Email:</h3>
        <input type="text" placeholder="Username" name="username" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
     
        <h3>Password:</h3>
        <input type="text" placeholder="Password" name="password" ref={register({required: true, minLength:8})}/>
        
      <button className='continue' onClick={onSubmit}>Submit</button>
      <p>render counter: {renderCount}</p>
      <h3>Already Have An Account?</h3>
      <MyLink to="/Login">
        <button className="log">Log In</button>
      </MyLink>

     
    </form>
    </div>
    </SignUpContainer>

    </>
  );
}


const MyLink = styled(Link)`
        text-decoration: none;
`
const SignUpContainer = styled.div`
    height: 60vh;
    width: 100%;
    padding: 5%;
    
    h2{
        font-size: 4rem;
        width: 100%;
        color:#52DE97;
        font-family: 'Raleway', sans-serif;
        padding-bottom: 2%;
    }
    h3{
        font-family: 'Raleway', sans-serif;
        font-size: 2.3rem;
        color:#2C7873;
        display: flex;
        justify-content: center;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 auto;
        width: 80vh;
        padding-bottom: 2%;
        

        h3 {
            display: flex;
            justify-content: flex-start;
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            padding-bottom: 1%;
        }

        input {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            padding: 1% 1%;
            margin: 0 auto;
            border: 1px solid #C0FFB3;
            border-radius: 4px;
            box-shadow: none;
        }
    }

    button{
        display: flex;
        justify-content: center;
        width: 100%;
        background:white;
        border-radius: 4px;
        border:  #197dac solid 1px;
        padding: 1%;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 2%;

        &:hover{
            background:#2C7873;
            color: #FFBA5A;
            cursor: pointer;
        }
    }  


  
`