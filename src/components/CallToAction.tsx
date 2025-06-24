import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="contact" className="py-16">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-xl p-8 sm:p-12 text-white text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pronto para ocupar este espaço?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Entre em contato conosco e descubra como este complexo industrial pode impulsionar seu negócio
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="tel:+5535999999999"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="h-5 w-5 mr-2" />
            Fale com nosso time
          </motion.a>
          
          <motion.a
            href="mailto:contato@exemplo.com"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="h-5 w-5 mr-2" />
            Solicitar proposta
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;