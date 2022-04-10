import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const Container = styled.div `
    background-image: url("https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80");
    text-align: center;
    padding-top:30px;
    padding-bottom:30px;
`;

const Introduce = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 40px;
    font-family: 'Quicksand', sans-serif;
`;

const Info = styled.h2`
    color:white;
    font-family: 'Quicksand', sans-serif;
    font-style: italic;
`;

const Button = styled.button`
    border:none;
    border-radius: 10px;
    width: 30%;
    background-color: white;
    font-family: 'Quicksand', sans-serif;
`



function MainPage() {
    const history = useHistory();

const linkToNewPage= () => {
    if (true) {
        history.push("/new");
    } 
    //
    
}


    return (
        <Container>
            <Introduce> Hello, I am Yuni! </Introduce>
            <Info> Student of OO Highschool / Aiming to become an Illustrator </Info>
            <a href="https://www.instagram.com/"> <input 
                type="image" 
                src="https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c521.png" 
                alt="instagram" 
                width="40px" 
                height="40px"> 
            </input>
            </a>
            <a href="https://www.facebook.com/">
                <input 
                type="image" 
                src="https://holyspiritfremont.org/wp-content/uploads/2020/10/facebook-logo.png"
                alt="facebook"
                width="50px"
                height="40px">
                </input>
            </a>
            <a href="https://www.artstation.com/?sort_by=community"><input 
                type="image"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png"
                alt="artstation"
                width="40px"
                height="40px">
            </input>
            </a>
            <a href="https://www.deviantart.com/">
            <input
                type="image"
                src="https://cdn-icons-png.flaticon.com/512/889/889091.png"
                alt="Devianart"
                width="37px;"
                height="37px">
            </input>
            </a>
            <a href="https://www.clipstudio.net/en/">
            <input 
                type="image"
                src="https://www.clipstudio.net/view/promotion/comiccontest/img/prize_csp.png"
                alt="clipstudio"
                width="50px"
                height="40px">
            </input>
            </a>
            <br></br>
            <br></br>
            <input 
                type="image"
                src="https://as1.ftcdn.net/v2/jpg/03/69/43/20/1000_F_369432072_Cf1uESr5W4LJdoNjWzL2jamXXg5n5547.jpg"
                alt="painting"
                width="50%"
                height="50%"
                >
            </input>
            <br></br>
            <Button onClick={linkToNewPage}> Learn More </Button>
        </Container>
    )
}

export default MainPage