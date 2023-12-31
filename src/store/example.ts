import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ExampleState {
  exampleIds: number[]; // <-- aqui va objeto example de estado global
  addExample: (id: number) => void; // <-- ejemplo de insercion de datos en estado global
  removeExample: (id: number) => void; // <-- ejemplo de mutacion de datos en estado global
}

/**
 * Consumo de store funciona llamando al hook useExampleStore
 */

export const useExampleStore = create(
  persist<ExampleState>(
    set => ({
      exampleIds: [],
      addExample: (id: number) => {
        set(state => ({
          exampleIds: [...state.exampleIds, id],
        }));
      },
      removeExample: (id: number) => {
        set(state => ({
          exampleIds: state.exampleIds.filter(exampleId => exampleId !== id),
        }));
      },
    }),
    {
      name: 'example-state',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
