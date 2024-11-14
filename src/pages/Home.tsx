import React from 'react';
import { Heart, Users, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920"
            alt="Pets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Encontre seu novo melhor amigo
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Dê um lar para quem precisa de amor
            </p>
            <Link
              to="/pets"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200"
            >
              Adote Agora
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Por que adotar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Amor Incondicional</h3>
              <p className="text-gray-600">
                Receba amor puro e verdadeiro de um amigo para toda a vida
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Faça a Diferença</h3>
              <p className="text-gray-600">
                Transforme a vida de um animal e faça parte de uma causa nobre
              </p>
            </div>
            <div className="text-center">
              <HomeIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete sua Família</h3>
              <p className="text-gray-600">
                Adicione alegria e companheirismo ao seu lar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;