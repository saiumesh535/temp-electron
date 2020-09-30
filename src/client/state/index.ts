import create from 'zustand';

interface Command {
    title: string;
    command: string;
}

interface Collection {
    id: number;
    title: string;
    commands: Command[];
}


export type State = {
    collections: Collection[];
    currentCollectionId: number;
}

export const useStore = create<State>((set) => ({
    collections: [{
        id: -1,
        title: 'Add',
        commands: [],
    }],
    currentCollectionId: null as any,
    addCollection: (collection: Collection) => set((state) => ({ ...state, collections: [...state.collections, collection] })),
    updateCurrentCollection: (id: number) => set((state) => ({ ...state, currentCollectionId: id }))
}))