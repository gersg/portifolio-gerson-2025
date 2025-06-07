import '../assets/styles/Expertise.scss'; 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'; 



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
                           Aos 38 anos, decidi trilhar um caminho que há muito me chamava: o universo da tecnologia. Não foi uma mudança abrupta, mas sim uma evolução natural de uma trajetória já rica em experiências, que agora me prepara para ser um futuro Engenheiro de Software e, mais importante, para dar vida a projetos de impacto.

                            Minha carreira anterior, profundamente imersa na liderança de projetos socioculturais no Brasil, me proporcionou uma visão abrangente das dinâmicas humanas, da colaboração e da arte de transformar ideias abstratas em realidades tangíveis. As experiências internacionais em diversos setores complementaram essa base, ampliando minha perspectiva sobre a gestão de equipes multifuncionais e a complexidade de desafios globais. Essa bagagem me legou não apenas uma maturidade profissional ímpar, mas também uma capacidade inata de identificar problemas complexos e de orquestrar esforços coletivos para solucioná-los.</p>

                            <p>Hoje, como estudante de Engenharia de Software, enfrento cada desafio com a mesma resiliência e dedicação ao aprendizado contínuo que marcaram minha jornada até aqui. A paixão por desvendar e resolver problemas complexos, a crença na colaboração em equipe como motor da inovação e a vontade inabalável de transformar ideias em soluções práticas e impactantes são as forças motrizes que me impulsionam nesta nova e empolgante etapa.</p>

                            <p>Nascida da confluência de uma vasta experiência em liderança e gestão de projetos socioculturais e internacionais, com uma paixão ardente pela resolução de problemas complexos e o poder transformador da tecnologia, a TATUi TECH é a materialização de uma visão singular. Não somos apenas uma empresa de tecnologia; somos a ponte que conecta ideias brilhantes e soluções robustas, impulsionando a evolução digital com propósito e adaptabilidade.

                               Nossa essência reside na sinergia e na capacidade de se adaptar a mudanças constantes do mundo tecnológico. a TATUi TECH se dedica a desenvolver e implementar soluções tecnológicas inovadoras e éticas. O que nos move é a crença de que a colaboração – entre equipes multidisciplinares e entre humanos e sistemas – é o motor da verdadeira inovação, otimizando processos, resolvendo desafios complexos e abrindo novas e impactantes possibilidades para empresas e pessoas.

                               Cada linha de código e cada estratégia tecnológica que construímos são permeadas por uma maturidade profissional ímpar, uma capacidade inata de identificar problemas complexos e a determinação de transformar ideias abstratas em realidades tangíveis. Na TATUi TECH, a inovação colaborativa, a inteligência aumentada (quando aplicável), a ética e a responsabilidade, a conexão, a sinergia, a adaptabilidade e a excelência técnica não são apenas diretrizes; são os pilares que edificamos e que nos capacitam a catalisar o futuro do mundo digital, sempre com foco em soluções que realmente fazem a diferença.

                               A TATUi TECH: Conectando mentes. Adaptando o futuro.
                        </p>
                    </div>
                </div>
            </div>                   
        </div>
    );
}

export default SobreMim;