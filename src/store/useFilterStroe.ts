import { DetailFilterType, FilterProps } from '@/types/filter'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FilterStoreInterface {
  detailFilter: DetailFilterType | null
  filterValue: FilterProps
  isJustOneDay: boolean
  setIsJustOneDay: (isJustOneDay: boolean) => void
  setDetailFilter: (detailFilter: DetailFilterType | null) => void
  setFilterValue: (filterValue: FilterProps) => void
}

const useFilterStore = create<FilterStoreInterface>()(
  persist(
    (set) => ({
      detailFilter: 'location',
      filterValue: {
        location: '',
        checkIn: '',
        checkOut: '',
        hourlyPrice: 0,
        guest: 0,
        category: '',
      },
      isJustOneDay: false,
      setIsJustOneDay: (isJustOneDay: boolean) => {
        set({ isJustOneDay })
      },
      setDetailFilter: (detailFilter: DetailFilterType | null) => {
        set({ detailFilter })
      },
      setFilterValue: (filterValue: FilterProps) => {
        set({ filterValue })
      },
    }),
    {
      name: 'FilterStorage',
    },
  ),
)

export default useFilterStore
