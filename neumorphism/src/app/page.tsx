import Image from 'next/image'
import ThemeSelect from './components/theme/serve-toggle'

export default function Home() {
  return (
    <>
      <ThemeSelect />
      <button>テスト</button>
    </>
  )
}
