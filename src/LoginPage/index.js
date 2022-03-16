
import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const Container = styled.div `
    height: 100vh;
    display: flex;
    background-color:#78ABE3;
    text-align: center;
`;

const LeftSide = styled.div `
    height:100vh;
    width: 50%;
    background-image: url("https://64.media.tumblr.com/18c23d15eab05e416345ea480bf204c2/tumblr_odh9w1T60P1vztawho1_640.jpg");
`;

const WelcomeTitle = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 40px;
    margin-top:100px;
    padding-left: 30px;
    font-family: Cursive;
`;

const Input = styled.input`
    width:100px;
`

const Label = styled.label`
    font-size: 30px;
    color: white;
    font-family: Cursive;
`

const RightSide = styled.div`
    height: 100vh;
    font-size: 100px;
`;

const Button = styled.button`
    border:none;
    border-radius: 10px;
    width: 50%;
    background-color: beige;
`;

function LoginPage() {
    const history = useHistory();

    const [user, setUser] = useState({
        id:"",
        password:""
    }); //when we first load a page we initialize initialize states to emptye string or null/0.
    //states will be filled in when the user does specific actions
    const {id , password} = user;
    //create a function route to mainpage 



const linkToMainPage = () => {
    if (id==="" || password ==="") {
        alert(`ID or Password is empty.`);
        return
    }

    if (id=== "Yuni" && password=== "1234") {
        history.push("/main");
    }

}

//if id/email is empty string and password is empty
//alert!! if statement

//other if id is equal to your name and password is 1234
//alert youo may log in!! another if statement

//replace empty string to the following input by the user

const putUserInfo = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setUser ({
        ...user,
        [name]:value,
        //avoid reputation of repeating function using the same code
    });
    console.log(user);
};



//e stands for event

    return (
        <Container>
            <LeftSide></LeftSide>
            <RightSide>
                <WelcomeTitle> Welcome Back!</WelcomeTitle>
                <Label> ID </Label>
                    <Input 
                    type="text" 
                    value={id} 
                    name="id" 
                    onChange={putUserInfo}>
                        </Input>
                    <br></br>
                <Label> Password </Label>
                    <Input 
                    type="password"
                    value={password} 
                    name="password" 
                    onChange={putUserInfo}>
                        </Input>
                    <br></br>
                <Button onClick={linkToMainPage}>Log in</Button>
            </RightSide>
        </Container>
    )
    // return (<Container> 
    //     <LeftSide>
    //         <WelcomeTitle> Welcome Back!</WelcomeTitle>
    //         <Label for="Me"> ID </Label>
    //         <Input type="text" id="Me"> </Input>
    //         <Label> Password </Label>
    //     </LeftSide>
    //     <RightSide></RightSide>
    // </Container>)
}

export default LoginPage

/*Flex container: 
Flex item: align item next to each other
*/