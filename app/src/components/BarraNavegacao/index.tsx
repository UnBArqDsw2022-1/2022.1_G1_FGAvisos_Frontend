import Logo from '../../assets/FGAvisosLogoClara.svg'
import { Link } from 'react-router-dom';
import styles from './styles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BarraNavegacao() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <a href="/" >
            <img src={Logo} alt="Logo" height={50} width={120} />
          </a>
          <Nav className="end">
            <Nav.Link href="#home">Avisos</Nav.Link>
            <Nav.Link href="#features">Turmas</Nav.Link>
            <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraNavegacao;