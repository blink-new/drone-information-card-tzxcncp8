import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plane, Wifi, Cpu, Thermometer, Camera, Navigation, Battery, Gauge, Signal, Shield, Zap } from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  icon: React.ReactNode;
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

const statusColors: Record<string, string> = {
  flying: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  landed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  maintenance: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  offline: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const DroneCardCompact: React.FC<DroneCardCompactProps> = ({ drone, onView, onEdit }) => {
  return (
    <div
      className="
        flex flex-col md:flex-row items-start md:items-center justify-between
        bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/60
        rounded-xl shadow-sm px-4 py-3 mb-4 gap-2 transition hover:shadow-lg
        min-w-0
      "
      style={{ maxWidth: 600 }}
    >
      {/* Left: Icon + Name */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
          <Plane className="w-5 h-5 text-cyan-400" />
        </span>
        <div className="min-w-0">
          <div className="font-bold text-base text-slate-900 dark:text-white truncate">{drone.name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[180px]">{drone.assignment}</div>
        </div>
      </div>

      {/* Center: Notes, IP */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 min-w-0">
        <div className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
          <span className="font-medium text-slate-700 dark:text-slate-200">Notes:</span> {drone.notes}
        </div>
        <div className="flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-300 font-mono">
          <Wifi className="w-3 h-3" />
          {drone.ipAddress}
        </div>
      </div>

      {/* Sensors: icon + name only */}
      <div className="flex flex-wrap items-center gap-2 max-w-[260px]">
        {drone.sensors.slice(0, 10).map(sensor => (
          <span key={sensor.id} className="flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60">
            <span className="text-cyan-500">{sensor.icon}</span>
            <span className="truncate max-w-[60px]">{sensor.name}</span>
          </span>
        ))}
      </div>

      {/* Right: Status + Actions */}
      <div className="flex items-center gap-2 ml-auto mt-2 md:mt-0">
        <Badge className={`px-2 py-1 border text-xs font-medium capitalize ${statusColors[drone.flyStatus]}`}>{drone.flyStatus}</Badge>
        <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-slate-800" onClick={onView}>
          View
        </Button>
        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-white" onClick={onEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};

// Demo data for preview
export const demoSensors: Sensor[] = [
  { id: '1', name: 'GPS', icon: <Navigation className="w-4 h-4" /> },
  { id: '2', name: 'IMU', icon: <Gauge className="w-4 h-4" /> },
  { id: '3', name: 'Battery', icon: <Battery className="w-4 h-4" /> },
  { id: '4', name: 'Thermal', icon: <Thermometer className="w-4 h-4" /> },
  { id: '5', name: 'Camera', icon: <Camera className="w-4 h-4" /> },
  { id: '6', name: 'Signal', icon: <Signal className="w-4 h-4" /> },
  { id: '7', name: 'Collision', icon: <Shield className="w-4 h-4" /> },
  { id: '8', name: 'Voltage', icon: <Zap className="w-4 h-4" /> },
  { id: '9', name: 'CPU', icon: <Cpu className="w-4 h-4" /> },
  { id: '10', name: 'Main Cam', icon: <Camera className="w-4 h-4" /> },
];