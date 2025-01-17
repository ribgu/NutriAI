import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SectionContextType {
  id: string;
  name: string;
  [key: string]: any;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<SectionContextType>({ id: '', name: '' });

  return (
    <SectionContext.Provider value={section}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
