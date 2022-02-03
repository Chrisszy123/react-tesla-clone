import React from 'react';
import styled from 'styled-components'

function Login() {
  return (
      <div>
        <FormWrapper>
            <FormContent>

            <h2 class="active"> Sign In </h2>
            <h2 class="inactive underlineHover">Sign Up </h2>
            <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
            <Button type="submit" value="Log In">

            </Button>
            
            </form>
            <FormFooter>
                <a class="underlineHover" href="#">Forgot Password?</a>
            </FormFooter> 
            </FormContent>
        </FormWrapper>
    </div>
  )
}

export default Login;

const FormWrapper = styled.div`
    background-color: #397391;
    @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    width: 100%;
    height:100vh;
    min-height: 100%;
    padding: 20px;
a {
    color: #92badd;
    display:inline-block;
    text-decoration: none;
    font-weight: 400;
  }
h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px; 
    color: #cccccc;
  }
  h2.inactive {
    color: #cccccc;
  }
  
  h2.active {
    color: #0d0d0d;
    border-bottom: 2px solid #5fbae9;
  }
  input[type=text]{
    border: none;
    color: black;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  input:active{ 
    transform: scale(0.95);
  }

`
const FormContent = styled.div`
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
`
const FormFooter = styled.div`
    background-color: #234c60;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
`
const Button = styled.input `

    background-color: #397391;
    border: none;
    cursor: pointer;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    transition: all 0.1s ease-in-out;
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.3s;
    animation-delay: 0.3s;
`