import { FeedList } from "./components/FeedList"


function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-xl mx-auto p-4">
          <h1 className="text-xl font-bold">Feed Reader</h1>
        </div>
      </header>

      <main className="max-w-xl mx-auto p-4">
        <FeedList />
      </main>
    </div>

  )
}

export default App
