import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  PlayCircle, 
  PauseCircle, 
  Cpu,
} from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
  value?: string;
  icon: React.ReactNode;
}

interface CompactDroneCardProps {
  drone: {
    name: string;
    flyStatus: 'flying' | 'landed' | 'maintenance' | 'offline';
    sensors: Sensor[];
  };
}

const CompactDroneCard: React.FC<CompactDroneCardProps> = ({ drone }) => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'flying': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'landed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'maintenance': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'offline': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card 
      className="
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
        border-slate-700/50 shadow-lg backdrop-blur-sm w-full
      "
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Plane className="w-5 h-5 text-cyan-400" />
          <CardTitle className="text-lg font-bold text-white">{drone.name}</CardTitle>
        </div>
        <Badge 
          className={`
            px-2 py-0.5 text-xs font-medium border
            ${getStatusColor(drone.flyStatus)}
          `}
        >
          <div className="flex items-center space-x-1">
            {drone.flyStatus === 'flying' ? 
              <PlayCircle className="w-3 h-3" /> : 
              <PauseCircle className="w-3 h-3" />
            }
            <span className="capitalize">{drone.flyStatus}</span>
          </div>
        </Badge>
      </CardHeader>
      <CardContent className="pt-4">
        <h4 className="text-sm font-medium text-slate-400 mb-2 flex items-center space-x-1">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>Sensors</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {drone.sensors.map((sensor) => (
            <div key={sensor.id} className="flex items-center space-x-1 text-slate-300 text-xs">
              <div className="text-slate-400 w-4 h-4">
                 {sensor.icon}
              </div>
              <span>{sensor.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompactDroneCard;