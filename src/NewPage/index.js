import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const Container = styled.div `
    background-color:#78ABE3;
    font-family: Cursive;
    text-align: center;
`;

const Introduce = styled.h1 `
    text-align: center;
`;

const Hello = styled.h6 `
`;


function NewPage() {
    return (
        <Container>
            <Introduce> About Me </Introduce>
            <br></br>
            <input 
            type="image" 
            src="https://avvenice.com/41901/kuboraum-mask-k17-black-shine-k17-bs-optical-glasses-kuboraum-eyewear.jpg"
            alt="glasses"
            width="400px"
            height="400px">
            </input>
            <Hello> Hello I am Yuni Shin. I am a highschool student from South Korea. 
                <br></br> 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br></br>
                Name:     Yuni <br></br> Email:     Yuni@gmail.com <br></br>Phone:     010 9999 9999 <br></br> Date of Birth:     4 December 2005
            </Hello>
        </Container>
    )
}

export default NewPage