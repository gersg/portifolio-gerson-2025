import React from "react";
import '../assets/styles/Project.scss';
import hortaImage from '../assets/images/horta do futuro2.png';
import guaraImage from '../assets/images/guara.png';
import healSafeImage from '../assets/images/healsafelogo.png';
import mentisImage from '../assets/images/mentis.png';
import nasa2Image from '../assets/images/nasa2.jpg';
import tatuitechImage from '../assets/images/tatuilogo.png';
import zoni2Image from '../assets/images/zoni2.png';
import imagerenovaSystem from '../assets/images/image.png';
import ecoflixImage from '../assets/images/ecoflix.png';


function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Projetos Pessoais</h1>
        <div className="projects-grid">
          <div className="project">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={healSafeImage}
                className="zoom"
                alt="Thumbnail do Projeto HealSafe"
                width="100%"
                height={"86%"}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>HealSafe: Segurança Inteligente, Cuidado sem Fronteiras</h2>
            </a>
            <p>
              O HealSafe é uma solução inovadora de cibersegurança projetada
              para proteger hospitais, clínicas e organizações de saúde contra
              ameaças cibernéticas, vazamentos de dados sensíveis e interrupções
              operacionais. Por meio de ferramentas integradas, a plataforma
              oferece monitoramento em tempo real, análise preditiva, gestão de
              acessos e resposta automatizada a incidentes. Criado para o Hackaton Imdcode81 - 2025.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/ecopraca"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={hortaImage}
                className="zoom"
                alt="Thumbnail do Projeto Ecopraça"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/ecopraca"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Horta Resiliente e Circular</h2>
            </a>
            <p>
              A Horta Resiliente e Circular é um projeto que une sustentabilidade, resiliência climática e educação. Trata-se de uma horta comunitária equipada com tecnologia IoT para monitoramento inteligente, funcionando também como um laboratório de economia circular para escolas e uma base para resiliência climática. Essa solução promove segurança alimentar, educação prática, e preparação comunitária frente às mudanças climáticas. Projeto ainda esta em desenvolvimento.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/mentis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mentisImage}
                className="zoom"
                alt="Thumbnail do Sistema Mentis"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/mentis"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Mentis: Sistema de Saude, Bem estar e Mentalidade</h2>
            </a>
            <p>
              A Mentis é uma plataforma digital e uma página no Instagram dedicada a explorar e promover conhecimento sobre a mente, o espírito, a saúde mental, a psiquiatria, a psicologia e a física quântica. Inspirada pela interseção entre ciência, espiritualidade e bem-estar, a Mentis busca ser um ponto de conexão para indivíduos que desejam expandir sua consciência, cuidar da saúde mental e explorar novos paradigmas do pensamento humano.
              A ideia central da Mentis é oferecer um espaço seguro, informativo e inspirador para que as pessoas possam compreender melhor suas mentes, nutrir seus espíritos e aplicar conceitos científicos e psicológicos na busca pelo autoconhecimento e bem-estar. A Mentis também busca desmistificar conceitos da física quântica, conectando-os à experiência humana e espiritual.

            </p>
          </div>
          <div className="project">
            <a
              href="https://www.youtube.com/watch?v=t0YhLlujkHY&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={guaraImage}
                className="zoom"
                alt="Thumbnail do Guardiao Guará"
                width="100%"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=t0YhLlujkHY&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=2"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Guardiao Guara</h2>
            </a>
            <p>
              Uma plataforma digital que reúne dados e conecta cidadãos, empresas e governos para melhorar a eficiência no uso de recursos naturais (água, energia, resíduos). A plataforma integra sensores IoT, gamificação e uma interface amigável para engajar a comunidade. Criada para o Hackaton da Campus Party - Goias 2024.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/nasa-part"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={nasa2Image}
                className="zoom"
                alt="Thumbnail do Projeto NASA Parts"
                width="100%"
              />
            </a>
            <a href="https://placeholder.com/" target="_blank" rel="noreferrer">
              <h2>Hackathon Nasa Space Apps 2024</h2>
            </a>
            <p>
              Desenvolvemos uma ferramenta para democratizar o acesso a informações sobre os experimentos biologicos no espaco. O projeto foi apresentado no Hackathon Nasa Space Apps 2024 onde recebeu o premiacao de primeiro lugar local e selecionado para a etapa mundial. Criado para o Hackathon Nasa Space Apps 2024.
            </p>
          </div>
          <div className="project">
            <a
              href="https://www.youtube.com/watch?v=CLxz5DEV0qw&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=3"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={zoni2Image}
                className="zoom"
                alt="Thumbnail do Projeto Zoni"
                width="100%"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=CLxz5DEV0qw&list=PLThnzmUyIepv-Ly1GVOAdKJ9T8-z1CyxL&index=3"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Zonia - Plataforma de Gestão Ambiental</h2>
            </a>
            <p>
              Sistema de monitoramento distribuído utilizando sensores de temperatura infravermelho conectados a dispositivos Arduino, instalados em locais estratégicos, ao longo das frentes de expansão do desmatamento. Esses sensores detectam aumentos bruscos de temperatura, enviando alertas em tempo real para gestores e brigadistas via aplicativos como Telegram ou WhatsApp. O Projeto sendo contemplado com o 2 lugar, Desenvolvido para o Hackathon Impulso Regional do INEP - 2024.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ecoflixImage}
                className="zoom"
                alt="Thumbnail do EcoFlix / NASA"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <h2>EcoFlix</h2>
            </a>
            <p>
            EcoFlix é mais do que uma plataforma de streaming: é um movimento global para promover a conscientização ambiental e inspirar mudanças positivas no mundo. Com foco em conteúdo educativo e inspirador, a plataforma busca engajar usuários de todas as idades em temas críticos para o futuro do planeta, como a preservação da biodiversidade, combate às mudanças climáticas, energias renováveis, e hábitos de vida sustentáveis. EcoFlix combina entretenimento e educação, criando um espaço onde documentários premiados, séries originais e filmes de impacto são acessíveis a uma audiência engajada e interessada em contribuir para um mundo melhor.
             
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagerenovaSystem}
                className="zoom"
                alt="Thumbnail do EcoFlix / NASA"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <h2>SIGCT - Sistema Integrado de Gestão de Comunidades Terapêuticas</h2>
            </a>
            <p>
            Sistema web completo e autônomo para a gestão de uma comunidade terapêutica. Este sistema visa otimizar as operações diárias, abrangendo desde o gerenciamento de usuários e documentação clínica até a hotelaria, farmácia e atividades terapêuticas. 
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={tatuitechImage}
                className="zoom"
                alt="Thumbnail da Tatui Tech"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <h2>TATUi TECH: Inovação que se adapta. Soluções que transformam.</h2>
            </a>
            <p>
              TATUi TECH é a vanguarda da inovação tecnológica, onde a adaptabilidade encontra a excelência. Somos mais que uma startup de tecnologia; somos arquitetos de soluções inteligentes e robustas, desenhadas para impulsionar o futuro dos negócios. Inspirados na resiliência e na engenharia natural do tatu, construímos sistemas e plataformas que se moldam precisamente às necessidades de cada cliente, garantindo eficiência, segurança e crescimento contínuo.

              Nossa essência reside na capacidade de transformar desafios complexos em oportunidades estratégicas, através de uma abordagem que prioriza a inovação contínua, o design intuitivo e a confiabilidade inabalável. Seja na otimização de processos com nosso SaaS personalizável, no desenvolvimento de soluções customizadas de ponta, ou na exploração da Internet das Coisas e cibersegurança adaptativa.
              
            </p>
          </div>
          {/* A imagem logo2heads.png é mais adequada para um footer ou cabeçalho,
                    mas se você quiser usá-la em um projeto, crie um card específico para ela. */}
        </div>
      </div>
    );
}

export default Project;