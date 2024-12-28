'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Send, X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.module.scss';

/**
 * Interface para los datos del formulario de contacto.
 * @interface
 */

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

/**
 * Componente de la sección "Contacto".
 * Permite enviar mensajes de contacto.
 * @returns {JSX.Element} Formulario de contacto.
 */

const CustomAlert: React.FC<AlertProps> = ({ type, message, onClose }) => (
  <motion.div
    className={`p-4 rounded-lg flex items-center gap-3 ${type === 'error' ? 'bg-red-50 text-red-500 border border-red-200' : 'bg-green-50 text-green-500 border border-green-200'
      }`}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {type === 'error' ? (
      <AlertCircle className="h-5 w-5 flex-shrink-0" />
    ) : (
      <CheckCircle className="h-5 w-5 flex-shrink-0" />
    )}
    <span className="flex-grow text-sm">{message}</span>
    <button
      onClick={onClose}
      className="p-1 hover:bg-white rounded-full transition-colors"
      type="button"
    >
      <X className="h-4 w-4" />
    </button>
  </motion.div>
);

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: '' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, completa todos los campos'
      });
      setIsSubmitting(false);
      return;
    }

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus({
      type: 'success',
      message: '¡Mensaje enviado correctamente!'
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const clearStatus = (): void => {
    setStatus({ type: '', message: '' });
  };

  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center relative w-full max-w-md mx-auto p-6"
    >
      <div className="w-full">
        <motion.h2
          className="text-3xl font-bold mb-12 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-500 after:rounded-full after:transform after:translate-y-2"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contáctame
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-4 border-[#0000001a] backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-800"
              placeholder="Tu nombre"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-4 border-[#0000001a] backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-800"
              placeholder="tu@email.com"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border-4 border-[#0000001a] backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-800"
              placeholder="Escribe tu mensaje aquí..."
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="h-5 w-5" />
              </motion.div>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Enviar mensaje
              </>
            )}
          </motion.button>
        </form>

        <AnimatePresence mode="wait">
          {status.message && (
            <div className="mt-4">
              <CustomAlert
                type={status.type as 'success' | 'error'}
                message={status.message}
                onClose={clearStatus}
              />
            </div>
          )}
        </AnimatePresence>

        <motion.p
          className="mt-6 text-gray-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          También puedes contactarme en{' '}
          <a
            href="mailto:alancordoba010@gmail.com"
            className="text-blue-500 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-right hover:after:origin-left"
          >
            alancordoba010@gmail.com
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ContactForm;