import React from 'react';
import { Building, Factory, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Overview = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Área Total',
      description: 'Às margens da BR 383 com amplo estacionamento',
      color: 'text-red-500'
    },
    {
      icon: Factory,
      title: 'Área Industrial',
      description: '4.000 m² de galpões com pé-direito de 7 a 12 m',
      color: 'text-blue-500'
    },
    {
      icon: Building,
      title: 'Área Administrativa',
      description: '820 m² em construção de alvenaria',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="overview" className="py-16">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resumo do Empreendimento
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-blue-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className={`inline-flex p-3 rounded-full bg-gray-50 ${feature.color} mb-6`}>
              <feature.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Overview;