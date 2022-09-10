
import { Tema } from "../../utils/Tema";

const styles = {
    navbarLogo: {
        marginLeft: '2vh',
        height: '5vh',
    },

    navbar: {
        backgroundColor: `${Tema.colors.$primariaEscura}`,
        height: '75px',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
    },

    Logo:{
        width: '15%',
        height: '100%',
        background: 'no-repeat center',
    },

    Barra: {
        width: '100%',
        height: '100%',
        backgroundColor: `${Tema.colors.$primariaEscura}`,
    }, 

    navbarText: {
        fontSize: '2vh',
        marginLeft: '2vh',
        fontWeight: 'bold',
        color: 'white',
    },

    navbarDropdownItem: {
        backgroundColor: 'black',
        color: 'white',
    },
};

export default styles;