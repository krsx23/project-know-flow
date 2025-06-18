
import React from 'react';
import { Play, Pause, Square } from 'lucide-react';

export const TimeTracking: React.FC = () => {
  const [isTracking, setIsTracking] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState('00:00:00');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Time Tracking</h2>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-mono font-bold text-gray-900 mb-2">
          {currentTime}
        </div>
        <p className="text-sm text-gray-600">Downtown Office Complex</p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsTracking(!isTracking)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            isTracking
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isTracking ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span>{isTracking ? 'Pause' : 'Start'}</span>
        </button>
        
        <button className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          <Square className="w-5 h-5" />
          <span>Stop</span>
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-medium text-gray-900 mb-3">Today's Hours</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Downtown Office Complex</span>
            <span className="font-medium">4:30</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shopping Center Renovation</span>
            <span className="font-medium">2:15</span>
          </div>
          <div className="pt-3 border-t border-gray-200 flex justify-between font-medium">
            <span>Total</span>
            <span>6:45</span>
          </div>
        </div>
      </div>
    </div>
  );
};
