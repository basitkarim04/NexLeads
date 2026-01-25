import React, { useState, useRef, useEffect } from 'react';

const DashboardProject = () => {
    
  const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            {/* Header */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                Projects
            </h1>
            <hr className="mb-6" />

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* ================= IN DISCUSSION ================= */}
                <div className="bg-[#EEF8FF] rounded-t-2xl">
                    <div className="bg-[#C1E8FF] mb-4 p-4 rounded-t-2xl text-center">
                        <h2 className="font-semibold text-lg">In Discussion</h2>
                    </div>

                    <div className="space-y-4 p-4">
                        {[
                            { title: "Website Redesign", company: "Acme Inc.", date: "10 January 2025", details: "jkbwvjbwbwvewvhcvwjdbcehbcjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdclaj lhrv arwlv rhv", Status: "Discussion", nextStatus: "Mark as Ongoing" },
                            { title: "App Dev", company: "Brand Revamp.", date: "10 January 2025", details: "jkbwvjbwbwvewvhcvwjdbcehbcjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdclaj lhrv arwlv rhv", Status: "Discussion", nextStatus: "Mark as Ongoing" },
                            { title: "SEO Optimization", company: "Wanderluster co.", date: "10 January 2025", details: "jkbwvjbwbwvewvhcvwjdbcehbcjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdclaj lhrv arwlv rhv", Status: "Discussion", nextStatus: "Mark as Ongoing" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedItem(item)} className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <span className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full">
                                        Lead
                                    </span>
                                </div>

                                <p className="text-sm text-gray-500 mt-1">{item.company}</p>

                                <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                                    <i className="ri-calendar-line"></i>
                                    {item.date}
                                </div>
                            </div>
                        ))}

                        {selectedItem && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

                                <div className="w-full max-w-xl bg-white rounded-2xl overflow-hidden">

                                    {/* HEADER */}
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <div>
                                            <h2 className="font-semibold text-lg">{selectedItem.title}</h2>
                                            <p className="text-sm text-gray-500">{selectedItem.company}</p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                                {selectedItem.Status}
                                            </span>

                                            {/* CLOSE BUTTON */}
                                            <button
                                                onClick={() => setSelectedItem(null)}
                                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                                            >
                                                <i className="ri-close-line text-xl text-gray-600"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* INFO BAR */}
                                    <div className="bg-[#C1E8FF] px-4 py-3 flex flex-wrap gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <i className="ri-calendar-line"></i>
                                            <span>Start: 15 January 2026</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span>|</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <i className="ri-time-line"></i>
                                            <span>Status:</span>
                                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                                                {selectedItem.Status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-4 space-y-4">
                                        <div>
                                            <h3 className="font-semibold mb-1">Details</h3>
                                            <p className="text-sm text-gray-600">{selectedItem.details}</p>
                                        </div>
                                    </div>

                                    {/* FOOTER */}
                                    <div className="p-4 border-t flex justify-end">
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm">
                                            {selectedItem.nextStatus}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* ================= ONGOING ================= */}
                <div className="bg-[#EEF8FF] rounded-t-2xl">
                    <div className="bg-[#C1E8FF] mb-4 p-4 rounded-t-2xl text-center">
                        <h2 className="font-semibold text-lg">Ongoing</h2>
                    </div>

                    <div className="space-y-4 p-4">
                        {[
                            { title: "Sales Automation", company: "BizTech LLC.", date: "15 January 2025", details: "jwevJRWVBJrbvjrj rv r vjf vjsvwvlJWVJWBVKJBRIVWRVWRYVWRBVWRVJWRVBWBVIWBIVYWB", Status: "Ongoing", nextStatus: "Mark as Completed" },
                            { title: "Social Media Man...", company: "Connect Media.", date: "15 January 2025", details: "jwevJRWVBJrbvjrj rv r vjf vjsvwvlJWVJWBVKJBRIVWRVWRYVWRBVWRVJWRVBWBVIWBIVYWB", Status: "Ongoing", nextStatus: "Mark as Completed" },
                            { title: "CRM Implement...", company: "Vertex Solutions.", date: "15 January 2025", details: "jwevJRWVBJrbvjrj rv r vjf vjsvwvlJWVJWBVKJBRIVWRVWRYVWRBVWRVJWRVBWBVIWBIVYWB", Status: "Ongoing", nextStatus: "Mark as Completed" },
                            { title: "Content Writing", company: "BizTech LLC.", date: "15 January 2025", details: "jwevJRWVBJrbvjrj rv r vjf vjsvwvlJWVJWBVKJBRIVWRVWRYVWRBVWRVJWRVBWBVIWBIVYWB", Status: "Ongoing", nextStatus: "Mark as Completed" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedItem(item)} className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                        Ongoing
                                    </span>
                                </div>

                                <p className="text-sm text-gray-500 mt-1">{item.company}</p>

                                <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                                    <i className="ri-calendar-line"></i>
                                    {item.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= COMPLETED ================= */}
                <div className="bg-[#EEF8FF] rounded-t-2xl">
                    <div className="bg-[#C1E8FF] mb-4 p-4 rounded-t-2xl text-center">
                        <h2 className="font-semibold text-lg">Completed</h2>
                    </div>


                    <div className="bg-[#EEF8FF] space-y-4 p-4">
                        {[
                            { title: "Web App Dev...", company: "Inno Soft Tech.", date: "8 January 2025", details: "jwevJRWVBJrbvjrj rv r vjf vjsvwvlJWVJWBVKJBRIVWRVWRYVWRBVWRVJWRVBWBVIWBIVYWB", Status: "Completed", nextStatus: "Completed" },
                            { title: "Content Writing Ca...", company: "Blumesoft.", date: "15 January 2025", details: "jwevJRWVBJrbvjrj rv r vjf vjsvwvlJWVJWBVKJBRIVWRVWRYVWRBVWRVJWRVBWBVIWBIVYWB", Status: "Completed", nextStatus: "Completed" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedItem(item)} className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full">
                                        Completed
                                    </span>
                                </div>

                                <p className="text-sm text-gray-500 mt-1">{item.company}</p>

                                <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                                    <i className="ri-calendar-line"></i>
                                    {item.date}
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardProject