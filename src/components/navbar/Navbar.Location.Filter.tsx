import { DetailFilterType, FilterProps } from '@/types/filter'
import React from 'react'
import cn from 'classnames'

interface FilterComponentProps {
  filterValue: FilterProps
  setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
  setDetailFilter: React.Dispatch<React.SetStateAction<DetailFilterType | null>>
}
const NavbarLocationFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  return (
    <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl left-0">
      <div className="text-sm font-semibold">지역으로 검색하기</div>
      <div className="flex flex-wrap gap-4 mt-4">
        {['서울', '부산', '대구', '인천', '울산', '광주', '대전']?.map(
          (value) => (
            <button
              key={value}
              type="button"
              className={cn(
                'border rounded-lg px-5 py-2.5 hover:bg-gray-200 focus:bg-subBrand transition',
                {
                  'bg-brand text-white': filterValue.location === value,
                },
              )}
              onClick={() => {
                setFilterValue({
                  ...filterValue,
                  location: value,
                })
                setDetailFilter('checkIn')
              }}
            >
              {value}
            </button>
          ),
        )}
      </div>
    </div>
  )
}

export default NavbarLocationFilter
