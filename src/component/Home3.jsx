import React from 'react';
import { 
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

function Home3() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Manage Everything in One Place, track all your packages and shipments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Manage Your Hub's Inventory */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <ClipboardDocumentListIcon className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-indigo-800">Manage Your Hub’s Inventory</h2>
          <p className="text-center text-gray-700">
            Track products in each hub, including shipments and received items. Monitor inventory levels, and stay updated on the location of shipped packages.
          </p>
        </div>

        {/* Manage Returns */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <ArrowPathIcon className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Manage Returns</h2>
          <p className="text-center text-gray-700">
            Ensure customers and vendors can return packages. Get notifications when shipments are sent, and track if packages are stuck in customs, preparing for expected delivery dates.
          </p>
        </div>

        {/* Manage Vendors & Customers */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <UserGroupIcon className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-purple-800">Manage Vendors & Customers</h2>
          <p className="text-center text-gray-700">
            Create profiles, view shipments, assign products, and identify the fastest hubs for shipping or receiving products.
          </p>
        </div>

        {/* Monitor Package Journey */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <GlobeAltIcon className="h-12 w-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-teal-800">Monitor Package Journey</h2>
          <p className="text-center text-gray-700">
            Track over 2000 carriers globally in one place. View shipping, delivery, and estimated delivery dates, along with transit times.
          </p>
        </div>

        {/* Analytical Dashboard */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 shadow-lg rounded-xl p-6 flex flex-col items-center col-span-1 md:col-span-2 hover:scale-105 transition-transform duration-300">
          <ChartBarIcon className="h-12 w-12 text-red-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-red-800">Analytical Dashboard</h2>
          <p className="text-center text-gray-700">
            Instantly identify issues by viewing the status of packages, carrier transit times, hub inventory, and returns. Address problems proactively.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home3;