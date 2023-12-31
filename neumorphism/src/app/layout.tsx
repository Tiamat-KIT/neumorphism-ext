import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */
import localFont from "next/font/local"
import './globals.css'
import Header from './components/ui/NavHeader'
/* const inter = Inter({ subsets: ['latin'] }) */

const myFont = localFont(
  { src: '/../../public/font/RocknRollOne-Regular.ttf',weight: "400"},
)

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mediaQueryLlistener = (e: MediaQueryListEvent) => {
    if (localStorage.theme === 'system') {
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
  if (typeof window !== 'undefined') {
    document.addEventListener("load",() => {
      if(!("theme" in localStorage) || localStorage.theme === "system"){
        if(window.matchMedia('(prefers-color-scheme: dark').matches){
          document.documentElement.classList.add('dark')
        }
        localStorage.setItem("theme","system")
      }else if(localStorage.theme === "dark"){
        localStorage.theme === "dark"
      }else {
        document.documentElement.classList.remove("dark")
      }
      window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change",mediaQueryLlistener)
      // https://zenn.dev/azukiazusa/articles/bee71756d66679 も参考になったけど採用しなかった
    })
  }
  return (
    <html lang="ja">
      <body /* className="bg-[url('/bg/CoolSky.jpg')] bg-red-500 dark:bg-[url('/bg/RoyalBlue.jpg')]" */ 
        className={`bg-pink-400 dark:bg-[url('/bg/RoyalBlue.jpg')] bg-cover ${myFont.className} ${myFont.style.fontWeight}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

// https://azukiazusa.dev/blog/tailwind-css-dark-mode-system-light-dark/ の方を採用