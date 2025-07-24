import { useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Se a mensagem não for visível, não renderiza nada...

  if (currentStage === 1)
    return (
      <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        <button
          onClick={handleClose}
          className='absolute top-0 right-0 p-2 text-white font-bold'
        >
          x
        </button>
        Olá, meu nome é
        <span className='font-semibold mx-2 text-white'>Alexandre</span>
        👋
        <br />
        Transformo café em código e ideias em soluções!
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <button
          onClick={handleClose}
          className='absolute top-0 right-0 p-2 text-white font-bold'
        >
          ×
        </button>
        <p className='font-medium sm:text-xl text-center'>
          Sou um desenvolvedor de software apaixonado, <br /> com muita curiosidade e dedicação aos estudos.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Saiba mais
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <button
          onClick={handleClose}
          className='absolute top-0 right-0 p-2 text-white font-bold'
        >
          ×
        </button>
        <p className='font-medium text-center sm:text-xl'>
          Venho cada vez mais aprimorando meus conhecimentos <br /> ficou curioso?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Veja meus projetos
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <button
          onClick={handleClose}
          className='absolute top-0 right-0 p-2 text-white font-bold'
        >
          ×
        </button>
        <p className='font-medium sm:text-xl text-center'>
          Precisa fazer um projeto ou está procurando um desenvolvedor? <br /> Estou a apenas alguns cliques de distância
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Vamos conversar
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
