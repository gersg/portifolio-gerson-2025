import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Next.js",
    "Tailwind CSS",
    "GraphQL"
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "Prisma"
];

const labelsThird = [
    "Python",
    "Pandas",
    "NumPy",
    "Gemini",
    "Mistral AI",
    "Hugging Face Transformers",
    "scikit-learn",
    "Vectorize",
    "Gradio" 
 
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Minhas Habilidades</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3> Front End</h3>
                    <p>Experiente na criação de aplicações web modernas do zero, com forte domínio em React para interfaces de usuário dinâmicas. Possuo proficiência no Ciclo de Vida do Desenvolvimento de Software (SDLC), garantindo a entrega de soluções front-end otimizadas e focadas na experiência do usuário. Estou sempre em busca de novas tecnologias e ferramentas para ampliar meu portfólio de habilidades.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologias:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Back End</h3>
                    <p>Com expertise sólida na criação de aplicações web do zero, sou especialista em construir a espinha dorsal de sistemas robustos. Minha proficiência inclui Node.js, Express.js e NestJS, o que me permite desenvolver APIs eficientes e escaláveis. Tenho um domínio aprofundado em banco de dados, utilizando PostgreSQL e Prisma para gerenciamento de dados confiável, garantindo soluções back-end de alta performance e seguras.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologias:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
                    <h3>Em desenvolvimento</h3>
                    <p>Atualmente, estou me aprofundando e me desenvolvendo ativamente nas áreas de análise de dados e Inteligência Artificial (IA). Meu foco está em expandir minhas habilidades e conhecimentos nessas disciplinas para aplicar as melhores práticas e inovações em projetos futuros.Com esse aprofundamento, busco não só entender os conceitos, mas também ganhar experiência prática na na construção de aplicações de IA e LLMs que geram valor a partir dos dados.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologias:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;