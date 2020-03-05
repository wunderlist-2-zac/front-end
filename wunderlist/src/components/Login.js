import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm();

  // axios({
  //   method: "POST",
  //   url: "https://wunderlistclone.herokuapp.com/api/auth/login",
  //   header: { "Content-Type": "application/json" },
  //   data: {
  //     username: data.username,
  //     password: data.password
  //   }
  // })

  const onSubmit = data => {
    if (data !== undefined) {
      axios
        .post("https://wunderlistclone.herokuapp.com/api/auth/login", data)
        .then(res => {
          console.log(res);
          window.localStorage.setItem("token", res.data.token);
          props.history.push("/todoapp");
        })
        .catch(errors => {
          console.error("Server Error", errors);
        });
    }
  };

  return (
    <>
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>

          <h3>Email</h3>
          <input
            type="text"
            placeholder="Email"
            name="username"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.username && errors.username.message}
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: "Required"
            })}
          />
          {errors.password && errors.password.message}
          <input
            className="submitButton"
            type="submit"
            text="Submit"
            value="Submit"
          />
          <h3>Don't Have An Account Yet?</h3>
          <MyLink to="/SignUp">
            <button>Create Account</button>
          </MyLink>
        </form>
      </LoginContainer>
    </>
  );
}

const MyLink = styled(Link)`
  text-decoration: none;
`;

const LoginContainer = styled.div`
  height: 60vh;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 4rem;
    display: flex;
    justify-content: center;
    width: 100%;
    color:#52DE97;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 2%;
  }

  h3 {
    font-family: "Raleway", sans-serif;
    font-size: 2.3rem;
    color: #2c7873;
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
      font-family: "Raleway", sans-serif;
      padding-bottom: 1%;
    }

    input {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 1% 1%;
      margin: 0 auto;
      border: 1px solid #c0ffb3;
      border-radius: 4px;
      box-shadow: none;
      
    }

    .submitButton {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: white;
      border-radius: 4px;
      border: #197dac solid 1px;
      padding: 1%;
      font-family: "Raleway", sans-serif;
      font-size: 20px;
      margin-top: 2%;
      margin-left: 1%;
    }
    .submitButton:hover {
      background: #2c7873;
      color: #ffba5a;
      cursor: pointer;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: white;
    border-radius: 4px;
    border:  #197dac solid 1px;
    padding: 1%;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    margin-bottom:
    margin-left:1%;

    &:hover {
      background: #2c7873;
      color: #ffba5a;
      cursor: pointer;
    }
  }
`;
