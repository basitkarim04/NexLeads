import React, { useState, useMemo } from "react";

export default function AdminPanel() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "+1 234 567 890",
      previousPackage: "Basic",
      currentPackage: "Premium",
      leads: 15,
      blocked: false,
    },
    {
      id: 2,
      name: "Sarah Khan",
      email: "sarah@example.com",
      contact: "+92 300 1234567",
      previousPackage: "Free",
      currentPackage: "Basic",
      leads: 7,
      blocked: false,
    },
    {
      id: 3,
      name: "Michael Lee",
      email: "michael@example.com",
      contact: "+44 7777 123456",
      previousPackage: "Premium",
      currentPackage: "Premium",
      leads: 25,
      blocked: false,
    },
  ]);

  // Dashboard calculations
  const totalUsers = users.length;
  const totalLeads = users.reduce((acc, user) => acc + user.leads, 0);
  const totalEarning = users.reduce((acc, user) => {
    if (user.currentPackage === "Premium") return acc + 100;
    if (user.currentPackage === "Basic") return acc + 50;
    return acc;
  }, 0);

  // Search filter
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const toggleBlock = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, blocked: !user.blocked } : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {totalUsers}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-gray-500 text-sm">Total Leads</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {totalLeads}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-gray-500 text-sm">Total Platform Earning</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            ${totalEarning}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Previous Package</th>
              <th className="px-6 py-3">Current Package</th>
              <th className="px-6 py-3">Lead Count</th>
              <th className="px-6 py-3 text-center">Block User</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className={`border-b ${
                  user.blocked ? "bg-red-50 opacity-70" : ""
                }`}
              >
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.contact}</td>
                <td className="px-6 py-4">{user.previousPackage}</td>
                <td className="px-6 py-4 font-semibold">
                  {user.currentPackage}
                </td>
                <td className="px-6 py-4">{user.leads}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleBlock(user.id)}
                    className={`px-4 py-2 rounded-lg text-white text-xs ${
                      user.blocked
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}