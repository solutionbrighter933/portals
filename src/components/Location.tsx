import React from 'react';
import { MapPin, Route, Building, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
  const locationFeatures = [
    { icon: Route, text: 'Acesso direto pela rodovia' },
    { icon: Building, text: 'Próximo ao distrito industrial de Itajubá' },
    { icon: Building, text: 'Vizinhança de grandes empresas como GE e Helibras' },
    { icon: Clock, text: '60 km da Rod. Fernão Dias' },
    { icon: Clock, text: '100 km da Rod. Dutra' },
    { icon: MapPin, text: '260 km de São Paulo/SP' }
  ];

  return (
    <section id="location" className="py-16">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl p-8 sm:p-12 text-white">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Localização Estratégica
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              className="flex items-start space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 mt-1">
                <feature.icon className="h-5 w-5 text-blue-200" />
              </div>
              <span className="text-blue-50 leading-relaxed">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;