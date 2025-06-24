import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-16">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Localização Privilegiada
        </motion.h2>
        
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1747360938608!6m8!1m7!1sLJqCfte31L1wFHGiru67Eg!2m2!1d-22.45533964065233!2d-45.48647848775425!3f172.51013!4f0!5f0.7820865974627469"
              className="w-full h-96 rounded-2xl"
              allowFullScreen
              loading="lazy"
              title="Localização do Complexo Industrial"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg">
            Localizado estrategicamente às margens da MG-383, com fácil acesso às principais rodovias da região
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;