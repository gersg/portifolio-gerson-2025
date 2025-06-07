import React from "react";
import '../assets/styles/Project.scss';
import ecopracaImage from '../assets/images/ecopraca.jpg';
import guaraImage from '../assets/images/guara.png';
import healSafeImage from '../assets/images/healsafelogo.png';
import mentisImage from '../assets/images/mentis.png';
import nasa2Image from '../assets/images/nasa2.jpg';
import tatuitechImage from '../assets/images/tatuitech.png';
import zoni2Image from '../assets/images/zoni2.png';
import imagerenovaSystem from '../assets/images/image.png';


function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Projetos Pessoais</h1>
        <div className="projects-grid">
          <div className="project">
            <a
              href="./EmBreve"
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
              href="./EmBreve"
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
              acessos e resposta automatizada a incidentes..
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/ecopraca"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ecopracaImage}
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
              <h2>EcoPraça: Plataforma Colaborativa Ambiental</h2>
            </a>
            <p>
              Criei uma plataforma web para conectar projetos de
              sustentabilidade e voluntários, com foco em impacto
              socioambiental, usando **Ruby on Rails**.
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
              <h2>Mentis: Gestão para Comunidades Terapêuticas</h2>
            </a>
            <p>
              Sistema de gestão integrado para comunidades terapêuticas,
              abrangendo controle de pacientes, agendamentos, estoque e
              relatórios de progresso. Desenvolvido com **Ruby on Rails** e
              **JavaScript**.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/guara"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={guaraImage}
                className="zoom"
                alt="Thumbnail do Chatbot Guará"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/guara"
              target="_blank"
              rel="noreferrer"
            >
              <h2>ChatBot Guará: Automação e Atendimento WhatsApp</h2>
            </a>
            <p>
              Implementei um chatbot inteligente para automatização de
              atendimento ao cliente, com integração direta via API do
              **WhatsApp**. Capaz de responder a consultas e agendamentos,
              usando **Python**.
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
              <h2>Hackathon NASA: Análise de Componentes Espaciais</h2>
            </a>
            <p>
              Participei de um hackathon focado em análise de dados da NASA,
              desenvolvendo um painel interativo para visualizar o desempenho de
              componentes críticos de missões espaciais, utilizando **Python** e
              **JavaScript**.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/zoni"
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
              href="https://placeholder.com/zoni"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Zoni: Plataforma de Streaming de Música (Clone Spotify)</h2>
            </a>
            <p>
              Construí um clone funcional da interface de um serviço de
              streaming de música, com reprodução de áudio, criação de playlists
              e busca. Utilizei **React** para o frontend e um backend simples
              em **Flask**.
            </p>
          </div>
          <div className="project">
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={nasa2Image}
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
              <h2>EcoFlix: Conteúdo Socioambiental e Espacial</h2>
            </a>
            <p>
              Plataforma de streaming de vídeo inspirada na Netflix, dedicada a
              documentários sobre sustentabilidade e exploração espacial.
              Desenvolvida com **React** e **Ruby on Rails** para gerenciamento
              de conteúdo.
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
              <h2>EcoFlix: Conteúdo Socioambiental e Espacial</h2>
            </a>
            <p>
              Plataforma de streaming de vídeo inspirada na Netflix, dedicada a
              documentários sobre sustentabilidade e exploração espacial.
              Desenvolvida com **React** e **Ruby on Rails** para gerenciamento
              de conteúdo.
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
                alt="Thumbnail do EcoFlix / NASA"
                width="100%"
              />
            </a>
            <a
              href="https://placeholder.com/nasa-eco"
              target="_blank"
              rel="noreferrer"
            >
              <h2>EcoFlix: Conteúdo Socioambiental e Espacial</h2>
            </a>
            <p>
              Plataforma de streaming de vídeo inspirada na Netflix, dedicada a
              documentários sobre sustentabilidade e exploração espacial.
              Desenvolvida com **React** e **Ruby on Rails** para gerenciamento
              de conteúdo.
            </p>
          </div>
          {/* A imagem logo2heads.png é mais adequada para um footer ou cabeçalho,
                    mas se você quiser usá-la em um projeto, crie um card específico para ela. */}
        </div>
      </div>
    );
}

export default Project;