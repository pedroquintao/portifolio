import styled, { useTheme } from "styled-components";
import logo from "../assets/img/logo-branca.png";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container, Col, Row, Visible } from "react-grid-system";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  background-color: midnightblue;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const theme = useTheme();
  return (
    <PageContainer>
      <ContentColumn>
        <div>
          <Typography tag="h2" size={48} weight={600}>
            Pedro Quintão
          </Typography>
          <Typography
            tag="h1"
            color={theme.colors.orange}
            size={72}
            weight={600}
          >
            Desenvolvedor Frontend<span style={{ color: "white" }}>.</span>
          </Typography>
          <Typography tag="p">
            Lorem ipsum dolor sit amet. Non facilis velit a reprehenderit enim
            ad harum tempore est dolor libero in soluta deserunt.
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button $level={2}>
            <Typography tag="p" color={theme.colors.white} size={24}>
              Github
            </Typography>
            <AiFillGithub size={45} />
          </Button>
          <Button $level={2}>
            <Typography tag="p" color={theme.colors.white} size={24}>
              Linkedin
            </Typography>
            <AiFillLinkedin size={45} />
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button $level={1}>
            <Typography tag="p" color={theme.colors.white} size={24}>
              Ver Currículo
            </Typography>
          </Button>
        </div>
      </ContentColumn>
      <ImageColumn>
        <img
          src={logo}
          alt="logo-pedro-quintão"
          width="500"
          height="500"
          style={{ opacity: 0.1 }}
        />
      </ImageColumn>
    </PageContainer>
  );
}

export default Home;