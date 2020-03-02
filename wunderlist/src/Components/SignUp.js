import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <SignUpContainer>
    <div className= 'login'>

      
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create Account</h2> 
      <form>

        <h3>First Name</h3>
        <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />

      </form>
      <form>
        <h3>Last Name:</h3>
        <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      </form>
      <form>
        <h3>Email:</h3>
        <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      </form>
      <form>
        <h3>Password:</h3>
        <input type="text" placeholder="Password" name="Password" ref={register} />
      </form>
      <button className='continue' onClick={onSubmit}>Submit</button>
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
        font-family: 'Raleway', sans-serif;
        padding-bottom: 2%;
    }
    h3{
        font-family: 'Raleway', sans-serif;
        font-size: 2.3rem;
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
        width: 100%;
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
            border: 1px solid black;
            border-radius: 4px;
            box-shadow: none;
        }
    }

    button{
        display: flex;
        justify-content: center;
        width: 100%;
        background: white;
        border-radius: 4px;
        border:  #197dac solid 1px;
        padding: 1%;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 2%;

        &:hover{
            background:#488ac0;
            color: white;
            cursor: pointer;
        }
    }  


  
`