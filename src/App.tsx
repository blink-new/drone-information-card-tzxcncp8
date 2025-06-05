import { DroneCardCompact, demoSensors } from './components/DroneCardCompact';

const drones = [
  {
    name: 'Sky Hawk MK-7',
    notes: 'Primary surveillance drone for sector 12.',
    assignment: 'Border Patrol - Eastern Quadrant',
    ipAddress: '192.168.1.247',
    flyStatus: 'flying',
    sensors: demoSensors,
  },
  {
    name: 'Falcon X2',
    notes: 'Thermal imaging and mapping.',
    assignment: 'Fire Watch - North Ridge',
    ipAddress: '192.168.1.102',
    flyStatus: 'landed',
    sensors: demoSensors.slice(0, 7),
  },
  {
    name: 'Raven Scout',
    notes: 'Night ops, low noise.',
    assignment: 'Recon - Urban Zone',
    ipAddress: '10.0.0.55',
    flyStatus: 'maintenance',
    sensors: demoSensors.slice(0, 5),
  },
  {
    name: 'Eagle Eye',
    notes: 'Long range, high altitude.',
    assignment: 'Survey - Mountain Pass',
    ipAddress: '10.0.0.88',
    flyStatus: 'offline',
    sensors: demoSensors.slice(0, 8),
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Drone Fleet Overview</h1>
          <p className="text-slate-400">Quickly scan and manage your drones</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {drones.map((drone, i) => (
            <DroneCardCompact key={drone.name + i} drone={drone} onView={() => alert('View ' + drone.name)} onEdit={() => alert('Edit ' + drone.name)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
