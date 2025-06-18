
import React from 'react';
import { Calendar, MapPin, Users, AlertCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Downtown Office Complex',
    client: 'ABC Corporation',
    status: 'In Progress',
    progress: 65,
    deadline: '2024-09-15',
    location: 'Downtown, NY',
    team: 8,
    priority: 'high',
  },
  {
    id: 2,
    name: 'Residential Tower',
    client: 'Green Living Co.',
    status: 'Planning',
    progress: 25,
    deadline: '2024-12-30',
    location: 'Brooklyn, NY',
    team: 12,
    priority: 'medium',
  },
  {
    id: 3,
    name: 'Shopping Center Renovation',
    client: 'Retail Plus',
    status: 'In Progress',
    progress: 80,
    deadline: '2024-07-20',
    location: 'Queens, NY',
    team: 6,
    priority: 'high',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Planning':
      return 'bg-yellow-100 text-yellow-800';
    case 'Completed':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'text-red-600';
    case 'medium':
      return 'text-yellow-600';
    case 'low':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

export const ProjectList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {projects.map((project) => (
          <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                <AlertCircle className={`w-4 h-4 ${getPriorityColor(project.priority)}`} />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">Client: {project.client}</p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.deadline}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.team} members</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
