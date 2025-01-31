import React from 'react'

const useNavigation = () => {
  const menus = [
    { id: 1, title: '로그인', url: '/users/login' },
    { id: 2, title: '회원가입', url: '/users/signup' },
    { id: 3, title: 'FAQ', url: '/faqs' },
  ]
  return { menus }
}

export default useNavigation
