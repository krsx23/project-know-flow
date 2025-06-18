
import React from 'react';
import { Layout } from '../components/Layout';
import { DashboardStats } from '../components/DashboardStats';
import { ProjectList } from '../components/ProjectList';
import { TimeTracking } from '../components/TimeTracking';
import { RecentActivity } from '../components/RecentActivity';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, John!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your projects today.
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProjectList />
          </div>
          <div className="space-y-6">
            <TimeTracking />
            <RecentActivity />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
