
import React, { useState, useRef, useEffect } from 'react';
import profileImage from "../../../assets/Images/feature1.png";
import { useSelector } from 'react-redux';

const DashboardSetting = () => {
    const { userDetails, loading, error } = useSelector(
      (state) => state.userDetail
    );

    const [billingCycle, setBillingCycle] = useState("monthly");
    const [activeTab, setActiveTab] = useState("profile");
    const [isEditOpen, setIsEditOpen] = useState(false);

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



    const DISCOUNT = 0.15;

    const pricing = {
        free: 0,
        pro: 19,
        enterprise: 49,
    };

    const getPrice = (monthlyPrice) => {
        if (billingCycle === "annually") {
            const yearly = monthlyPrice * 12;
            return Math.round(yearly - yearly * DISCOUNT);
        }
        return monthlyPrice;
    };


    return (
        <div className="bg-[#F3FAFF] min-h-screen">
            <div className="w-full mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">

                {/* HEADER */}
                <div className="px-8 py-6 border-b">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Settings
                    </h1>
                </div>

                {/* TABS */}
                <div className="px-8 py-6 flex gap-3">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`${activeTab === "profile" ? "bg-[#062D5E] text-[#B2DFFF]" : "bg-[#BFE4FF] text-[#062D5E]"} px-6 py-2 rounded-full text-sm font-medium`}
                    >
                        Profile Management
                    </button>
                    <button
                        onClick={() => setActiveTab("billing")}
                        className={`${activeTab === "billing" ? "bg-[#062D5E] text-[#B2DFFF]" : "bg-[#BFE4FF] text-[#062D5E]"} px-6 py-2 rounded-full text-sm font-medium`}
                    >
                        Plan & Billing
                    </button>
                    <button
                        onClick={() => setActiveTab("security")}
                        className={`${activeTab === "security" ? "bg-[#062D5E] text-[#B2DFFF]" : "bg-[#BFE4FF] text-[#062D5E]"} px-6 py-2 rounded-full text-sm font-medium`}
                    >
                        Security
                    </button>
                </div>

                {/* PROFILE MANAGEMENT TAB */}
                {activeTab === "profile" && (
                    <>
                        {/* PROFILE IMAGE */}
                        <div className="px-8 pb-8 flex items-center gap-6 border-b">
                            <div className="w-50 h-50 rounded-full overflow-hidden">
                                <img
                                    src={profileImage}
                                    alt="avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium">
                                    Upload new photo
                                </button>
                                <p className="text-xs text-gray-400 mt-2">
                                    At least 800 × 800 px recommended. <br /> JPG or PNG is Allowed
                                </p>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="px-8 py-8 space-y-6">
                            {/* PERSONAL INFO */}
                            <div className="border rounded-2xl p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-semibold text-lg">Personal Info</h2>
                                    <button
                                        onClick={() => setIsEditOpen(true)}
                                        className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm"
                                    >

                                        <i className="ri-edit-line"></i>
                                        Edit
                                    </button>
                                </div>
                                {isEditOpen && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                                        {/* Modal Box */}
                                        <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">

                                            {/* Header */}
                                            <div className="flex justify-between items-center mb-6">
                                                <h2 className="text-lg font-semibold">Edit Profile</h2>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditOpen(false)}
                                                    className="text-gray-500 hover:text-black"
                                                >
                                                    <i className="ri-close-line text-xl"></i>
                                                </button>
                                            </div>

                                            {/* Form */}
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-semibold mb-1">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#062D5E]"
                                                        placeholder="Full Name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold mb-1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#062D5E]"
                                                        placeholder="Email"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold mb-1">
                                                        Country
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#062D5E]"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold mb-1">
                                                        Bio
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#062D5E]"
                                                        placeholder="Write something about yourself..."
                                                    />
                                                </div>
                                            </div>

                                            {/* Footer */}
                                            <div className="flex justify-end gap-3 mt-6">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditOpen(false)}
                                                    className="px-5 py-2 rounded-xl border text-sm"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="px-6 py-2 rounded-xl bg-[#062D5E] text-white text-sm font-semibold"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-sm font-semibold">Full Name</p>
                                        <p className="text-gray-800">{userDetails?.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Platform Email</p>
                                        <p className="text-gray-800">{userDetails?.nexleadsEmail}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Registered Email</p>
                                        <p className="text-gray-800">{userDetails?.email}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-4 mt-6">
                                    <h2 className="font-semibold text-lg">Bio</h2>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Hi, I'm {userDetails?.name}. 👋
                                    <br />
                                    I'm a passionate designer and developer focused on creating clean,
                                    functional, and user-friendly digital experiences. 🎨💻
                                    <br />
                                    I specialize in modern UI/UX design, web development, and SaaS
                                    dashboard interfaces. 🚀
                                    <br />
                                    My work blends strong visual design with efficient, scalable code. ⚙️✨
                                </p>
                            </div>
                        </div>
                    </>
                )}

                {/* PLAN & BILLING TAB */}
                {activeTab === "billing" && (
                    <>
                        {/* YOUR CURRENT PLAN */}
                        <div className="px-8 py-6 border-b">
                            <h2 className="text-3xl font-medium font-bold mb-6">Your Current Plan</h2>
                            <div className="flex items-start gap-6">
                                <div>
                                    <p className="text-gray-400 text-base mb-1">Basic</p>
                                    <p className="text-5xl font-bold text-gray-400">$0</p>
                                </div>
                                <div className="flex-1 space-y-3 mt-2">
                                    <div className="flex items-center gap-2">
                                        <i className="ri-check-line text-gray-900 text-lg"></i>
                                        <span className="text-base text-black">50 leads/month</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="ri-check-line text-gray-900 text-lg"></i>
                                        <span className="text-base text-black">Basic email templates</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="ri-check-line text-gray-900 text-lg"></i>
                                        <span className="text-base text-black">Limited follow-up tracking</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BILLING CYCLE TOGGLE */}
                        <div className="px-8 py-6">
                            <div className="flex items-center gap-6 bg-[#C1E8FF] rounded-full px-6 py-3 w-fit">

                                {/* Monthly */}
                                <label
                                    className="flex items-center gap-3 cursor-pointer"
                                    onClick={() => setBillingCycle("monthly")}
                                >
                                    <div className="w-6 h-6 rounded-full border-[3px] border-black flex items-center justify-center">
                                        {billingCycle === "monthly" && (
                                            <div className="w-4 h-4 rounded-full bg-[#062D5E]" />
                                        )}
                                    </div>
                                    <span className="text-xl font-medium text-black">Monthly</span>
                                </label>

                                {/* Annually */}
                                <label
                                    className="flex items-center gap-3 cursor-pointer"
                                    onClick={() => setBillingCycle("annually")}
                                >
                                    <div className="w-6 h-6 rounded-full border-[3px] border-black flex items-center justify-center">
                                        {billingCycle === "annually" && (
                                            <div className="w-4 h-4 rounded-full bg-[#062D5E]" />
                                        )}
                                    </div>
                                    <span className="text-xl font-medium text-black">Annually</span>
                                </label>

                                <span className="text-l text-[#2C2C2C] font-medium ml-2">
                                    Save 15%
                                </span>
                            </div>
                        </div>

                        {/* PRICING CARDS */}
                        <div className="px-8 pb-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* FREE PLAN */}
                                <div className="bg-[#001933] rounded-3xl p-8 text-white">
                                    <h3 className="text-base mb-3">Free</h3>
                                    <span className="text-6xl">$0</span>

                                    <p className="text-base text-gray-300 mb-6">Basic Pricing Plan</p>

                                    <button className="w-full bg-gray-600 py-3.5 rounded-xl font-semibold mb-4">
                                        Your Current Plan
                                    </button>

                                    <p className="text-sm text-center text-gray-400 mb-6">
                                        {billingCycle === "monthly" ? "Billed Monthly" : "Billed Annually"}
                                    </p>
                                    <div className="border-t border-gray-700 pt-6 space-y-3"> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">50 leads/month</span> </div> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Basic email templates</span> </div> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Limited follow-up tracking</span> </div> </div>
                                </div>

                                {/* PRO PLAN */}
                                <div className="bg-[#052659] rounded-3xl p-8 text-white">
                                    <h3 className="text-base mb-3">Pro</h3>

                                    <span className="text-6xl">
                                        ${getPrice(pricing.pro)}
                                    </span>

                                    <p className="text-base text-gray-300 mb-6">
                                        Advanced tools for Growing
                                    </p>

                                    <button className="w-full bg-white text-[#001933] py-3.5 rounded-xl font-semibold mb-4">
                                        Upgrade Now
                                    </button>

                                    <p className="text-sm text-center text-gray-400 mb-6">
                                        {billingCycle === "monthly"
                                            ? "Billed Monthly"
                                            : "Billed Annually (15% off)"}
                                    </p>

                                    <div className="border-t border-gray-700 pt-6 space-y-3"> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Unlimited leads</span> </div> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Custom email sequences</span> </div> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Advanced analytics</span> </div> </div>
                                </div>

                                {/* ENTERPRISE PLAN */}
                                <div className="bg-[#001933] rounded-3xl p-8 text-white">
                                    <h3 className="text-base mb-3">Enterprise</h3>

                                    <span className="text-6xl">
                                        ${getPrice(pricing.enterprise)}
                                    </span>
                                    <p className="text-base text-gray-300 mb-6">
                                        Complete Collaboration of tools
                                    </p>

                                    <button className="w-full bg-white text-[#001933] py-3.5 rounded-xl font-semibold mb-4">
                                        Upgrade Now
                                    </button>

                                    <p className="text-sm text-center text-gray-400 mb-6">
                                        {billingCycle === "monthly"
                                            ? "Billed Monthly"
                                            : "Billed Annually (15% off)"}
                                    </p>

                                    <div className="border-t border-gray-700 pt-6 space-y-3"> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">API access</span> </div> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Team collaboration</span> </div> <div className="flex items-center gap-3"> <i className="ri-check-line text-lg"></i> <span className="text-base">Dedicated account manager</span> </div> </div>
                                </div>

                            </div>
                        </div>
                    </>
                )}

                {/* SECURITY TAB */}
                {activeTab === "security" && (
                    <>
                        {/* CHANGE PASSWORD */}
                        <div className="px-8 py-6 border-b">
                            <h2 className="text-2xl font-bold mb-6">Change Password</h2>

                            {/* Current Password */}
                            <div className="mb-6">
                                <label className="block text-base font-semibold text-[#062D5E] mb-3">
                                    Current Password
                                </label>
                                <div className="relative max-w-lg">
                                    <input
                                        type={showCurrentPassword ? "text" : "password"}
                                        placeholder="Enter Current Password"
                                        className="w-full px-6 py-4 pr-14 border border-gray-300 rounded-2xl text-base placeholder-gray-300 focus:outline-none focus:border-[#062D5E]"
                                    />
                                    <button
                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        className="absolute mt-4 right-5 top-1/2 -translate-y-1/2"
                                        type="button"
                                    >
                                        <i className={`${showCurrentPassword ? "ri-eye-line" : "ri-eye-off-line"} text-2xl text-gray-700`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* New Password */}
                            <div className="mb-6">
                                <label className="block text-base font-semibold text-[#062D5E] mb-3">
                                    New Password
                                </label>
                                <div className="relative max-w-lg">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        placeholder="Enter New Password"
                                        className="w-full px-6 py-4 pr-14 border border-gray-300 rounded-2xl text-base placeholder-gray-300 focus:outline-none focus:border-[#062D5E]"
                                    />
                                    <button
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute mt-4 right-5 top-1/2 -translate-y-1/2"
                                        type="button"
                                    >
                                        <i className={`${showNewPassword ? "ri-eye-line" : "ri-eye-off-line"} text-2xl text-gray-700`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* Confirm New Password */}
                            <div className="mb-8">
                                <label className="block text-base font-semibold text-[#062D5E] mb-3">
                                    Confirm New Password
                                </label>
                                <div className="relative max-w-lg">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm New Password"
                                        className="w-full px-6 py-4 pr-14 border border-gray-300 rounded-2xl text-base placeholder-gray-300 focus:outline-none focus:border-[#062D5E]"
                                    />
                                    <button
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute mt-4 right-5 top-1/2 -translate-y-1/2"
                                        type="button"
                                    >
                                        <i className={`${showConfirmPassword ? "ri-eye-line" : "ri-eye-off-line"} text-2xl text-gray-700`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* Update Password Button */}
                            <button className="bg-[#062D5E] text-white px-12 py-3.5 rounded-xl text-base font-semibold hover:bg-[#041d3f] transition-colors">
                                Update Password
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default DashboardSetting