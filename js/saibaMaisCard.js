function openCard( title ){
    let text, btn

    switch( title ){
        case "Desenvolvimento de Software e Apps":
            text = "A Orion conta com uma equipe extensa de especialistas em desenvolvimento nas tecnologias mais usadas atualmente. O service park da Orion está disponível para somar com equipes de desenvolvimento para projetos variados."
            btn="Entre em contato"
            card (title, text, btn)
            break

        case "Virtualização de processos (RPA)":
            text = "Virtualizamos fluxos e automatizamos funções burocráticas para minimizar erros, facilitar a gestão e reduzir eventuais perdas. Nossos planos de serviço são montados para atender todas as necessidades da empresa, com soluções que capturam dados e maximizam produtividade assim como horas de desenvolvimento para atender as especificidades de seu negócio."
            btn = "Solicite um orçamento"
            card (title, text, btn)
            break

        case "Business Inteligence":
            text = "Conhecimento é essencial na gestão de qualquer corporação. A equipe ORION disponibiliza profissionais competentes para identificar em conjunto com você, os indicadores estratégicos e montar dashboards completos para facilitar a tomada de decisões."
            btn = "Entre em contato com nossa equipe"
            card (title, text, btn)
            break
        
        case "Desenvolvimento de sites":
            text = "Sua presença no meio digital é essencial. Desenvolvemos landing pages, e-commerce, sites jornalísticos de streaming e muito mais."
            btn = "Solicite um orçamento"
            card (title, text, btn)
            break 


        case "Marketing digital":
            text = "Sua presença nas redes sociais é crucial para seu negócio. Montamos planos de mídia, gestão de redes sociais, identidade visual e artes."
            btn = "Solicite um orçamento"
            card (title, text, btn)
            break 
        default:
            console.log("Texto nao achado")
            break
        
    }
    
}

export {openCard}

function card (title, text, btn){

    let cardTitle = $("#cardShowTitle")
    cardTitle.text(title)

    let cardText = $("#cardShowText")
    cardText.text(text)

    let btnText = $("#cardShowBtnText")
    btnText.text(btn)
}