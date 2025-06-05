import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Plane, 
  Wifi, 
  PlayCircle, 
  PauseCircle, 
  Eye, 
  Edit3, 
  Cpu, 
  Thermometer, 
  Camera, 
  Navigation,
  Battery,
  Gauge,
  Signal,
  Shield,
  Zap
} from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
  value?: string;
  icon: React.ReactNode;
}

interface DroneCardProps {
  drone?: {
    name: string;
    notes: string;
    assignment: string;
    ipAddress: string;
    flyStatus: 'flying' | 'landed' | 'maintenance' | 'offline';
    sensors: Sensor[];
  };
}

const DroneCard: React.FC<DroneCardProps> = ({ drone }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default drone data for demo
  const defaultDrone = {
    name: "Sky Hawk MK-7",
    notes: "Primary surveillance drone for sector 12. Last maintenance completed on 2024-01-15.",
    assignment: "Border Patrol - Eastern Quadrant",
    ipAddress: "192.168.1.247",
    flyStatus: "flying" as const,
    sensors: [
      { id: '1', name: 'GPS Module', type: 'Navigation', status: 'active' as const, value: '12 satellites', icon: <Navigation className="w-4 h-4" /> },
      { id: '2', name: 'IMU Sensor', type: 'Motion', status: 'active' as const, value: 'Stable', icon: <Gauge className="w-4 h-4" /> },
      { id: '3', name: 'Battery Monitor', type: 'Power', status: 'active' as const, value: '87%', icon: <Battery className="w-4 h-4" /> },
      { id: '4', name: 'Thermal Camera', type: 'Imaging', status: 'active' as const, value: 'Recording', icon: <Thermometer className="w-4 h-4" /> },
      { id: '5', name: 'Main Camera', type: 'Imaging', status: 'active' as const, value: '4K Ready', icon: <Camera className="w-4 h-4" /> },
      { id: '6', name: 'Signal Strength', type: 'Communication', status: 'active' as const, value: '-65 dBm', icon: <Signal className="w-4 h-4" /> },
      { id: '7', name: 'Collision Avoidance', type: 'Safety', status: 'active' as const, value: 'Armed', icon: <Shield className="w-4 h-4" /> },
      { id: '8', name: 'Voltage Monitor', type: 'Power', status: 'inactive' as const, value: '24.1V', icon: <Zap className="w-4 h-4" /> }
    ]
  };

  const droneData = drone || defaultDrone;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'flying': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'landed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'maintenance': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'offline': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getSensorStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card 
        className={`
          bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
          border-slate-700/50 shadow-2xl backdrop-blur-sm
          transition-all duration-300 ease-out
          ${isHovered ? 'shadow-2xl shadow-cyan-500/10 border-cyan-500/30' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Plane className="w-6 h-6 text-cyan-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">{droneData.name}</CardTitle>
            </div>
            <Badge 
              className={`
                px-3 py-1 font-medium border
                ${getStatusColor(droneData.flyStatus)}
              `}
            >
              <div className="flex items-center space-x-2">
                {droneData.flyStatus === 'flying' ? 
                  <PlayCircle className="w-4 h-4" /> : 
                  <PauseCircle className="w-4 h-4" />
                }
                <span className="capitalize">{droneData.flyStatus}</span>
              </div>
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">Assignment</h4>
                <p className="text-white font-medium">{droneData.assignment}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">IP Address</h4>
                <div className="flex items-center space-x-2">
                  <Wifi className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-mono">{droneData.ipAddress}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">Notes</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{droneData.notes}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Separator className="bg-slate-700/50" />
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Sensor Array</span>
              <Badge variant="outline" className="ml-2 text-xs text-slate-400 border-slate-600">
                {droneData.sensors.filter(s => s.status === 'active').length}/{droneData.sensors.length} Active
              </Badge>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {droneData.sensors.map((sensor) => (
                <div 
                  key={sensor.id}
                  className="
                    p-3 rounded-lg border border-slate-700/50 
                    bg-slate-800/30 hover:bg-slate-800/50 
                    transition-all duration-200
                  "
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-slate-400">
                        {sensor.icon}
                      </div>
                      <span className="text-sm font-medium text-white">{sensor.name}</span>
                    </div>
                    <Badge 
                      className={`
                        text-xs px-2 py-0.5 border
                        ${getSensorStatusColor(sensor.status)}
                      `}
                    >
                      {sensor.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-400 mb-1">{sensor.type}</div>
                  {sensor.value && (
                    <div className="text-sm text-cyan-300 font-mono">{sensor.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-slate-700/50" />
          
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              className="
                border-slate-600 text-slate-300 hover:bg-slate-800 
                hover:text-white hover:border-slate-500
                transition-all duration-200
              "
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
            <Button 
              className="
                bg-cyan-600 hover:bg-cyan-500 text-white
                shadow-lg hover:shadow-cyan-500/25
                transition-all duration-200
              "
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Configuration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DroneCard;