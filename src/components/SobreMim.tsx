import '../assets/styles/Expertise.scss'; 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'; // Adicionei ícones de exemplo para os novos blocos


function SobreMim() {
    return (
        <div className="container" id="sobremim">
            <div className="skills-container">
                <h1>Sobre Mim</h1>
                <div className="skills-block">
                    <div className="skill">
                        <FontAwesomeIcon icon={faAddressCard} size="3x" />
                        <h3>Minha Jornada na Tecnologia: Da Liderança à Inovação Digital</h3>
                        <p>
                            Aos 38 anos, realizei um antigo sonho e mergulhei de corpo e alma no universo da tecnologia. Minha trajetória, rica em liderança de projetos socioculturais no Brasil e experiências internacionais em diversos setores, me proporcionou uma visão abrangente e uma maturidade que hoje são pilares da minha jornada como futuro engenheiro de software. Cursando Engenharia de Software, enfrento cada desafio com a resiliência e a dedicação ao aprendizado contínuo que marcaram minha carreira até aqui. A paixão por resolver problemas complexos, a colaboração em equipe e a vontade de transformar ideias em soluções práticas e impactantes são as forças motrizes que me impulsionam nessa nova etapa. Minhas experiências passadas me legaram uma perspectiva única sobre gestão de projetos e a dinâmica do trabalho em equipe. Agora, aplico esse conhecimento com foco e entusiasmo na construção de uma carreira sólida e inovadora na engenharia de software. Acredito firmemente que minha bagagem diversificada, aliada à minha crescente expertise técnica, me permitirão contribuir de forma significativa para projetos desafiadores e para a evolução do mundo digital.
                        </p>
                    </div>
                </div>
            </div>                   
        </div>
    );
}

export default SobreMim;