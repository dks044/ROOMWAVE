import { DetailFilterType, FilterProps } from '@/types/filter'
import { useState } from 'react'

/**
 * @info Navbar에서 사용하는 상태값들
 * @returns showMenu, setShowMenu, detailFilter, setDetailFilter, filterValue, setFilterValue
 *
 */
const useNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [detailFilter, setDetailFilter] = useState<null | DetailFilterType>(
    null,
  )
  const [filterValue, setFilterValue] = useState<FilterProps>({
    location: '',
    checkIn: '',
    checkOut: '',
    hourlyPrice: 0,
    guest: 0,
  })

  return {
    showMenu,
    setShowMenu,
    detailFilter,
    setDetailFilter,
    filterValue,
    setFilterValue,
  }
}

export default useNav
