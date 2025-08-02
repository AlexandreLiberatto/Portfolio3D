import React, { useState } from "react";

import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
} from "../assets/certificados";

const CertificatesModal = ({ isOpen, onClose }) => {
  const certificates = [ //Aqui para modificar a ordem que aparece no carrocel
    c23,
    c21,
    c22,
    c19,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c20,
  ];

  const [expandedImage, setExpandedImage] = useState(null); // Estado para imagem expandida

  if (!isOpen) return null; // Não renderiza o modal se ele não estiver aberto

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Modal Principal */}
      <div className="bg-white rounded-lg shadow-lg w-4/5 max-w-4xl md:w-4/5 md:max-w-5xl p-6 relative">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Certificados
        </h2>

        {/* Carrossel */}
        <div className="relative">
          <div className="flex overflow-x-scroll space-x-4 snap-x snap-mandatory">
            {certificates.map((src, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-64 h-64 flex items-center justify-center border rounded-lg shadow-md bg-gray-100 overflow-hidden cursor-pointer"
                onClick={() => setExpandedImage(src)} // Expande a imagem ao clicar
              >
                <img
                  src={src}
                  alt={`Certificado ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">
            Clique em uma imagem para ampliá-la
          </p>
        </div>
      </div>

      {/* Imagem Expandida */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setExpandedImage(null)} // Fecha ao clicar no fundo
        >
          <img
            src={expandedImage}
            alt="Imagem expandida"
            className="max-w-full max-h-full object-contain rounded-md shadow-lg"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setExpandedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificatesModal;
