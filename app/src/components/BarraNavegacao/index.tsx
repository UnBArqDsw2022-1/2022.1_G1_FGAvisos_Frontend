import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/FGAvisosLogoClara.svg'


function BarraNavegacao() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <img src={Logo} alt="Logo" height={50} width={120} />
          <Nav className="end">
            <Nav.Link href="#home">Avisos</Nav.Link>
            <Nav.Link href="#features">Turmas</Nav.Link>
            <Nav.Link href="#pricing">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraNavegacao;