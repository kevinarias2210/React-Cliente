import Container from '../templates/Container';
import { Section } from '../componentes/container/section/Section';
import { Aside } from '../componentes/container/aside/Aside';
import { HomeA } from '../componentes/container/casa/HomeA';
import { Crack } from '../componentes/container/crack/Crack';

const Home = () => {
  return (
    <Container>
      <Section />
      <Aside />
      {/* <SectionContacto /> */}
      <HomeA />
      <Crack />
    </Container>
  );
}

export default Home