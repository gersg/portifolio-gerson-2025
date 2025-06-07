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

                            <p>Foi nesse ponto de confluência entre minha experiência em gestão de projetos, minha paixão por soluções e o fascinante mundo da Inteligência Artificial que a ideia da Synapse AI começou a tomar forma. A logo, com suas duas "cabeças" interligadas por um fluxo de dados, não é apenas um design – é uma representação visual da minha própria filosofia e da essência da empresa que busco construir.

                            Minhas experiências passadas me deram uma perspectiva única sobre como diferentes "mãos" e "mentes" – sejam elas humanas ou algorítmicas – precisam trabalhar em sincronia. A Synapse AI surge, portanto, como a materialização do meu desejo de criar uma empresa onde a inteligência humana se conecta e se amplifica pela inteligência artificial. Os projetos socioculturais me ensinaram o valor de um problema bem definido e a importância de soluções que realmente façam a diferença na vida das pessoas. As experiências internacionais me mostraram a escala e a diversidade dos desafios, mas também a universalidade da necessidade por inovação e conexão.</p>

                            <p>Na Synapse AI, a visão de "ser a ponte que conecta as mentes mais brilhantes com as mais avançadas capacidades de inteligência artificial" é um reflexo direto da minha própria jornada. A missão de "desenvolver e implementar soluções de inteligência artificial inovadoras e éticas que otimizem processos, resolvam desafios complexos e abram novas possibilidades" ressoa com minha paixão por resolver problemas e minha busca por impacto positivo.

                            Os valores fundamentais da Synapse AI – Inovação Colaborativa, Inteligência Aumentada, Ética e Responsabilidade, Conexão e Sinergia, Adaptabilidade e Agilidade, e Excelência Técnica – não são apenas diretrizes corporativas; eles são os pilares que eu venho construindo ao longo de toda a minha vida profissional. Minha bagagem diversificada em liderança e gestão, agora aliada à crescente expertise técnica em Engenharia de Software, é a base sólida sobre a qual a Synapse AI será edificada.</p>

                            <p>Acredito firmemente que essa combinação única de vivências me permitirá não apenas contribuir de forma significativa para projetos desafiadores no campo da engenharia de software, mas também liderar a Synapse AI na sua missão de catalisar a evolução do mundo digital, sempre com o foco na sinergia entre o conhecimento humano e o poder transformador da Inteligência Artificial. Essa é a minha nova etapa, e nela, cada linha de código e cada estratégia de IA são construídas com a maturidade, a paixão e a visão de quem já viu e fez muito, e agora está pronto para criar o futuro.</p>
                        
                    </div>
                </div>
            </div>                   
        </div>
    );
}

export default SobreMim;