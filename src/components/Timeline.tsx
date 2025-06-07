import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faUtensils, faTools } from '@fortawesome/free-solid-svg-icons'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss' 

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Minha Trajetória Profissional</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="abr de 2022 - jan de 2024 · 1 ano 10 meses"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <h3 className="vertical-timeline-element-title">Co-fundador do Instituto Ancestral</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil · Remota</h4>
            <p>
              Planejamento e execução de projetos socioculturais e ambientais (ex: Projeto EcoPraça), liderança de iniciativas premiadas e construção de parcerias estratégicas.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="out de 2021 - jun de 2022 · 9 meses"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTools} />} 
          >
            <h3 className="vertical-timeline-element-title">Tiler</h3>
            <h4 className="vertical-timeline-element-subtitle">Queenstown, Otago, Nova Zelândia</h4>
            <p>
              Instalação e manutenção de azulejos e drywall, garantia de padrões de qualidade, treinamento de equipes e otimização de processos.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jan de 2021 - out de 2021 · 10 meses"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUtensils} />} 
          >
            <h3 className="vertical-timeline-element-title">Chef</h3>
            <h4 className="vertical-timeline-element-subtitle">Queenstown, Otago, Nova Zelândia · Presencial</h4>
            <p>
              Execução de pratos em cozinha de alto padrão, controle de qualidade e inventário, liderança de processos em ambiente dinâmico.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="mar de 2019 - dez de 2020 · 1 ano 10 meses"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTools} />} 
          >
            <h3 className="vertical-timeline-element-title">Insulation Installer</h3>
            <h4 className="vertical-timeline-element-subtitle">Queenstown, Otago, Nova Zelândia · Presencial</h4>
            <p>
              Coordenação de equipes e otimização de processos de instalação de isolamento, garantindo segurança e alta qualidade.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="abr de 2018 - fev de 2019 · 11 meses"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />} 
          >
            <h3 className="vertical-timeline-element-title">Proprietário, Chef - Pizzaria Fooderoza</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil · Presencial</h4>
            <p>
              Gestão completa de negócio, criação de cardápio, otimização operacional e impulso de crescimento e satisfação do cliente.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="fev de 2013 - jun de 2018 · 5 anos 5 meses"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />} 
          >
            <h3 className="vertical-timeline-element-title">Coordenador de Produção - Ecopraça</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil · Presencial</h4>
            <p>
              Coordenação de eventos sustentáveis, gestão de equipes, engajamento comunitário e reconhecimento do projeto em visibilidade socioambiental.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;