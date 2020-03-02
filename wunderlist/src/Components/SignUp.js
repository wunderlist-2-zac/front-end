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
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Password" name="Password" ref={register} />
      <h2>Create Account</h2> 
            <form>
              <h3>Full Name</h3>
              <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />

            </form>
            <form>
                <h3>Username:</h3>
                {/* <input type='username' placeholder='Username' onChange={handleChange} name="username" value={formValues.username} /> */}
            </form>
            <form>
                <h3>Password:</h3>
                {/* <input type='password' placeholder = 'Password' onChange={handleChange} name="password" value={formValues.password} /> */}
            </form>
            <button className='continue' onClick={onSubmit}>Submit</button>
            <h3>Already Have An Account?</h3>
            <MyLink to="/Login">
                <button className="log">Log In</button>
            </MyLink>

      <input type="submit" />
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
        border: #db7c1e solid 1px;
        padding: 1%;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 2%;

        &:hover{
            background: #db7c1e;
            color: white;
            cursor: pointer;
        }
    }  


  
`