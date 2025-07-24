import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, skill_1 } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Olá, meu nome é{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Alexandre
        </span>{" "}
        👋
      </h1>

      <br />
      <h3 className='subhead-text'>Sobre Mim</h3>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Sou Alexandre Liberato, desenvolvedor backend residente em Florianópolis (SC), com formação em Análise e Desenvolvimento de Sistemas e uma sólida trajetória em liderança logística. Estou em transição de carreira, trazendo para a área de tecnologia minha capacidade de organização, resolução de problemas e foco em resultados.
        </p>
        <p>
        Atualmente, trabalho como coordenador de logística na Superpan, mas estou 100% disponível para oportunidades presenciais em Florianópolis. Tenho transporte próprio e total flexibilidade para me adaptar à rotina da equipe.
        </p>
        </div>
        <br />
        <h3 className='subhead-text'>Perfil Profissional</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Busco minha primeira oportunidade como Desenvolvedor Júnior Backend. Tenho experiência prática com Java, Spring Boot, React.js e PostgreSQL, e estou me especializando em arquitetura de sistemas e microsserviços. Pretendo iniciar o bacharelado em Engenharia de Software em 2026, com o objetivo de atuar em projetos complexos e, futuramente, liderar pequenas equipes de desenvolvimento.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Principais Abilidades</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skill_1.map((skill_1) => (
            <div className='block-container w-20 h-20' key={skill_1.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill_1.imageUrl}
                  alt={skill_1.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
         <br /><br /><br />
        <h3 className='subhead-text'>Abilidades de Nível Acadêmico</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Formação Acadêmica e Cursos em Destaque.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Além da graduação em Análise e Desenvolvimento de Sistemas, realizo diversos cursos com o objetivo de aprimorar cada vez mais minhas habilidades. Aqui está o resumo:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
