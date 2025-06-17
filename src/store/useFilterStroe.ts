import { DetailFilterType, FilterProps } from '@/types/filter'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

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
    immer((set) => ({
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
      setIsJustOneDay: (isJustOneDay) => {
        set((state) => {
          state.isJustOneDay = isJustOneDay
        })
      },
      setDetailFilter: (detailFilter) => {
        set((state) => {
          state.detailFilter = detailFilter
        })
      },
      setFilterValue: (newValue) => {
        set((state) => {
          state.filterValue = newValue
        })
      },
    })),
    {
      name: 'FilterStorage',
    },
  ),
)

export default useFilterStore
