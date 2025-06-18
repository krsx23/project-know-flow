
import React from 'react';
import { FileText, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'document',
    message: 'Blueprint updated for Downtown Office Complex',
    user: 'Mike Johnson',
    time: '2 hours ago',
    icon: FileText,
  },
  {
    id: 2,
    type: 'time',
    message: 'Logged 8 hours on Residential Tower',
    user: 'Sarah Wilson',
    time: '4 hours ago',
    icon: Clock,
  },
  {
    id: 3,
    type: 'comment',
    message: 'New comment on Shopping Center project',
    user: 'David Brown',
    time: '6 hours ago',
    icon: MessageSquare,
  },
  {
    id: 4,
    type: 'task',
    message: 'Completed electrical inspection',
    user: 'Lisa Chen',
    time: '1 day ago',
    icon: CheckCircle,
  },
];

const getActivityColor = (type: string) => {
  switch (type) {
    case 'document':
      return 'bg-blue-100 text-blue-600';
    case 'time':
      return 'bg-green-100 text-green-600';
    case 'comment':
      return 'bg-yellow-100 text-yellow-600';
    case 'task':
      return 'bg-purple-100 text-purple-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-xs text-gray-500">{activity.user}</p>
                <span className="text-xs text-gray-400">•</span>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Activity
      </button>
    </div>
  );
};
