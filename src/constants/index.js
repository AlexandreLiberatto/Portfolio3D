import { //====SVG formações e cursos vai aqui===========
    code, 
    java2, 
    academy, 
} from "../assets/images";
import {
    maps,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    java,
    spring,
    linkedin,
    mysql,
    php,
    csharp,
    nodejs,
    agencia,
    postgresql,
    react,
    flutter,
    python,
    bootstrap,
    pousada,
    pousada2,
    academia,
    hotel,
} from "../assets/icons";

export const skill_1 = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    
];


export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHPI",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "csharp",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Mobile",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "Postgresql",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "bootstrap CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];


export const experiences = [ //=====formações=======
    {
        title: "Graduação em Análise e Desenvolvimento de Sistemas",
        company_name: "UNISENAI",
        icon: academy,
        iconBg: "#accbe1",
        date: "Conclusão - junho 2025",
        points: [
            "Essa formação me capacitou a atuar no desenvolvimento de sistemas completos, desde a concepção até a implementação, com foco em inovação, eficiência e qualidade.",
            "Gestão Ágil de Projetos",
            "Arquitetura e Modelagem de Sistemas",
            "Computação em Nuvem",
            "Desenvolvimento Web e Sistemas Web",
            "Engenharia de Requisitos",
            "Segurança da Informação",
            "Sistemas Móveis e Distribuídos",
            "Projeto e Gerenciamento de Banco de Dados",
            "Interface Humano-Computador",
            "Entre outros..."

        ],
    },
    {
        title: "Análista de Requisitos e Sistemas de Tecnologia",
        company_name: "SENAI",
        icon: academy,
        iconBg: "#fbc3bc",
        date: "Duração de 1.200 horas",
        points: [
            "Essa formação me capacitou a atuar no desenvolvimento de sistemas completos, desde a concepção até a implementação, com foco em inovação, eficiência e qualidade.", 
            "Além disso pude aprender muito sobre a parte técnica e prática, desenvolvendo habilidades essenciais para atuar na área de tecnologia da informação."    
        ],
    },
    {
        title: "Bootcamp Java com Spring Boot",
        company_name: "DIO",
        icon: java2,
        iconBg: "#b7e4c7",
        date: "Duração de 75 horas",
        points: [
            "Durante o curso de Java com Spring Boot , desenvolvi habilidades para criar aplicações robustas e escaláveis, abrangendo desde os fundamentos de Java até práticas avançadas com Spring Boot.",
            "Aprendi a construir APIs RESTful, gerenciar persistência de dados com JPA e Hibernate, implementar segurança com Spring Security e realizar testes automatizados.",
            "O curso também reforçou boas práticas de desenvolvimento, como controle de dependências, versionamento de código e integração contínua, consolidando meu conhecimento no ecossistema Java e no desenvolvimento backend.",
        ],
    },
    {
        title: "Desenvolvimento Web",
        company_name: "Udemy",
        icon: code,
        iconBg: "#a2d2ff",
        date: "Duração de 118 horas",
        points: [
            "Durante o curso de Desenvolvimento Web , pude adquir uma compreensão sólida das principais tecnologias e ferramentas utilizadas na criação de sites e aplicações web. Aprendi a programar em JavaScript e PHP , duas linguagens essenciais para o desenvolvimento dinâmico de sites, além de dominar o uso de HTML e CSS para estruturar e estilizar páginas de maneira eficiente e responsiva.",
            "Também aprofundei meus conhecimentos em Bootstrap , uma ferramenta poderosa para o desenvolvimento de layouts responsivos e modernos, e em MySQL , um sistema de gerenciamento de banco de dados relacional, que me capacitou a trabalhar com armazenamento e manipulação de dados em aplicações web.",
        ],
    },
    {
        title: "Formação Java Developer",
        company_name: "DIO",
        icon: java2,
        iconBg: "#ff8080",
        date: "Duração de 76 horas",
        points: [
            "Durante a formação em Java com Spring Boot, desenvolvi sólidas habilidades para construir aplicações escaláveis e de alta performance, explorando desde os princípios fundamentais do Java até o uso avançado do Spring Framework.",
            "Ao longo do curso, adquiri experiência prática na criação de APIs RESTful, no mapeamento e persistência de dados com JPA/Hibernate, na implementação de segurança com Spring Security e na execução de testes automatizados para validar funcionalidades.",
            "Também fui introduzido a metodologias modernas de desenvolvimento, como controle eficiente de dependências, versionamento de código com Git e integração contínua, consolidando minha proficiência no ecossistema Java e no desenvolvimento backend."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://wa.me/5548991604054',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AlexandreLiberatto',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alexandre-liberato-32179624b/',
    }
];

export const projects = [
    {
        iconUrl: pousada2,
        theme: 'btn-back-green',
        name: 'Pousada',
        description: 'Sistema de reservas e gestão hoteleira para a Pousada Quinta do Ypuã. Frontend em React.js + Backend Spring Boot. Inclui pagamentos via Stripe, autenticação JWT e painel administrativo. ',
        link: 'https://github.com/AlexandreLiberatto/Pousada',
    },
    {
        iconUrl: agencia,
        theme: 'btn-back-red',
        name: 'API Agência de Viagens',
        description: 'API RESTful para uma agência de viagens que busca oferecer uma integração robusta e escalável para terceiros. A API permite a criação e gerenciamento de informações sobre destinos de viagem, pacotes de turismo e reservas.',
        link: 'https://github.com/AlexandreLiberatto/agencia-viagens-api',
    },
    {
        iconUrl: academia,
        theme: 'btn-back-black',
        name: 'API Academia de Musculação',
        description: 'API desenvolvida em Java com Spring Boot, para gerenciar academias de musculação. A aplicação permite o cadastro, consulta, atualização e exclusão de alunos, professores, exercícios e usuários, além de fornecer autenticação segura via JWT (JSON Web Token).',
        link: 'https://github.com/AlexandreLiberatto/api-academia',
    },
    {
        iconUrl: maps,
        theme: 'btn-back-blue',
        name: 'App FastLocation',
        description: 'App móvel desenvolvido em Flutter que permite realizar consultas a partir de um CEP, endereços completos ou parciais. O aplicativo foi projetado para a empresas que buscam otimizar suas entregas, facilitando a consulta rápida de endereços.',
        link: 'https://github.com/AlexandreLiberatto/fast_location',
    },
    {
        iconUrl: pousada,
        theme: 'btn-back-green',
        name: 'Sistema Pousada',
        description: 'Este é um sistema de gestão de reservas desenvolvido para uma pousada em Tubarão, Santa Catarina. Este projeto foi criado durante o curso de Análise e Desenvolvimento de Sistemas da Universidade UNISENAI SC como parte das atividades do quarto semestre.',
        link: 'https://github.com/AlexandreLiberatto/SistemaPousada-CSharp/tree/main',
    },
    {
        iconUrl: hotel,
        theme: 'btn-back-yellow',
        name: 'Gerenciamento de Hospedagem',
        description: 'Este é um sistema de gerenciamento de hospedagem desenvolvido com Spring Boot no backend e Angular 19 no frontend. O sistema permite a gestão de reservas, quartos e usuários, oferecendo funcionalidades diferenciadas para administradores e clientes. ',
        link: 'https://github.com/AlexandreLiberatto/GerenciamentoHospedagem',
    },
];