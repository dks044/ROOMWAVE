import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UseFilterState {
  showfilter: boolean
  setShowfilter: (value: boolean) => void
}

const useFilterStore = create<UseFilterState>()(
  persist(
    (set) => ({
      showfilter: false,
      setShowfilter: (value: boolean) => set({ showfilter: value }),
    }),
    {
      name: 'filter-storage',
    },
  ),
)

export default useFilterStore
