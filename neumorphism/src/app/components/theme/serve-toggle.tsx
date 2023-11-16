export default function LDToggleButton(): JSX.Element{
    const themetoggle = () => {
        if (document.documentElement.classList.contains('dark')) {
            // darkクラスが含まれているならライトモードに変更
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        } else {
            // darkクラスが含まれていないならダークモードに変更
          document.documentElement.classList.add('dark')
          localStorage.theme = 'dark'
        }  
    }

    return <button onClick={themetoggle}>切り替え</button>
}