import React from 'react';
import { Car, Shield, Building2, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { icon: Car, text: 'Estacionamento para clientes' },
    { icon: Shield, text: 'Portaria' },
    { icon: Building2, text: 'Prédio administrativo' },
    { icon: Coffee, text: 'Refeitório e cozinha' }
  ];

  return (
    <section id="features" className="py-16">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Estrutura & Facilidades
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              className="flex items-center space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;