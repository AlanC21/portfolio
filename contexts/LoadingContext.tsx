'use client'
import { createContext, useContext, useState } from 'react';
import { Loader } from '@/components/Loader/Loader';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

/**
 * Contexto que maneja el estado de carga de la aplicación.
 * Proporciona el estado de carga a los componentes que lo requieran.
 */

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

/**
 * Proveedor de contexto de carga.
 * @param {ReactNode} children - Componentes hijos envueltos por el proveedor.
 * @returns {JSX.Element} Proveedor de contexto de carga.
 */

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <Loader />}
    </LoadingContext.Provider>
  );
}

/**
 * Hook personalizado para acceder al estado de carga.
 * @returns {object} Estado de carga y función para actualizarlo.
 */

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}