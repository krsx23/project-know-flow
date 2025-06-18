
import React from 'react';
import { 
  Home, 
  FolderOpen, 
  Clock, 
  FileText, 
  Users, 
  Settings,
  BarChart3
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/', active: true },
  { icon: FolderOpen, label: 'Projects', href: '/projects' },
  { icon: Clock, label: 'Time Tracking', href: '/time' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: BarChart3, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">BuildPro</span>
        </div>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center space-x-3 px-6 py-3 text-sm font-medium transition-colors ${
              item.active
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
