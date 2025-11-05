import React, { useState } from 'react';
import { Search, Mail, Clock, Folder, Moon, LogOut, Settings, Bell, Grid, ArrowUpRight, User, Menu } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const statCards = [
    { title: 'Total Emails Sent', value: '230', change: 'Increased from last month', gradient: true },
    { title: 'Emails Opened', value: '150', change: 'Increased from last month', gradient: false },
    { title: 'Responses Received', value: '70', change: 'Increased from last month', gradient: false },
    { title: 'People Reached', value: '20', change: 'Increased from last month', gradient: false }
  ];

  const projects = [
    { name: 'Develop Flipkart Mobile app', date: 'Nov 26, 2025', color: 'bg-pink-500' },
    { name: 'Reactjs - Landing Page', date: 'May, 2026', color: 'bg-blue-500' },
    { name: '3d Animation - Blender', date: 'Dec 1, 2025', color: 'bg-orange-500' },
    { name: 'Designing - Banner', date: 'Oct 2, 2025', color: 'bg-purple-500' },
    { name: 'Flutter Dev - Suhalat 911', date: 'Sep 31, 2025', color: 'bg-cyan-500' }
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 w-24 h-screen flex-shrink-0 flex flex-col items-center py-6 fixed md:sticky top-0 left-0 z-50 
        transition-transform duration-300 md:transition-none`} 
        style={{ backgroundColor: '#0a1e3d' }}
      >
        <div className="mb-8 text-white font-bold text-center">
          <div className="text-xl">NEX</div>
          <div className="text-sm">LEADS.</div>
        </div>
        
        <div className="flex-1 flex flex-col items-center space-y-6 overflow-y-auto">
          {[Grid, Search, Mail, Clock, Folder, Moon].map((Icon, i) => (
            <button key={i} className="p-3 text-white hover:bg-white/20 rounded-xl transition">
              <Icon size={24} />
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-4 mt-auto">
          <button className="p-3 text-white hover:bg-white/20 rounded-xl transition"><LogOut size={24} /></button>
          <button className="p-3 text-white hover:bg-white/20 rounded-xl transition"><Settings size={24} /></button>
          <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
            <User size={24} className="text-blue-900" />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden w-full md:w-auto">
        {/* Header */}
        <div className="bg-white p-4 flex items-center justify-between">
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center flex-1 max-w-xl">
            <Search className="text-gray-400 mr-3" size={20} />
            <input type="text" placeholder="Search" className="flex-1 outline-none text-gray-600" />
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <Bell className="text-gray-600 cursor-pointer" size={20} />
            <Mail className="text-gray-600 cursor-pointer hidden sm:block" size={20} />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-300 flex items-center justify-center">
                <User size={20} className="text-blue-900" />
              </div>
              <div className="hidden md:block">
                <div className="font-semibold text-sm">Sohaib Kamran</div>
                <div className="text-xs text-gray-500">sohaib@nexleads.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 bg-blue-50">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm md:text-base text-gray-600">Plan, prioritize, and accomplish your task with ease</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {statCards.map((card, idx) => (
              <div 
                key={idx}
                className={`p-4 md:p-6 rounded-2xl ${card.gradient ? 'text-white' : 'bg-white'} relative`}
                style={card.gradient ? { background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a7c 100%)' } : {}}
              >
                <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-current flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </div>
                <div className={`text-xs md:text-sm mb-2 ${card.gradient ? 'text-white/80' : 'text-gray-600'}`}>{card.title}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{card.value}</div>
                <div className={`text-xs ${card.gradient ? 'text-white/70' : 'text-gray-500'}`}>{card.change}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Emails Breakdown */}
            <div className="bg-white p-4 md:p-6 rounded-2xl lg:col-span-2">
              <h2 className="text-lg md:text-xl font-bold mb-6">Emails Breakdown</h2>
              <div className="space-y-4">
                {[
                  { label: 'Emails Sent', percent: '70%', color: '#1e3a5f' },
                  { label: 'Emails Opened', percent: '20%', color: '#5a7ba8' },
                  { label: 'Emails Responded', percent: '10%', color: '#a8c8e8' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <span className="text-sm font-bold">{item.percent}</span>
                  </div>
                ))}
                <div className="flex h-3 rounded-full overflow-hidden">
                  <div style={{ width: '70%', backgroundColor: '#1e3a5f' }}></div>
                  <div style={{ width: '20%', backgroundColor: '#5a7ba8' }}></div>
                  <div style={{ width: '10%', backgroundColor: '#a8c8e8' }}></div>
                </div>
              </div>
            </div>

            {/* Current Projects */}
            <div className="bg-white p-4 md:p-6 rounded-2xl lg:row-span-2">
              <h2 className="text-lg md:text-xl font-bold mb-6">Current Projects</h2>
              <div className="space-y-4">
                {projects.map((p, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center text-white`}>
                      <User size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{p.name}</div>
                      <div className="text-xs text-gray-500">Due Date: {p.date}</div>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 py-2 flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-gray-50 rounded-lg transition">
                  <span>View More</span>
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    <ArrowUpRight size={12} />
                  </div>
                </button>
              </div>
            </div>

            {/* Funnel Lead Chart */}
            <div className="bg-white p-4 md:p-6 rounded-2xl lg:col-span-2">
              <h2 className="text-lg md:text-xl font-bold mb-6">Funnel Lead Chart</h2>
              <div className="flex items-center justify-between overflow-x-auto pb-2">
                {[
                  { label: 'Leads', icon: <Search className="text-white" size={20} />, color: '#1e3a5f' },
                  { label: 'Emails', icon: <Mail className="text-white" size={20} />, color: '#2a4a7c' },
                  { label: 'Response', icon: (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ), color: '#3a5a8c' },
                  { label: 'Project', icon: (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    ), color: '#4a6a9c' }
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-2" style={{ backgroundColor: step.color }}>
                        {step.icon}
                      </div>
                      <span className="text-xs font-semibold">{step.label}</span>
                    </div>
                    {i < 3 && <ArrowUpRight className="text-gray-400 mx-2 flex-shrink-0" size={16} />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Platform Breakdown */}
            <div className="bg-white p-4 md:p-6 rounded-2xl">
              <h2 className="text-lg md:text-xl font-bold mb-6">Platform Breakdown</h2>
              <div className="flex items-center justify-center mb-6">
                <svg className="w-32 h-32 md:w-48 md:h-48" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1e3a5f" strokeWidth="40" strokeDasharray="251.2 251.2" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#4a6a9c" strokeWidth="40" strokeDasharray="125.6 377.6" strokeDashoffset="-251.2" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#a8c8e8" strokeWidth="40" strokeDasharray="125.6 377.6" strokeDashoffset="-376.8" transform="rotate(-90 100 100)" />
                </svg>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Linkedin', percent: '50%', color: '#1e3a5f' },
                  { name: 'Upwork', percent: '25%', color: '#4a6a9c' },
                  { name: 'Twitter', percent: '25%', color: '#a8c8e8' }
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: p.color }}></div>
                      <span className="text-sm font-semibold">{p.name}</span>
                    </div>
                    <span className="text-sm font-bold">{p.percent}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
