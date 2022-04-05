import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Container = styled.div`
`;

const AboutMeContainer = styled.div `
    background-color: #FF9E9E;
    height: 100vh;
`;

const AboutMe = styled.h1`
    font-weight: 700;
    font-size: 70px;
    text-align: center;
`

const Introudction = styled.h4`
    text-align: right;
    font-weight: 700;
    font-size: 50px;
    font-family: 'Quicksand', sans-serif;
    padding-right: 80px;
    padding-top:80px;
`

const Portrait = styled.div`
    margin-top: -150px;
    margin-left: 130px;
`

const Detail = styled.h6`
    text-align: right;
    font-weight: 700;
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    padding-right: 80px;
`

const SkillLevelContainer = styled.div`
    background-color: #9EC1FF;
    height: 100vh;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 70px;
    text-align: center;
`


function NewPage() {
    return (
        <Container>
            <AboutMeContainer>      
                <AboutMe> 
                    About Me 
                </AboutMe>
                <Introudction> 
                    Hello, I'm a student from Korea.
                </Introudction>
                <Detail> 
                    Name: Yuni
                    <br></br>
                    Email: anypany@naver.com
                    <br></br>
                    Phone: 010 0000 0000
                    <br></br>
                    Date of birth: 4 December 2005
                </Detail>
                <Portrait> 
                    <img
                    src="https://media.istockphoto.com/vectors/portrait-of-a-shorthaired-girl-androgin-lookingwith-asidelongglance-vector-id1190626181?k=20&m=1190626181&s=612x612&w=0&h=cqzcsUXp3pPDeFYJqspZY7amsnGzv9X9ZGQatwUeKEo="
                    alt="portrait"
                    width="400px"
                    height="400px">
                    </img>
                </Portrait>
            </AboutMeContainer>
            <SkillLevelContainer>
                <Title>
                    Skill Level
                </Title>

            </SkillLevelContainer>
        </Container>
    )
}

export default NewPage