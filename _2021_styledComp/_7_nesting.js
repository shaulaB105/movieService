import styled, {ThemeProvider} from "styled-components";
import GlobalStyle from "./_3_global";
import theme from "./_5_theme";


const Cards = styled.div`
background-color: white;
`
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
  ${Cards} {
    background-color: blue;
  }
`
const Button = styled.button`
    border-radius:30px;
  padding: 25px 15px;
  background-color: ${props=> props.theme.successColor};
`

function App() {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Container>
                    <Form />
                </Container>
            </ThemeProvider>
        </>
    );
}

const Form = ()=>{
    return(
        <Cards>
            <Button>Hello</Button>
        </Cards>
    )
}


export default App;
