import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: 1, 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.8
      }}
    >
      <div className="relative">
        {/* Tooltip Message */}
        <motion.div
          className={`absolute -top-16 -left-32 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
          }`}
          animate={isHovered ? {
            y: [0, -2, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          Tem interesse? Clique aqui!
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rotate-45" />
        </motion.div>
        
        {/* Multiple Pulse Rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-300"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-200"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Main Button */}
        <motion.a
          href="https://wa.me/5535987079368"
          className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, 0],
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 8px 32px rgba(59, 130, 246, 0.5)",
              "0 8px 32px rgba(37, 99, 235, 0.8)",
              "0 8px 32px rgba(59, 130, 246, 0.5)",
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 0.5,
              ease: "easeInOut"
            }
          }}
        >
          {/* Background Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
            animate={{
              background: [
                "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
                "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
                "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* WhatsApp Logo */}
          <motion.img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="relative z-10 w-10 h-10 filter brightness-0 invert"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            } : {}}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
          />
          
          {/* Inner Glow Effect */}
          <motion.div
            className="absolute inset-2 rounded-full bg-white/20"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;