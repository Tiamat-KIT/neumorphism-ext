"use client"
import ThemeSelect from "../theme/serve-toggle";

export default function Header(){
    return ( 
        <header className="no-border-glass-body mt-5 p-3">
            <h1>Dream Board</h1>
            <ThemeSelect />
        </header>
  )
}