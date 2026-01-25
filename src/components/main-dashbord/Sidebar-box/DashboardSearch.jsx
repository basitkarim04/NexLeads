import React from 'react'

const DashboardSearch = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6">

            {/* LEFT CONTENT — JOB BOARD */}
            <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm border space-y-6">

                {/* Job Board Header */}
                <div>
                    <h1 className="text-3xl font-medium text-[#000000]">Job Board</h1>
                    <p className="text-gray-900 mt-1">
                        Find leads, email them, close the deal, and happily earn.
                    </p>
                </div>

                {/* Search + Controls */}
                <div className="flex flex-col xl:flex-row items-center gap-4">
                    {/* Search Input */}
                    <div className="flex items-center w-full xl:w-1/2 px-4 py-3 bg-[#EEF8FF] border border-[#EEF8FF] rounded-xl">
                        <i className="ri-search-line text-lg text-gray-900 font-bold"></i>
                        <input
                            type="text"
                            placeholder="Search by job title, keywords…"
                            className="flex-1 bg-transparent outline-none text-gray-700 ml-2 text-sm"
                        />
                    </div>

                    {/* Platforms Dropdown */}
                    <div className="w-full xl:w-1/4">
                        <button className="w-full flex justify-between items-center px-4 py-3 bg-[#EEF8FF] border border-[#EEF8FF] rounded-xl text-gray-700 text-sm">
                            <span className="flex items-center gap-2">
                                <i className="ri-apps-2-line text-lg text-gray-900 font-bold"></i>
                                Platforms
                            </span>
                            <i className="ri-arrow-down-s-line text-xl text-gray-500 font-bold"></i>
                        </button>
                    </div>

                    {/* Filter Button */}
                    <button className="w-full xl:w-auto flex items-center gap-2 px-4 py-3 bg-[#EEF8FF] border border-[#EEF8FF] rounded-xl text-gray-700 text-sm">
                        <i className="ri-equalizer-line text-lg text-gray-900"></i>
                        Filter
                    </button>

                </div>

                {/* Tags */}
                <div className="flex items-center flex-wrap gap-3">
                    {["Web Developer", "UI Designer", "Backend Dev", "Figma designer"].map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-2 px-3 py-1 text-gray-900 rounded-full text-sm"
                            style={{ backgroundColor: "#C1E8FF" }}>
                            <i className="ri-close-line text-base cursor-pointer text-gray-900  hover:text-blue-900"></i>
                            {tag}
                        </span>
                    ))}

                    <button className="text-sm text-gray-500 ml-2">
                        Clear All
                    </button>
                </div>


                {/* Found Jobs */}
                <div className="flex items-center justify-between w-full">
                    <p className="font-medium text-gray-600">
                        We've found <span className="text-[#9711B9] font-semibold">20</span> Jobs!
                    </p>

                    <button className="text-sm text-[#FFFFFF] font-medium hover:underline bg-[#052659] pr-5 pl-5 pt-2 pb-2 border border-[#052659] rounded-xl">
                        Select All
                    </button>
                </div>


                {/* Jobs Table */}
                <div className="overflow-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-3 px-2"><input type="checkbox" /></th>
                                <th className="py-3 px-2 font-medium text-[#000000]">Name</th>
                                <th className="py-3 px-2 font-medium text-[#000000]">Description</th>
                                <th className="py-3 px-2 font-medium text-[#000000]">Email</th>
                                <th className="py-3 px-2 font-medium text-[#000000]">Platform</th>
                                <th className="py-3 px-2 font-medium text-[#000000]">Date</th>
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
                                    <td className="py-3 px-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="py-3 px-2">{item[0]}</td>
                                    <td className="py-3 px-2">{item[1]}</td>
                                    <td className="py-3 px-2">{item[2]}</td>
                                    <td className="py-3 px-2">{item[3]}</td>
                                    <td className="py-3 px-2">{item[4]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button className="text-[#052659] font-medium mt-2">See more ▼</button>
            </div>

            {/* RIGHT PANEL — COMPOSE MAIL */}
            <div className="lg:w-1/3 bg-white rounded-3xl p-6 shadow-sm border h-fit">
                <h2 className="text-xl font-medium mb-4 text-[#000000] text-center">COMPOSE MAIL</h2>

                <input
                    type="text"
                    placeholder="Subject Line"
                    className="w-full mb-3 px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none"
                />

                <textarea
                    placeholder="Your Subject..."
                    rows={8}
                    className="w-full px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none resize-none"
                ></textarea>

                {/* Formatting buttons */}
                <div className="flex items-center gap-4 mt-4 text-gray-700 px-2">
                    <b>B</b>
                    <i>I</i>
                    <u>U</u>
                    <i className="ri-list-unordered"></i>
                    <i className="ri-list-ordered"></i>
                    <span className=" text-gray-700">Cc Bcc</span>
                    <button className="px-3 py-1 bg-[#EEF8FF] text-[#000000] rounded-lg text-sm">
                        AI Assist
                    </button>
                </div>

                {/* Send Button */}
                <button className="w-full mt-6 py-3 bg-[#052659] text-white rounded-xl font-medium hover:bg-blue-800">
                    Send to all Selected
                </button>
            </div>
        </div>
    )
}

export default DashboardSearch