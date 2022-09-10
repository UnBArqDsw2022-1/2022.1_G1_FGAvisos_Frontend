import Logo from '../../assets/FGAvisosLogoClara.svg'
import { Link } from 'react-router-dom';
import styles from './styles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BarraNavegacao() {
  return (
    <>
      <Navbar expand="lg" variant="dark" fixed="top" style={styles.navbar}>
        <Container>
          <a href="/" >
            <img src={Logo} alt="Logo" height={50} width={120} />
          </a>
          <Nav className="end">
            <Nav.Link as={Link} to="/perfil" style={styles.navbarText}>Perfil</Nav.Link>
            <Nav.Link as={Link} to="/login" style={styles.navbarText}>Login</Nav.Link>
            <Nav.Link as={Link} to="/cadastro" style={styles.navbarText}>Cadastro</Nav.Link>
            <Nav.Link as={Link} to="/" style={styles.navbarText}>Avisos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraNavegacao;