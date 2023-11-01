import { create } from "zustand";

interface StoreModalInterface {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useStoreModal = create<StoreModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));


export default useStoreModal