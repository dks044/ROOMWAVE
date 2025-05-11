import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * @typedef UseFilterState
 * @property {boolean} showfilter - 필터 UI가 열려 있는지 여부를 나타내는 상태
 * @property {(value: boolean) => void} setShowfilter - 필터 UI의 표시 여부를 제어하는 함수
 */
interface UseFilterState {
  showfilter: boolean
  setShowfilter: (value: boolean) => void
}

/**
 * @store useFilterModeStore
 * @description
 * - 필터 UI(헤더 검색 박스)의 열린 상태를 관리하는 전역 상태 저장소
 *
 * @example
 * const { showfilter, setShowfilter } = useFilterModeStore()
 * setShowfilter(true) // 필터 UI 열기
 *
 */
const useFilterModeStore = create<UseFilterState>()(
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

export default useFilterModeStore
