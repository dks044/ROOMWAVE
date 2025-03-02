import { useState } from 'react'

/**
 * @info Navbar에서 사용하는 상태값들
 * @info showMenu : (소메뉴) 로그인 | 회원가입 ...
 * @returns showMenu, setShowMenu
 *
 */
const useNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return {
    showMenu,
    setShowMenu,
  }
}

export default useNav
