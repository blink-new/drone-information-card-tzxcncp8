import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Plane,
  Wifi,
  PlayCircle,
  PauseCircle,
  Eye,
  Edit3
} from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
  value?: string;
  icon: React.ReactNode;
}

interface DroneListItemProps {
  drone: {
    name: string;
    ipAddress: string;
    flyStatus: 'flying' | 'landed' | 'maintenance' | 'offline';
    sensors: Sensor[];
  };
}

const getStatusColor = (status: string, type: 'fly' | 'sensor') => {
  const baseClasses = type === 'fly' ? 'px-2.5 py-1 text-xs' : 'px-2 py-0.5 text-[10px]';
  switch (status) {
    case 'flying':
    case 'active': 
      return `${baseClasses} bg-emerald-500/20 text-emerald-300 border border-emerald-500/40`;
    case 'landed': 
      return `${baseClasses} bg-blue-500/20 text-blue-300 border border-blue-500/40`;
    case 'maintenance': 
      return `${baseClasses} bg-amber-500/20 text-amber-300 border border-amber-500/40`;
    case 'offline':
    case 'error':
      return `${baseClasses} bg-red-500/20 text-red-300 border border-red-500/40`;
    default: 
      return `${baseClasses} bg-slate-600/30 text-slate-400 border border-slate-500/40`;
  }
};

const SensorIconDisplay: React.FC<{ sensors: Sensor[] }> = ({ sensors }) => {
  const MAX_DISPLAY_SENSORS = 5;
  const displayedSensors = sensors.slice(0, MAX_DISPLAY_SENSORS);

  return (
    <div className="flex items-center space-x-1.5">
      {displayedSensors.map(sensor => (
        <div 
          key={sensor.id} 
          className={`p-1.5 rounded-md border ${getStatusColor(sensor.status, 'sensor').split(' ').find(cls => cls.startsWith('border-'))?.replace('border-', 'border-') || 'border-slate-600'} bg-slate-700/30`}
          title={`${sensor.name} (${sensor.status})`}
        >
          {React.cloneElement(sensor.icon as React.ReactElement, { className: 'w-3.5 h-3.5 text-slate-300' })}
        </div>
      ))}
      {sensors.length > MAX_DISPLAY_SENSORS && (
        <div className="text-xs text-slate-400 ml-1">+{sensors.length - MAX_DISPLAY_SENSORS} more</div>
      )}
    </div>
  );
};

const DroneListItem: React.FC<DroneListItemProps> = ({ drone }) => {
  return (
    <Card className="bg-slate-800/70 border-slate-700/60 shadow-lg hover:bg-slate-800/90 hover:border-cyan-500/30 transition-all duration-200 ease-out mb-3">
      <CardContent className="p-3 flex items-center justify-between space-x-3">
        <div className="flex items-center space-x-3 flex-grow min-w-0">
          <div className="p-2 bg-cyan-500/10 rounded-md border border-cyan-500/20">
            <Plane className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-md font-semibold text-white truncate" title={drone.name}>{drone.name}</h3>
            <div className="flex items-center space-x-2 mt-0.5">
              <Wifi className="w-3.5 h-3.5 text-cyan-400/70" />
              <span className="text-xs text-cyan-300/80 font-mono truncate" title={drone.ipAddress}>{drone.ipAddress}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-3 flex-shrink-0 mx-4">
          <SensorIconDisplay sensors={drone.sensors} />
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <Badge className={`${getStatusColor(drone.flyStatus, 'fly')} flex items-center space-x-1.5`}>
            {drone.flyStatus === 'flying' ? 
              <PlayCircle className="w-3 h-3" /> : 
              <PauseCircle className="w-3 h-3" />
            }
            <span className="capitalize">{drone.flyStatus}</span>
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            className="h-8 px-2.5 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all duration-150"
          >
            <Eye className="w-3.5 h-3.5" />
          </Button>
          <Button 
            size="sm"
            className="h-8 px-2.5 bg-cyan-600/80 hover:bg-cyan-500 text-white shadow-md hover:shadow-cyan-500/20 transition-all duration-150"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DroneListItem;