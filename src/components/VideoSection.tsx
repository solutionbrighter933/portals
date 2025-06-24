import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoSection = () => {
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
          Visão Geral do Espaço
        </motion.h2>
        
        <motion.div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/WKaVD77tQXM?si=loTqYR3Xw0kg5FSy"
              title="Tour Virtual do Complexo Industrial"
              className="w-full h-96 rounded-2xl"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;