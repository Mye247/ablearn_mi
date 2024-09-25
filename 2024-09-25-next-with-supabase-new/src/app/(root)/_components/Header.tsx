import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <Link href={"/"}>홈</Link> | 
      <Link href={"/log-in"}>로그인</Link> | 
      <Link href={"/sign-up"}>회원가입</Link> 
    </header>
  )
}

export default Header