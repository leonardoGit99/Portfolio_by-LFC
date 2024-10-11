import { create } from 'zustand';

export const useStore = create((set) => {
  // Cargar el estado desde Local Storage al inicializar
  const storedMode = localStorage.getItem('darkMode') === 'true';
  
  return {
    isDarkMode: storedMode,
    toggleDarkMode: () => {
      set((state) => {
        const newDarkMode = !state.isDarkMode;
        localStorage.setItem('darkMode', newDarkMode); // Guardar en Local Storage
        return { isDarkMode: newDarkMode };
      });
    },
  };
});
