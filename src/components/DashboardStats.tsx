
import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const stats = [
  {
    label: 'Active Projects',
    value: '12',
    change: '+2.5%',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    label: 'Hours This Week',
    value: '186',
    change: '+12%',
    changeType: 'positive',
    icon: Clock,
  },
  {
    label: 'Revenue This Month',
    value: '$48,500',
    change: '+8.2%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    label: 'Team Members',
    value: '24',
    change: '+3',
    changeType: 'positive',
    icon: Users,
  },
];

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
