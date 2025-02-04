import React from 'react'
import { DetailFilterType, FilterProps } from './Navbar'

interface FilterComponentProps {
  filterValue: FilterProps
  setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
  setDetailFilter: React.Dispatch<React.SetStateAction<DetailFilterType | null>>
}
const NavbarFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  return (
    <>
      <div className=""></div>
    </>
  )
}

export default NavbarFilter
