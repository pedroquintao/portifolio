import { useTheme } from "styled-components";
import logo from "../assets/img/logo-branca.png";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";

function Home() {
  const theme = useTheme();
  return (
    <>
      <Typography tag="h2">Pedro Quintão</Typography>
      <Typography tag="h1" color={theme.colors.orange}>
        Desenvolvedor Frontend<span style={{ color: "white" }}>.</span>
      </Typography>
      <Typography tag="p">
        Lorem ipsum dolor sit amet. Non facilis velit a reprehenderit enim ad
        harum tempore est dolor libero in soluta deserunt.{" "}
      </Typography>
      <img src={logo} alt="logo-pedro-quintão"></img>
      <Button color="red" height={"4em"} width={"8em"} $backgroundcolor="red" $level="0">
        <p>Teste</p>
        <p>IMAGEM</p>
      </Button>
    </>
  );
}

export default Home;
