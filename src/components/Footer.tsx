import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-lg font-semibold">Amigos Peludos</span>
          </div>
          <p className="text-gray-400 text-sm text-center">
            Dedicados a encontrar lares amorosos para nossos amigos de quatro patas
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            © {new Date().getFullYear()} Amigos Peludos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;