import React from 'react';
import CompactDroneCard from './CompactDroneCard';

interface Sensor {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
  value?: string;
}

interface Drone {
  id: string;
  name: string;
  ipAddress: string;
  flyStatus: 'flying' | 'landed' | 'maintenance' | 'offline';
  sensors: Sensor[];
}

const sampleDrones: Drone[] = [
  {
    id: 'drone-001',
    name: "Sky Hawk MK-7",
    ipAddress: "192.168.1.247",
    flyStatus: "flying",
    sensors: [
      { id: '1', name: 'GPS Module', type: 'Navigation', status: 'active' },
      { id: '2', name: 'IMU Sensor', type: 'Motion', status: 'active' },
      { id: '3', name: 'Battery Monitor', type: 'Power', status: 'active' },
      { id: '4', name: 'Thermal Camera', type: 'Imaging', status: 'active' },
      { id: '5', name: 'Main Camera', type: 'Imaging', status: 'active' },
      { id: '6', name: 'Signal Strength', type: 'Communication', status: 'active' },
      { id: '7', name: 'Collision Avoidance', type: 'Safety', status: 'active' },
      { id: '8', name: 'Voltage Monitor', type: 'Power', status: 'inactive' }
    ]
  },
  {
    id: 'drone-002',
    name: "Night Owl V-2",
    ipAddress: "192.168.1.103",
    flyStatus: "landed",
    sensors: [
      { id: '1', name: 'Night Vision', type: 'Imaging', status: 'active' },
      { id: '2', name: 'Audio Sensor', type: 'Acoustic', status: 'active' },
      { id: '3', name: 'Battery Monitor', type: 'Power', status: 'active' },
      { id: '4', name: 'Motion Detector', type: 'Motion', status: 'inactive' }
    ]
  },
  {
    id: 'drone-003',
    name: "Ironclad Guardian",
    ipAddress: "192.168.1.55",
    flyStatus: "maintenance",
    sensors: [
      { id: '1', name: 'Armor Integrity', type: 'Structural', status: 'error' },
      { id: '2', name: 'Weapon System', type: 'Offensive', status: 'inactive' }
    ]
  },
  {
    id: 'drone-004',
    name: "Swift Messenger",
    ipAddress: "192.168.1.180",
    flyStatus: "offline",
    sensors: [
      { id: '1', name: 'Cargo Lock', type: 'Utility', status: 'inactive' }
    ]
  },
  {
    id: 'drone-005',
    name: "Recon Scout",
    ipAddress: "192.168.1.201",
    flyStatus: "flying",
    sensors: [
      { id: '1', name: 'Optical Zoom', type: 'Imaging', status: 'active' },
      { id: '2', name: 'Signal Jammer', type: 'Electronic Warfare', status: 'inactive' }
    ]
  },
  {
    id: 'drone-006',
    name: "Heavy Lifter",
    ipAddress: "192.168.1.11",
    flyStatus: "landed",
    sensors: [
      { id: '1', name: 'Payload Sensor', type: 'Utility', status: 'active' },
      { id: '2', name: 'Winch Status', type: 'Utility', status: 'active' }
    ]
  },
  {
    id: 'drone-007',
    name: "Aqua Explorer",
    ipAddress: "192.168.1.33",
    flyStatus: "flying",
    sensors: [
      { id: '1', name: 'Depth Sensor', type: 'Environmental', status: 'active' },
      { id: '2', name: 'Water Quality', type: 'Environmental', status: 'active' }
    ]
  },
  {
    id: 'drone-008',
    name: "Desert Wanderer",
    ipAddress: "192.168.1.99",
    flyStatus: "maintenance",
    sensors: [
      { id: '1', name: 'Sand Filter', type: 'Maintenance', status: 'active' },
      { id: '2', name: 'Temperature Sensor', type: 'Environmental', status: 'active' }
    ]
  },
  {
    id: 'drone-009',
    name: "Arctic Surveyor",
    ipAddress: "192.168.1.150",
    flyStatus: "landed",
    sensors: [
      { id: '1', name: 'Ice Penetrator', type: 'Utility', status: 'inactive' },
      { id: '2', name: 'Thermal Scanner', type: 'Imaging', status: 'active' }
    ]
  },
  {
    id: 'drone-010',
    name: "Volcano Observer",
    ipAddress: "192.168.1.222",
    flyStatus: "flying",
    sensors: [
      { id: '1', name: 'Gas Analyzer', type: 'Environmental', status: 'active' },
      { id: '2', name: 'Heat Shield Status', type: 'Safety', status: 'active' }
    ]
  }
];

const DroneList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sampleDrones.map(drone => (
        <CompactDroneCard key={drone.id} drone={drone} />
      ))}
    </div>
  );
};

export default DroneList;