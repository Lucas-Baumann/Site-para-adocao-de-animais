import React from 'react';
import { QrCode, Heart } from 'lucide-react';

function Donate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-6">Faça uma Doação</h1>
        <p className="text-gray-600 mb-12">
          Sua contribuição nos ajuda a cuidar melhor dos nossos amigos de quatro patas.
          Doe via PIX usando o QR Code abaixo.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col items-center">
            <QrCode className="w-48 h-48 text-gray-800 mb-6" />
            <p className="text-sm text-gray-600 mb-2">
              Escaneie o QR Code acima com seu aplicativo bancário
            </p>
            <p className="font-medium">ou</p>
            <p className="mt-2 text-lg font-semibold">
              Chave PIX: contato@amigospeludos.com
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Como sua doação ajuda?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Alimentação</h3>
              <p className="text-gray-600">
                Fornece ração de qualidade para nossos animais
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Cuidados Médicos</h3>
              <p className="text-gray-600">
                Garante tratamentos veterinários e vacinas
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Infraestrutura</h3>
              <p className="text-gray-600">
                Mantém nosso espaço limpo e confortável
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;