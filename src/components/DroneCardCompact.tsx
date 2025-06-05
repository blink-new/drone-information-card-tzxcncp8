import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Plane, 
  Wifi, 
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
  Zap,
  MapPin
} from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  icon: React.ReactNode;
  status?: 'active' | 'inactive' | 'error';
}

interface DroneCardCompactProps {
  drone: {
    name: string;
    notes: string;
    assignment: string;
    ipAddress: string;
    flyStatus: 'flying' | 'landed' | 'maintenance' | 'offline';
    sensors: Sensor[];
  };
  onView?: () => void;
  onEdit?: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'flying': 
      return 'bg-emerald-500/10 text-emerald-600 border-emerald-200 shadow-emerald-500/10';
    case 'landed': 
      return 'bg-blue-500/10 text-blue-600 border-blue-200 shadow-blue-500/10';
    case 'maintenance': 
      return 'bg-amber-500/10 text-amber-600 border-amber-200 shadow-amber-500/10';
    case 'offline': 
      return 'bg-red-500/10 text-red-600 border-red-200 shadow-red-500/10';
    default: 
      return 'bg-gray-500/10 text-gray-600 border-gray-200 shadow-gray-500/10';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'flying': return '🚁';
    case 'landed': return '🛬';
    case 'maintenance': return '🔧';
    case 'offline': return '⚫';
    default: return '❓';
  }
};

export const DroneCardCompact: React.FC<DroneCardCompactProps> = ({ drone, onView, onEdit }) => {
  return (
    <div className="group relative">
      <div className="
        bg-white border border-gray-200/80 rounded-2xl shadow-sm 
        hover:shadow-xl hover:shadow-gray-900/5 hover:border-gray-300/80
        transition-all duration-300 ease-out overflow-hidden
        hover:-translate-y-1
      ">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="
                w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500
                flex items-center justify-center shadow-lg shadow-blue-500/25
                group-hover:shadow-blue-500/40 transition-all duration-300
              ">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-none mb-1">
                  {drone.name}
                </h3>
                <Badge className={`
                  px-3 py-1 text-xs font-medium border shadow-sm
                  ${getStatusColor(drone.flyStatus)}
                `}>
                  <span className="mr-1.5">{getStatusIcon(drone.flyStatus)}</span>
                  {drone.flyStatus.charAt(0).toUpperCase() + drone.flyStatus.slice(1)}
                </Badge>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                <MapPin className="w-3 h-3" />
                Assignment
              </div>
              <p className="text-sm font-medium text-gray-900 leading-snug">
                {drone.assignment}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                <Wifi className="w-3 h-3" />
                Network
              </div>
              <p className="text-sm font-mono text-gray-700 bg-gray-50 px-2 py-1 rounded-md inline-block">
                {drone.ipAddress}
              </p>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Notes
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {drone.notes}
              </p>
            </div>
          </div>
        </div>

        {/* Sensors Section */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            <Cpu className="w-3 h-3" />
            Sensors ({drone.sensors.length})
          </div>
          <div className="flex flex-wrap gap-2">
            {drone.sensors.slice(0, 8).map((sensor) => (
              <div
                key={sensor.id}
                className="
                  flex items-center gap-1.5 px-3 py-1.5 
                  bg-gray-50 hover:bg-gray-100 border border-gray-200/80
                  rounded-lg transition-all duration-200 text-xs
                  hover:shadow-sm
                "
              >
                <span className="text-gray-600 flex-shrink-0">
                  {sensor.icon}
                </span>
                <span className="font-medium text-gray-700 truncate">
                  {sensor.name}
                </span>
              </div>
            ))}
            {drone.sensors.length > 8 && (
              <div className="
                flex items-center justify-center px-3 py-1.5 
                bg-gray-100 border border-gray-200/80 border-dashed
                rounded-lg text-xs font-medium text-gray-500
              ">
                +{drone.sensors.length - 8} more
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={onView}
              className="
                flex-1 border-gray-200 text-gray-600 hover:bg-gray-100 
                hover:text-gray-900 hover:border-gray-300 transition-all
              "
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <Button
              size="sm"
              onClick={onEdit}
              className="
                flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 
                hover:from-blue-600 hover:to-cyan-600 text-white border-0
                shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
                transition-all duration-200
              "
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo data for preview
export const demoSensors: Sensor[] = [
  { id: '1', name: 'GPS Module', icon: <Navigation className="w-4 h-4" />, status: 'active' },
  { id: '2', name: 'IMU Sensor', icon: <Gauge className="w-4 h-4" />, status: 'active' },
  { id: '3', name: 'Battery', icon: <Battery className="w-4 h-4" />, status: 'active' },
  { id: '4', name: 'Thermal Cam', icon: <Thermometer className="w-4 h-4" />, status: 'active' },
  { id: '5', name: 'Main Camera', icon: <Camera className="w-4 h-4" />, status: 'active' },
  { id: '6', name: 'Signal', icon: <Signal className="w-4 h-4" />, status: 'active' },
  { id: '7', name: 'Collision Avoid', icon: <Shield className="w-4 h-4" />, status: 'active' },
  { id: '8', name: 'Voltage', icon: <Zap className="w-4 h-4" />, status: 'inactive' },
  { id: '9', name: 'CPU Monitor', icon: <Cpu className="w-4 h-4" />, status: 'active' },
  { id: '10', name: 'Backup Cam', icon: <Camera className="w-4 h-4" />, status: 'active' },
];