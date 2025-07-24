import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import CertificatesModal from './CertificatesModal';
import useAlert from "../hooks/useAlert"; // Importe o hook useAlert
import Alert from "./Alert"; // Importe o componente Alert

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
  const { alert, showAlert, hideAlert } = useAlert(); // Use o hook useAlert

  // Função para o download do currículo
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/CurriculoAlexandre.pdf"; // Caminho para o seu PDF
    link.download = "CurriculoAlexandre.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false); // Fecha o menu após o clique

    // Mostra o alerta de sucesso
    showAlert({
      text: "Currículo baixado com sucesso! 😃",
      type: "success",
    });

    // Oculta o alerta após 3 segundos
    setTimeout(() => {
      hideAlert();
    }, 3000);
  };

  // Função para fechar o menu ao clicar em um link
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="header flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="hover-logo" onClick={handleMenuClose}>
          <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
        </NavLink>

        {/* Botão do menu hambúrguer */}
        <button
          className="hamburger-menu md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`line ${menuOpen ? "rotate-45" : ""}`}></div>
          <div className={`line ${menuOpen ? "opacity-0" : ""}`}></div>
          <div className={`line ${menuOpen ? "-rotate-45" : ""}`}></div>
        </button>

        {/* Menu de navegação */}
        <nav
          className={`nav-links absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 p-5 md:p-0 md:static md:flex-row md:bg-transparent md:w-auto md:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 hover-link" : "text-black hover-link"
            }
            onClick={handleMenuClose}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-600 hover-link" : "text-black hover-link"
            }
            onClick={handleMenuClose}
          >
            Projetos
          </NavLink>
          {/* Link para abrir o modal */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              handleMenuClose();
            }}
            className="text-black hover-link"
          >
            Certificados
          </button>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 hover-link" : "text-black hover-link"
            }
            onClick={handleMenuClose}
          >
            Contato
          </NavLink>
          <button onClick={handleDownload} className="text-black hover-link">
            Baixar CV
          </button>
        </nav>
      </header>

      {/* Modal de Certificados */}
      <CertificatesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Renderização do Alerta */}
      {alert.show && <Alert {...alert} hideAlert={hideAlert} />}
    </>
  );
};

export default Navbar;