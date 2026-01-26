import React, { useState, useEffect } from 'react';

const DashboardTask = () => {
    const [platformOpen, setPlatformOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [leadStatus, setLeadStatus] = useState(
        Array(6).fill("interested") // default for all rows
    );

    const updateStatus = (index, value) => {
        const updated = [...leadStatus];
        updated[index] = value;
        setLeadStatus(updated);
    };


    return (
        <div className="bg-white rounded-3xl p-5 md:p-8">
            {!selectedCard ? (
                <div>

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl md:text-3xl font-semibold text-[#0A2A55]">
                            Follow – up Tracking
                        </h1>
                        <p className="text-sm text-gray-500">
                            Monitor leads, responses, and follow-ups in one place.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="flex items-center gap-2 bg-[#EAF6FF] px-4 py-2 rounded-xl text-sm text-gray-500">
                            <i className="ri-calendar-line"></i>
                            Date: From - To
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                        <div className="w-full xl:w-1/4 relative">
                            <button
                                onClick={() => setPlatformOpen(!platformOpen)}
                                className="w-full flex justify-between items-center px-4 py-1 bg-[#EEF8FF] border border-[#EEF8FF] rounded-xl text-gray-500 text-sm"
                            >
                                <span className="flex items-center gap-2">
                                    <i className="ri-apps-2-line text-lg text-gray-500 font-bold"></i>
                                    Platforms
                                </span>
                                <i
                                    className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform ${platformOpen ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </button>
                            {platformOpen && (
                                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                                    <button
                                        onClick={() => {
                                            setPlatformOpen(false);
                                            // handle facebook selection
                                        }}
                                        className="w-full text-left px-4 py-3 text-sm hover:bg-[#EEF8FF] flex items-center gap-2"
                                    >
                                        <i className="ri-facebook-fill text-blue-600"></i>
                                        Facebook
                                    </button>

                                    <button
                                        onClick={() => {
                                            setPlatformOpen(false);
                                            // handle twitter selection
                                        }}
                                        className="w-full text-left px-4 py-3 text-sm hover:bg-[#EEF8FF] flex items-center gap-2"
                                    >
                                        <i className="ri-twitter-x-fill text-black"></i>
                                        Twitter
                                    </button>
                                </div>
                            )}
                        </div>

                        <button className="ml-auto flex items-center gap-2 bg-[#EAF6FF] px-5 py-2 rounded-xl text-sm text-[#0A2A55]">
                            <i className="ri-equalizer-line"></i>
                            Filter
                        </button>
                    </div>
                    <hr className="mb-6 border-t border-[#C3C3C3]" />
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {[
                            "Website Developer",
                            "Graphic Designing",
                            "SEO",
                            "3d Animation",
                            "Social Media Marketing",
                            "Ecommerce",
                        ].map((title, i) => (
                            <div
                                key={i}
                                className="bg-[#EEF8FF] rounded-2xl p-5 cursor-pointer hover:shadow-md transition"
                                onClick={() => setSelectedCard(title)} // set selected card
                            >
                                <p className="text-sm text-gray-400 mb-2">08-01-2026 [{title}]</p>

                                {/* Platforms */}
                                <div className="flex gap-2 mb-4">
                                    <span
                                        className="px-3 py-1 text-xs rounded-full border"
                                        style={{ backgroundColor: "#D2F5FF", borderColor: "#029FCA", color: "#029FCA" }}
                                    >
                                        Twitter
                                    </span>
                                    <span
                                        className="px-3 py-1 text-xs rounded-full border"
                                        style={{ backgroundColor: "#FFD9D5", borderColor: "#EA4335", color: "#EA4335" }}
                                    >
                                        Google
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="bg-white rounded-xl px-4 py-3 mb-4 flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-gray-400">Total Leads</p>
                                        <p className="text-3xl font-semibold text-[#0A2A55]">45</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Follow-Up Sent</p>
                                        <p className="text-3xl font-semibold text-[#0A2A55]">02</p>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <button className="w-full bg-[#7DA0CA] hover:bg-[#7AA4CE] text-white py-2 rounded-xl text-sm flex items-center justify-center gap-2">
                                    <i className="ri-send-plane-line"></i>
                                    Send Follow-Up
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // DETAIL VIEW
                <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">

                    {/* LEFT CONTENT — JOB BOARD */}
                    <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm border space-y-6">
                        <div className=" justify-between items-center">
                            <button
                                className="text-sm text-black font-bold hover:underline mb-5"
                                onClick={() => setSelectedCard(null)} // back button
                            >
                                ← Back
                            </button>
                            <h1 className="text-3xl font-medium text-[#000000]">{selectedCard} Board</h1>
                        </div>
                        <p className="text-gray-900 mt-1">Date: 08-01-2026</p>

                        {/* Jobs Table */}
                        <div className="overflow-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 px-2 font-medium text-[#000000]">Name</th>
                                        <th className="py-3 px-2 font-medium text-[#000000]">Description</th>
                                        <th className="py-3 px-2 font-medium text-[#000000]">Email</th>
                                        <th className="py-3 px-2 font-medium text-[#000000]">Platform</th>
                                        <th className="py-3 px-2 font-medium text-[#000000]">Date</th>
                                        <th className="py-3 px-2 font-medium text-[#000000]">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[
                                        ["Syed Anas", "Looking for a website dev…", "anas@gmail.com", "Facebook", "9/10/25"],
                                        ["Mohsin", "Need UI Designer", "Mohsin@gmail.com", "Thread", "9/10/25"],
                                        ["Sohaib", "Need Shopify store dev…", "Sohaib@gmail.com", "LinkedIn", "9/10/25"],
                                        ["Basit Karim", "Backend Dev - for deploy…", "basit@gmail.com", "Twitter", "7/10/25"],
                                        ["Syed Anas", "Looking for figma expert…", "anas.r@gmail.com", "Facebook", "23/09/25"],
                                        ["Sohaib", "Logo Designer required…", "Sohaib@gmail.com", "Upwork", "20/09/25"],
                                    ].map((item, i) => (
                                        <tr key={i} className="border-b text-gray-700">

                                            {/* STATUS */}
                                            <td className="py-3 px-2">{item[0]}</td>
                                            <td className="py-3 px-2">{item[1]}</td>
                                            <td className="py-3 px-2">{item[2]}</td>
                                            <td className="py-3 px-2">{item[3]}</td>
                                            <td className="py-3 px-2">{item[4]}</td>
                                            <td className="py-3 px-2">
                                                <div className="flex items-center gap-2">

                                                    {/* EMAIL ICON */}
                                                    <button
                                                        onClick={() => openComposeWithEmail(item[2])}
                                                        className="hover:text-blue-700"
                                                    >
                                                        <i className="ri-mail-line text-lg text-[#052659]"></i>
                                                    </button>

                                                    {/* STATUS DROPDOWN */}
                                                    <select
                                                        value={leadStatus[i]}
                                                        onChange={(e) => updateStatus(i, e.target.value)}
                                                        className={`bg-white text-xs px-2 py-1 rounded-lg border cursor-pointer outline-none
    ${leadStatus[i] === "interested"
                                                                ? "bg-green-200 text-green-700 border-green-300 focus:bg-white"
                                                                : "bg-red-200 text-red-700 border-red-300 focus:bg-White"
                                                            }
  `}
                                                    >
                                                        <option value="interested">Interested</option>
                                                        <option value="not_interested">Not Interested</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default DashboardTask