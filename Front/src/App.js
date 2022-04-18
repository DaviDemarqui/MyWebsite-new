import './scss/App.scss';
import Header from './components/Header';
import Container01 from './components/Container01';
import Ventures from './components/Ventures';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import MainFooter from './components/MainFooter';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

library.add(
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faArrowDown
)

function App() {
  return (
    <>
      <Header />
      <Container01 />
      <ProjectContainer />
      <About />
      <Ventures />
      <MainFooter />
    </>
  );
}

export default App;
