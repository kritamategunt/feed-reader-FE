import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FeedList } from './components/FeedList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-xl mx-auto p-4">
      <FeedList />
    </div>
  )
}

export default App
