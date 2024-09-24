import Page from '@/components/Page'
import React, { PropsWithChildren } from 'react'

function AuthLayout({children}: PropsWithChildren) {
  return (
    <>
    <div className='text-4xl text-center mt-5'>
      경고
    <br />
    주의하세요 당신의 비밀번호를 마음대로 저장하는 사이트입니다
    </div>
    {children}
    </>
  )
}

export default AuthLayout