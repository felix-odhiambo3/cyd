import type React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  Video,
  MessageSquare,
  Users,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  // Mock data
  const stats = {
    totalVideos: 24,
    totalTestimonials: 12,
    pendingMessages: 5,
    totalClients: 156
  };

  const recentVideos = [
    { id: 1, title: "Safari Lodge Wedding", category: "Weddings", status: "Published", date: "2024-01-15" },
    { id: 2, title: "Tech Startup Launch", category: "Corporate", status: "Draft", date: "2024-01-14" },
    { id: 3, title: "Maasai Traditional Ceremony", category: "Cultural", status: "Published", date: "2024-01-13" }
  ];

  const recentMessages = [
    { id: 1, name: "Sarah Johnson", email: "sarah@email.com", subject: "Wedding Inquiry", date: "2024-01-15", status: "New" },
    { id: 2, name: "Mike Peters", email: "mike@company.com", subject: "Corporate Event", date: "2024-01-14", status: "Replied" }
  ];

  return (
    <div className="min-h-screen bg-[#f9f5f3] pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif text-[#434642]">Admin Dashboard</h1>
            <p className="text-[#816e5f]">Chini Ya Dari Limited Content Management</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {[
            { id: 'overview', label: 'Overview', icon: Settings },
            { id: 'videos', label: 'Videos', icon: Video },
            { id: 'messages', label: 'Messages', icon: MessageSquare },
            { id: 'testimonials', label: 'Testimonials', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#434642] text-white'
                  : 'text-[#434642] hover:bg-[#f9f5f3]'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Video className="text-[#8b826d]" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-[#434642]">{stats.totalVideos}</p>
                    <p className="text-[#816e5f] text-sm">Total Videos</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Users className="text-[#8b826d]" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-[#434642]">{stats.totalTestimonials}</p>
                    <p className="text-[#816e5f] text-sm">Testimonials</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="text-[#8b826d]" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-[#434642]">{stats.pendingMessages}</p>
                    <p className="text-[#816e5f] text-sm">Pending Messages</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Users className="text-[#8b826d]" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-[#434642]">{stats.totalClients}</p>
                    <p className="text-[#816e5f] text-sm">Total Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#434642] mb-4">Recent Videos</h3>
                <div className="space-y-3">
                  {recentVideos.map((video) => (
                    <div key={video.id} className="flex items-center justify-between p-3 bg-[#f9f5f3] rounded-lg">
                      <div>
                        <p className="font-medium text-[#434642]">{video.title}</p>
                        <p className="text-sm text-[#816e5f]">{video.category} • {video.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        video.status === 'Published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {video.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#434642] mb-4">Recent Messages</h3>
                <div className="space-y-3">
                  {recentMessages.map((message) => (
                    <div key={message.id} className="flex items-center justify-between p-3 bg-[#f9f5f3] rounded-lg">
                      <div>
                        <p className="font-medium text-[#434642]">{message.name}</p>
                        <p className="text-sm text-[#816e5f]">{message.subject} • {message.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        message.status === 'New'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {message.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-[#434642]">Video Management</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-[#434642] text-white rounded-lg hover:bg-[#816e5f] transition-colors">
                <Plus size={20} />
                <span>Add Video</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#c9cac9]">
                    <th className="text-left py-3 px-4 text-[#434642]">Title</th>
                    <th className="text-left py-3 px-4 text-[#434642]">Category</th>
                    <th className="text-left py-3 px-4 text-[#434642]">Status</th>
                    <th className="text-left py-3 px-4 text-[#434642]">Date</th>
                    <th className="text-left py-3 px-4 text-[#434642]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentVideos.map((video) => (
                    <tr key={video.id} className="border-b border-[#f9f5f3]">
                      <td className="py-3 px-4 text-[#434642]">{video.title}</td>
                      <td className="py-3 px-4 text-[#816e5f]">{video.category}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          video.status === 'Published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {video.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#816e5f]">{video.date}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="p-1 text-[#816e5f] hover:text-[#434642]">
                            <Eye size={16} />
                          </button>
                          <button className="p-1 text-[#816e5f] hover:text-[#434642]">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-500 hover:text-red-700">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif text-[#434642] mb-6">Contact Messages</h3>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="border border-[#c9cac9] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-[#434642]">{message.name}</h4>
                      <p className="text-sm text-[#816e5f]">{message.email}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      message.status === 'New'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.status}
                    </span>
                  </div>
                  <p className="text-[#434642] mb-2"><strong>Subject:</strong> {message.subject}</p>
                  <p className="text-sm text-[#816e5f]">Received: {message.date}</p>
                  <div className="flex space-x-2 mt-3">
                    <button className="px-3 py-1 bg-[#434642] text-white text-sm rounded hover:bg-[#816e5f]">
                      Reply
                    </button>
                    <button className="px-3 py-1 bg-gray-200 text-[#434642] text-sm rounded hover:bg-gray-300">
                      Mark as Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-[#434642]">Testimonial Management</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-[#434642] text-white rounded-lg hover:bg-[#816e5f] transition-colors">
                <Plus size={20} />
                <span>Add Testimonial</span>
              </button>
            </div>
            <p className="text-[#816e5f]">Testimonial management interface would be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
