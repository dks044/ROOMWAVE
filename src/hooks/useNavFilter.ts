import useFilterStore from '@/store/useFilterStroe'
import { useEffect, useState } from 'react'

/**
 *  @info Navber.Filter 에서 사용하는 커스텀훅(상태 할당 등), 체크인 여부
 *  @return isCheckIn (체크인여부)
 *  @return counter, setCounter (게스트 수 할당당)
 */
const useNavFilter = () => {
  const detailFilter = useFilterStore((state) => state.detailFilter)
  const [isCheckIn, setIsCheckIn] = useState<boolean>(false) //체크인 여부

  /**@info 체크인인지, 아닌지 */
  useEffect(() => {
    if (detailFilter === 'checkIn') setIsCheckIn(true)
    else setIsCheckIn(false)
  }, [detailFilter])

  return { isCheckIn }
}

export default useNavFilter
