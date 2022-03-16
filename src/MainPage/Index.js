import styled from "styled-components";

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
    font-family: Cursive;
`;

const Info = styled.h2`
    color:white;
    font-style: Italic;
`;

const Comment = styled.h6`
    color: white;
`


function MainPage() {
    return (
        <Container>
            <Introduce> Hello, I am Yuni! </Introduce>
            <Info> Student of OO Highschool / Aiming to become an Illustrator </Info>
            <input 
                type="image" 
                src="https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c521.png" 
                alt="instagram" 
                width="40px" 
                height="40px"> 
            </input>
            <input 
                type="image"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png"
                alt="artstation"
                width="40px"
                height="40px">
            </input>
            <input
                type="image"
                src="https://cdn-icons-png.flaticon.com/512/889/889091.png"
                alt="Devianart"
                width="37px;"
                height="37px">
            </input>
            <input 
                type="image"
                src="https://www.clipstudio.net/view/promotion/comiccontest/img/prize_csp.png"
                alt="clipstudio"
                width="50px"
                height="40px">
            </input>
            <br></br>
            <br></br>
            <input 
                type="image"
                src="https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516_960_720.jpg"
                alt="painting"
                width="50%"
                height="50%"
                >
            </input>
            <Comment> ※free source painting </Comment>

        </Container>
)
    }

export default MainPage