import React from 'react'
import UnbLogo from '../../assets/Footer/unbLogo.svg'

export default function Footer({...props}) {
    return (
        <section>
            <div>
                <a href={props.linkUNB} target="_blank">
                    <img src={UnbLogo} alt='LogoUnb' title='UNB'/>
                </a>
                <a href={props.linkUNB} target="_blank">Acesse aqui o site UNB</a>
            </div>
            <div>
                <a href={props.contactUS} target="_blank">Formas de contato</a>
                <a href={props.moreInfo} target="_blank">Mais Informações</a>
            </div>
            <div>
                <a href={props.aboutFGAvisos} target="_blank">Sobre FGAvisos</a>
                <a href={props.aboutUs} target="_blank">Sobre a equipe</a>
            </div>
        </section>
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