import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";


const Container = styled.div`
`;

const AboutMeContainer = styled.div `
    background-color: #FF9E9E;
    height: 100vh;
    font-family: 'Quicksand', sans-serif;
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
    font-family: 'Quicksand', sans-serif;
    text-align: center;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 70px;
    margin-bottom: 40px;
`
const GPA = styled.h6`
    width: 100px;
    margin-left: 450px;
`
const SAT = styled.h6`
    width: 100px;
    margin-left: 450px;
`
const TOEFL = styled.h6`
    width: 100px;
    margin-left: 450px;
`
const APWH = styled.h6`
    width: 100px;
    margin-left: 450px;
`
const APEcon = styled.h6`
    width: 100px;
    margin-left: 450px;
    padding-bottom: 300px;
`
const HobbyContainer = styled.div`
    background-color: #F8E09A;
    height: 100%;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    text-align: left;
    padding-left:40px;
`
const Title2 = styled.h1`
    font-weight: 700;
    font-size: 70px;
`

const Music = styled.h4`
`
const Album = styled.div`
`

const Poster = styled.div`

`

const WatchingMovie = styled.h4`
    padding-top: 40px;
`

const Documentary = styled.h4`

`

const RowContainer = styled.div`
    display:flex;
    flex-direction: row;
`;

const Video = styled.div`

`



function NewPage() {
    const barStyle = {
        width: "400px",
        height: "20px",
        backgroundColor:"white",
    };

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
                <RowContainer>
                <GPA>
                    GPA
                </GPA>
                <ProgressBar 
                    style={barStyle} 
                    label={`4.8/5.0`}
                    max={5.0} 
                    min={0.0} 
                    now={4.8} 
                />
                </RowContainer>
                <RowContainer>
                <SAT>
                    SAT
                </SAT>
                <ProgressBar 
                    style={barStyle} 
                    label={`1480 / 1600`}
                    max={1600} 
                    min={0} 
                    now={1480} 
                />
                </RowContainer>

                <RowContainer>
                <TOEFL>
                    TOEFL
                </TOEFL>
                <ProgressBar 
                    style={barStyle} 
                    label={`70/120`}
                    max={120} 
                    min={0} 
                    now={70} 
                />
                </RowContainer>

                <RowContainer>
                <APWH>
                    AP WH
                </APWH>
                <ProgressBar 
                    style={barStyle} 
                    label={`4 / 5`}
                    max={5} 
                    min={0} 
                    now={4} 
                />
                </RowContainer>

                <RowContainer>
                <APEcon>
                    AP Econ
                </APEcon>
                <ProgressBar 
                    style={barStyle} 
                    label={`3 / 5`}
                    max={5} 
                    min={0} 
                    now={3} 
                />
                </RowContainer>

            </SkillLevelContainer>
            
            <HobbyContainer>
                <Title2>
                    Hobby
                </Title2>
                <Music>
                    Listening Music
                </Music>
                <Album> 
                    <img
                    src="https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg?304eb9ed9c07a16ec6d6e000dc0e7d91/melon/resize/282/quality/80/optimize"
                    alt="Album"
                    width="200px"
                    height="200px">
                    </img>
                    <img
                    src="https://assets.vogue.com/photos/62165910f5a6c95e81764b7e/1:1/w_2500,h_2500,c_limit/Avril%20Lavigne%20Main%20PR%20Image.jpg"
                    alt="Album"
                    width="200px"
                    height="200px">
                    </img>
                    <img
                    src="https://image.bugsm.co.kr/album/images/500/203545/20354571.jpg"
                    alt="Album"
                    width="200px"
                    height="200px">
                    </img>
                </Album>
                <WatchingMovie>
                    Watching Movie
                </WatchingMovie>
                <Poster>
                    <img
                    src="https://blog.kakaocdn.net/dn/dsMtSw/btqNWFIeevo/k8OlDtJna9idT7X4QkcCtk/img.jpg"
                    alt="Poster"
                    width="180px"
                    height="250px">
                    </img>
                    <img
                    src="https://blog.kakaocdn.net/dn/bS2Gbw/btq8Qyt2cGt/KJ5crHVTTtrCL0Gm3fJJLK/img.jpg"
                    alt="Poster"
                    width="180px"
                    height="250px">
                    </img>
                    <img
                    src="https://t1.daumcdn.net/cfile/tistory/995812335E42854714"
                    alt="Poster"
                    width="180px"
                    height="250px">
                    </img>
                </Poster>
                <br></br>
                <Documentary>
                    Watching Documentary
                </Documentary>
                <Video>
                <iframe width="360" height="215" src="https://www.youtube.com/embed/KcI_xfryMD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="360" height="215" src="https://www.youtube.com/embed/M8X6e-rinN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="360" height="215" src="https://www.youtube.com/embed/KmxU31re22k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Video>
            </HobbyContainer>

        </Container>
    )
}

export default NewPage