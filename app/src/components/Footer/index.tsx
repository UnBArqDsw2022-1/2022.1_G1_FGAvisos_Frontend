import React from 'react'
import UnbLogo from '../../assets/Footer/unbLogo.svg'
import { FooterStyle } from './styles'

export default function Footer({...props}) {
    return (
        <FooterStyle>
            <div className='logoUnB'>
                <a href={props.linkUNB} target="_blank">
                    <img height={30} width={74} src={UnbLogo} alt='LogoUnb' title='UNB'/>
                </a>
                <a href={props.linkUNB} target="_blank">Universidade de Brasília</a>
            </div>
            <div className='links'>
                <a className='item-link' href={props.contactUS}>Formas de contato</a>
                <a className='item-link' href={props.moreInfo}>Mais Informações</a>
                <a  className='item-link'href={props.aboutFGAvisos}>Sobre FGAvisos</a>
                <a  className='item-link'href={props.aboutUs}>Sobre a equipe</a>
            </div>
        </FooterStyle>
    )
}

Footer.propTypes = {
    linkUNB: String,
    contactUS: String,
    moreInfo: String,
    aboutFGAvisos: String,
    aboutUs: String
}

Footer.defaultProps = {
    linkUNB: "https://unb.br/",
    contactUS: "#FaltaLinkar",
    moreInfo: "#FaltaLinkar",
    aboutFGAvisos: "#FaltaLinkar",
    aboutUs: "#FaltaLinkar"
}
