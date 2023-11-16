"use client"
import Image from 'next/image'
import ThemeSelect from './components/theme/serve-toggle'
import dynamic from 'next/dynamic'
import { useLayoutEffect } from 'react'

export default function Home() {

  /* useLayoutEffect(() => {
    //setTheme(localStorage.theme)
    // document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches)
    //https://github.com/vercel/next.js/discussions/49131
 },[]) */
  return (
    <>
      <div className='container mx-auto p-5 glass-body'>
        <ThemeSelect />
        <div  className='pt-10'/>
        <button>テスト</button>
      </div>
    </>
  )
}
