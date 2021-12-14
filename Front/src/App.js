import './scss/App.scss';
import Header from './components/Header';
import Container01 from './components/Container01';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import MainFooter from './components/MainFooter';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer';

library.add(
  fab,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare
)

function App() {
  return (
    <div className="App">
      <Header />
      <Container01 />
      <About />
      <ProjectContainer />
      <MainFooter />
    </div>
  );
}

export default App;
