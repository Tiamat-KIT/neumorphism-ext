"use client"

import React, { useState } from "react"

export type Theme =  "system" | "light" | "dark"

export default function ThemeSelect(): JSX.Element{
    const [theme,setTheme] = useState<Theme>(localStorage.theme)
    const themetoggle = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as Theme
        setTheme(value)
        localStorage.setItem("theme",value)
        if (value === 'dark') {
            document.documentElement.classList.add('dark')
        } else if (value === 'light') {
        document.documentElement.classList.remove('dark')
        } else {
        // System が選択された場合は OS の設定を見て切り替える
        document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    }
        /* // https://zenn.dev/azukiazusa/articles/bee71756d66679
        if (document.documentElement.classList.contains('dark')) {
            // darkクラスが含まれているならライトモードに変更
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        } else {
            // darkクラスが含まれていないならダークモードに変更
          document.documentElement.classList.add('dark')
          localStorage.theme = 'dark'
        }   */
    

    return (
        <select value={theme} onChange={themetoggle}>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}