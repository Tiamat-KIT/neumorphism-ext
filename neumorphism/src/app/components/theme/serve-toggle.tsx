"use client"

import React, { useLayoutEffect, useState } from "react"

export type Theme =  "system" | "light" | "dark"

export default function ThemeSelect(): JSX.Element{
    const [theme,setTheme] = useState<Theme>("light")
    
    const themetoggle = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(typeof window !== "undefined"){
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
    }

    return (
        <select value={theme} onChange={themetoggle}>
            <option className="select-text" value="system">System</option>
            <option className="select-text" defaultChecked value="light">Light</option>
            <option className="select-text" value="dark">Dark</option>
        </select>
    )
}