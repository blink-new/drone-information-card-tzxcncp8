import { DroneCardCompact, demoSensors } from './components/DroneCardCompact';

const drones = [
  {
    name: 'Sky Hawk MK-7',
    notes: 'Primary surveillance drone for sector 12. Advanced thermal imaging capabilities.',
    assignment: 'Border Patrol - Eastern Quadrant',
    ipAddress: '192.168.1.247',
    flyStatus: 'flying' as const,
    sensors: demoSensors,
  },
  {
    name: 'Falcon X2',
    notes: 'Specialized for thermal imaging and terrain mapping operations.',
    assignment: 'Fire Watch - North Ridge',
    ipAddress: '192.168.1.102',
    flyStatus: 'landed' as const,
    sensors: demoSensors.slice(0, 7),
  },
  {
    name: 'Raven Scout',
    notes: 'Stealth operations drone optimized for low noise reconnaissance.',
    assignment: 'Recon - Urban Zone',
    ipAddress: '10.0.0.55',
    flyStatus: 'maintenance' as const,
    sensors: demoSensors.slice(0, 5),
  },
  {
    name: 'Eagle Eye',
    notes: 'Long range surveillance with high altitude operational capability.',
    assignment: 'Survey - Mountain Pass',
    ipAddress: '10.0.0.88',
    flyStatus: 'offline' as const,
    sensors: demoSensors.slice(0, 8),
  },
  {
    name: 'Phoenix Alpha',
    notes: 'Next-gen prototype with AI-assisted autonomous flight systems.',
    assignment: 'Research & Development',
    ipAddress: '172.16.0.45',
    flyStatus: 'flying' as const,
    sensors: demoSensors.slice(0, 9),
  },
  {
    name: 'Viper Strike',
    notes: 'Tactical response drone for emergency deployment scenarios.',
    assignment: 'Rapid Response Team',
    ipAddress: '10.1.1.99',
    flyStatus: 'landed' as const,
    sensors: demoSensors.slice(0, 6),
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Drone Fleet Management
              </h1>
              <p className="text-gray-600">
                Monitor and control your drone operations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-500">Total Fleet</div>
                <div className="text-2xl font-bold text-gray-900">{drones.length}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-500">Active</div>
                <div className="text-2xl font-bold text-emerald-600">
                  {drones.filter(d => d.flyStatus === 'flying').length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {drones.map((drone, i) => (
            <DroneCardCompact 
              key={drone.name + i} 
              drone={drone} 
              onView={() => console.log('View', drone.name)} 
              onEdit={() => console.log('Edit', drone.name)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;