import DroneList from './components/DroneList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Drone Command Center</h1>
          <p className="text-slate-400">Real-time monitoring and control interface</p>
        </div>
        <DroneList />
      </div>
    </div>
  )
}

export default App 