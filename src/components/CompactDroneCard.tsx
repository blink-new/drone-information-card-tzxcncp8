import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Plane, 
  Wifi, 
  Eye, 
  Edit3,
  Cpu,
  PlayCircle,
  PauseCircle
} from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
  value?: string;
}

interface CompactDroneCardProps {
  drone: {
    id: string;
    name: string;
    ipAddress: string;
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

  const activeSensorCount = drone.sensors.filter(s => s.status === 'active').length;

  return (
    <Card 
      className="
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
        border-slate-700/50 shadow-lg backdrop-blur-sm
        hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30
        transition-all duration-200 ease-out
        flex items-center justify-between p-4 space-x-4
      "
    >
      <CardContent className="flex items-center space-x-4 p-0">
        <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30 flex-shrink-0">
          <Plane className="w-5 h-5 text-cyan-400" />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-semibold text-white truncate">{drone.name}</h3>
            <Badge 
              className={`
                px-2 py-0.5 font-medium border text-xs flex items-center space-x-1
                ${getStatusColor(drone.flyStatus)}
              `}
            >
               {drone.flyStatus === 'flying' ? 
                  <PlayCircle className="w-3 h-3" /> : 
                  <PauseCircle className="w-3 h-3" />
                }
              <span className="capitalize">{drone.flyStatus}</span>
            </Badge>
          </div>
          <div className="flex items-center space-x-3 text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <Wifi className="w-3 h-3 text-cyan-400" />
              <span className="font-mono">{drone.ipAddress}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span>{activeSensorCount} Active Sensors</span>
            </div>
          </div>
        </div>
      </CardContent>

      <div className="flex space-x-2 flex-shrink-0">
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
          <Eye className="w-4 h-4" />
        </Button>
        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25">
          <Edit3 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default CompactDroneCard;