import Container from 'react-bootstrap/Container';
import Logo from '../../assets/FGAvisosLogoClara.svg'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles';


function BarraNavegacao() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Collapse>
          <img src={Logo} alt="Logo" height={50} width={120} />
          <Nav className="end">
            <Nav.Link as={Link} to="/perfil" style={styles.navbarText}>Perfil</Nav.Link>
            <Nav.Link as={Link} to="/login" style={styles.navbarText}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BarraNavegacao;