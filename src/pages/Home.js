import { About, Landing, Projects, Services } from "../components";
import Container from "react-bootstrap/Container";
function Home() {
  return (
    <Container>
      <Landing />
      <About />
      <Services />
      <Projects limit={6} />
    </Container>
  );
}

export default Home;
