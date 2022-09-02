import React from 'react'
import UnbLogo from '../../assets/Footer/unbLogo.svg'
import { FooterStyle } from './styles'

export default function Footer({...props}) {
    return (
        <FooterStyle>
            <div>
                <a href={props.linkUNB} target="_blank">
                    <img src={UnbLogo} alt='LogoUnb' title='UNB'/>
                </a><br/>
                <a href={props.linkUNB} target="_blank">Universidade de Brasília</a>
            </div>
            <div>
                <a href={props.contactUS}>Formas de contato</a><br/><br/>
                <a href={props.moreInfo}>Mais Informações</a><br/>
            </div>
            <div>
                <a href={props.aboutFGAvisos}>Sobre FGAvisos</a><br/><br/>
                <a href={props.aboutUs}>Sobre a equipe</a><br/>
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
