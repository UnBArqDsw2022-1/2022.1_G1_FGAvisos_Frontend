import React from "react";
import Logo from '../../assets/FGAvisosLogoClara.svg'
import { Navbar, Nav} from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BarraNavegacao = () => {
    return (
        <Navbar expand="lg" variant="dark" fixed="top">
          <Navbar.Brand style={{ marginLeft: 25 }}>
            <img src={Logo} alt="Logo" height={50} width={120} />
          </Navbar.Brand>
              <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Navbar.Brand as={Link} to="/login">
                    <FiLogOut />
                  </Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
      );
    }

export default BarraNavegacao;
