import useFilterStore from '@/store/useFilterStroe'
import React, { useEffect } from 'react'

const IsJustOneDayCheckBox = () => {
  const { isJustOneDay, setIsJustOneDay, setFilterValue, filterValue } =
    useFilterStore()
  useEffect(() => {
    if (isJustOneDay && filterValue.checkOut !== '') {
      setFilterValue({ ...filterValue, checkOut: '' })
    }
  }, [filterValue, isJustOneDay, setFilterValue])
  return (
    <input
      type="checkbox"
      className="my-auto"
      checked={isJustOneDay}
      onChange={() => setIsJustOneDay(!isJustOneDay)}
    />
  )
}

export default IsJustOneDayCheckBox
