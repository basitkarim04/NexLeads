import React, { useState, useRef, useEffect } from 'react';
import { Search, Mail, Clock, Folder, Moon, LogOut, Settings, Bell, Grid, ArrowUpRight, User, Menu } from 'lucide-react';
import nexLeadlogo from "../assets/Images/nexLeadLogo.png";

const Dashboard = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(() => {
  return localStorage.getItem("activePage") || "dashboard";
});
    const [activeFolder, setActiveFolder] = useState("inbox");
  const [selectedMail, setSelectedMail] = useState(null);
    const [isComposing, setIsComposing] = useState(false);
  const [composeData, setComposeData] = useState({
  to: "",
  subject: "",
  body: ""
});
const [selectedItem, setSelectedItem] = useState(null);


const [open, setOpen] = useState(false);

  // ⬇️ Sidebar reference for outside click detection
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    }

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  useEffect(() => {
  localStorage.setItem("activePage", activePage);
}, [activePage]);

useEffect(() => {
  localStorage.setItem("activeFolder", activeFolder);
}, [activeFolder]);

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

  
const folders = {
  inbox: [
    {
      id: 1,
      sender: "Anas R.",
      subject: "Meeting reschedule",
      preview: "Can we move our...",
      body:
        "Hi Mohsin,\n\nCan we move our meeting to tomorrow?\n\nRegards,\nAnas",
      date: "10:20 AM",
      from: "anas@gmail.com",
    },
    {
      id: 2,
      sender: "Basit Karim",
      subject: "Web dev Proposal",
      preview: "Hi Mohsin, I have seen...",
      body:
        "Hi Mohsin,\n\nI have seen your proposal. I really liked it.\n\nRegards,\nBasit",
      date: "Yesterday",
      from: "basit@gmail.com",
    },
  ],

  sent: [
    {
      id: 3,
      sender: "Me",
      subject: "Project Update",
      preview: "Hi Nex Leads...",
      body: "Here is the project update.",
      date: "9:15 AM",
      from: "me@nexleads.com",
    },
  ],

  drafts: [
    {
      id: 4,
      sender: "Draft",
      subject: "Unfinished Proposal",
      preview: "Still working on...",
      body: "Draft content here...",
      date: "1w ago",
      from: "me@nexleads.com",
    },
  ],

  spam: [],
  trash: [],
};
  const mails = folders[activeFolder] || [];

const folderIcons = {
  inbox: "ri-inbox-line",
  sent: "ri-send-plane-line",
  drafts: "ri-draft-line",
  spam: "ri-spam-2-line",
  trash: "ri-delete-bin-line",
};

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm md:text-base text-gray-600">Plan, prioritize, and accomplish your task with ease</p>
            </div>

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
                </div>
              </div>

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
            </div>
          </>
        );

      case "search":
        return (<div className="w-full flex flex-col lg:flex-row gap-6">

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
);

case "emails":
  const foldersList = ["compose", "inbox", "sent", "drafts", "spam", "trash"];
  return (<div className="h-full w-full main-email">
   <div className="h-full w-full bg-[#EEF8FF] email-desktop-version mx-auto">
  <div className="h-full bg-white rounded-2xl overflow-hidden flex">

    {/* ================= SIDEBAR ================= */}
    <aside className="w-64 bg-[#072A5A] text-white h-full p-4 hidden md:flex flex-col rounded-l-2xl">
      <h2 className="text-xl font-bold mb-6 capitalize">{activeFolder}</h2>

      <nav className="space-y-2 text-sm">
        {foldersList.map((folder) => {
          if (folder === "compose") {
            return (
              <div
                key="compose"
onClick={() => {
  setIsComposing(true);
  setSelectedMail(null);
  setComposeData({ to: "", subject: "", body: "" });
  setActiveFolder("compose");
}}
                className="flex items-center gap-3 bg-[#EEF8FF] hover:bg-[#5F81AF] hover:text-white text-[#052659] px-3 py-2 rounded-lg cursor-pointer"
              >
                <i className="ri-pencil-line text-base"></i>
                <span className="font-medium">Compose</span>
              </div>
            );
          } else {
            return (
              <div
                key={folder}
                onClick={() => {
                  setActiveFolder(folder);
                  setSelectedMail(null);
                  setIsComposing(false);
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                  ${
                    activeFolder === folder
                      ? "bg-[#5F81AF] text-white"
                      : "hover:bg-[#5F81AF] hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <i className={`${folderIcons[folder]} text-base`}></i>
                  <span className="capitalize">{folder}</span>
                </div>

                {folders[folder]?.length > 0 && (
                  <span className="bg-white text-[#072A5A] text-xs px-2 rounded-full font-semibold">
                    {folders[folder].length}
                  </span>
                )}
              </div>
            );
          }
        })}
      </nav>
    </aside>

    {/* ================= MAIL LIST ================= */}
    {!isComposing && (
      <section
        className={`flex-1 border-r overflow-auto ${
          activeFolder === "drafts" ? "" : ""
        }`}
      >
          <>
            {/* Search */}
            <div className="p-4 border-b">
              <div className="flex items-center max-w-xs bg-[#EEF8FF] px-3 py-2 rounded-lg">
                <i className="ri-search-line text-gray-600"></i>
                <input
                  placeholder="Search Mail"
                  className="ml-2 w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Header */}
            <div className="hidden md:grid grid-cols-12 font-semibold px-4 py-2 text-xs text-[#052659] border-b">
              <div className="col-span-3">Sender</div>
              <div className="col-span-6">Subject</div>
              <div className="col-span-3 text-right">Date</div>
            </div>
          </>

        {/* Emails List */}
        <div>
          {mails.map((mail) => (
            <div
              key={mail.id}
              onClick={() => {
                if (activeFolder === "drafts") {
                  setIsComposing(true);
                  setComposeData({ subject: mail.subject, body: mail.body });
                  setSelectedMail(null);
                } else {
                  setSelectedMail(mail);
                  setIsComposing(false);
                }
              }}
              className={`group px-4 py-3 cursor-pointer md:grid md:grid-cols-12 transition-colors
                ${
                  selectedMail?.id === mail.id
                    ? "bg-[#072A5A] text-white"
                    : "bg-[#EEF8FF] hover:bg-[#072A5A] hover:text-white"
                }`}
            >
              <div className="md:col-span-3 font-medium text-sm">{mail.sender}</div>
              <div className="md:col-span-6">
                <div className="font-semibold text-sm">{mail.subject}</div>
                <div className="text-xs opacity-70 truncate">{mail.preview}</div>
              </div>
              <div className="md:col-span-3 text-xs md:text-right opacity-70">{mail.date}</div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* ================= COMPOSE / PREVIEW ================= */}
    {isComposing ? (
      // Compose takes full panel width
      <aside className="w-full bg-[#EEF8FF] p-4 rounded-r-2xl">
        <div className="bg-white rounded-3xl p-6 shadow-sm border h-full flex flex-col">
          <h2 className="text-xl font-medium mb-4 text-center">
            {activeFolder === "drafts" ? "Edit Draft" : "Compose Mail"}
          </h2>

         <input
  type="email"
  placeholder="To"
  value={composeData.to}
  onChange={(e) =>
    setComposeData({ ...composeData, to: e.target.value })
  }
  className="w-full mb-3 px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none"
/>

<input
  type="text"
  placeholder="Subject"
  value={composeData.subject}
  onChange={(e) =>
    setComposeData({ ...composeData, subject: e.target.value })
  }
  className="w-full mb-3 px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none"
/>

          <textarea
            placeholder="Your Message..."
            rows={8}
            value={composeData.body}
            onChange={(e) => setComposeData({ ...composeData, body: e.target.value })}
            className="w-full px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none resize-none flex-1"
          />

          {/* Formatting buttons */}
          <div className="flex items-center gap-4 mt-4 text-gray-700 px-2">
            <b>B</b>
            <i>I</i>
            <u>U</u>
            <i className="ri-list-unordered"></i>
            <i className="ri-list-ordered"></i>
            <span>Cc Bcc</span>
            <button className="px-3 py-1 bg-[#EEF8FF] rounded-lg text-sm">AI Assist</button>
          </div>

          <button className="w-full mt-6 py-3 bg-[#052659] text-white rounded-xl font-medium">
            Send
          </button>
        </div>
      </aside>
    ) : (
      // Preview stays narrow
      <aside className="w-[360px] bg-[#EEF8FF] p-4 rounded-r-2xl hidden lg:block">
        {selectedMail ? (
          <>
                <div className="relative flex justify-end gap-2 mb-4">
      <button className="flex items-center gap-1 bg-[#C1E8FF] px-3 py-1 rounded text-xs">
        <i className="ri-reply-line"></i> Reply
      </button>

      <button className="flex items-center gap-1 bg-[#C1E8FF] px-3 py-1 rounded text-xs">
        <i className="ri-share-forward-line"></i> Forward
      </button>

      <button className="flex items-center gap-1 bg-[#C1E8FF] px-3 py-1 rounded text-xs">
        <i className="ri-delete-bin-line"></i> Delete
      </button>

      {/* 3 dots button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#C1E8FF] px-2 py-1 rounded text-xs"
      >
        <i className="ri-more-2-fill text-base"></i>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-9 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
          <button
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
            onClick={() => {
              setOpen(false);
              // handle mark as ongoing here
            }}
          >
            Mark as Ongoing
          </button>
        </div>
      )}
    </div>

            <div className="text-sm space-y-2 border-y py-4">
              <p><strong>Subject:</strong> {selectedMail.subject}</p>
              <p><strong>From:</strong> {selectedMail.from}</p>
            </div>

            <div className="mt-4 whitespace-pre-line text-sm">{selectedMail.body}</div>
          </>
        ) : (
          <p className="text-center text-sm text-gray-500 mt-10">Select an email</p>
        )}
      </aside>
    )}

  </div>

</div>

{/* ================= SMALLER SCREENS VERSION ================= */}
<div className="h-full w-full bg-[#EEF8FF] email-desktop-smaller-version mx-auto hidden">
  <div className="h-full bg-white rounded-2xl overflow-hidden flex flex-col">

    {/* ================= FOLDER NAVIGATION ================= */}
    <aside className="w-full bg-[#072A5A] text-white p-4 flex flex-row overflow-x-auto gap-2">
      {foldersList.map((folder) => {
        if (folder === "compose") {
          return (
            <div
              key="compose"
              onClick={() => {
                setIsComposing(true);
                setSelectedMail(null);
                setComposeData({ to: "", subject: "", body: "" });
                setActiveFolder("compose");
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm
                ${activeFolder === "compose" ? "bg-[#5F81AF]" : "hover:bg-[#5F81AF]"}`}
            >
              <i className="ri-pencil-line text-base"></i>
              <span>Compose</span>
            </div>
          );
        } else {
          return (
            <div
              key={folder}
              onClick={() => {
                setActiveFolder(folder);
                setSelectedMail(null);
                setIsComposing(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm
                ${activeFolder === folder ? "bg-[#5F81AF]" : "hover:bg-[#5F81AF]"}`}
            >
              <i className={`${folderIcons[folder]} text-base`}></i>
              <span className="capitalize">{folder}</span>
              {folders[folder]?.length > 0 && (
                <span className="bg-white text-[#072A5A] text-xs px-2 rounded-full font-semibold">
                  {folders[folder].length}
                </span>
              )}
            </div>
          );
        }
      })}
    </aside>

    {/* ================= MAIL LIST ================= */}
    {!isComposing && activeFolder !== "compose" && selectedMail === null && (
      <section className="w-full border-b overflow-auto">
        {folders[activeFolder]?.map((mail) => (
          <div
            key={mail.id}
            onClick={() => {
              if (activeFolder === "drafts") {
                setIsComposing(true);
                setComposeData({ subject: mail.subject, body: mail.body });
                setSelectedMail(null);
              } else {
                setIsComposing(false);
                setSelectedMail(mail); // show preview fullscreen
              }
            }}
            className="group px-4 py-3 cursor-pointer transition-colors bg-[#EEF8FF] hover:bg-[#072A5A] hover:text-white border-b border-[#5F81AF]"
          >
            <div className="font-medium text-sm">{mail.sender}</div>
            <div className="font-semibold text-sm">{mail.subject}</div>
            <div className="text-xs opacity-70 truncate">{mail.preview}</div>
            <div className="text-xs opacity-70 text-right">{mail.date}</div>
          </div>
        ))}
      </section>
    )}

    {/* ================= PREVIEW / COMPOSE FULL SCREEN ================= */}
    {(isComposing || selectedMail) && (
      <aside className="w-full bg-[#EEF8FF] p-4 flex-1">
        {isComposing ? (
          <div className="bg-white rounded-3xl p-6 shadow-sm border h-full flex flex-col">
            <h2 className="text-xl font-medium mb-4 text-center">
              {activeFolder === "drafts" ? "Edit Draft" : "Compose Mail"}
            </h2>

           <input
  type="email"
  placeholder="To"
  value={composeData.to}
  onChange={(e) =>
    setComposeData({ ...composeData, to: e.target.value })
  }
  className="w-full mb-3 px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none"
/>

<input
  type="text"
  placeholder="Subject"
  value={composeData.subject}
  onChange={(e) =>
    setComposeData({ ...composeData, subject: e.target.value })
  }
  className="w-full mb-3 px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none"
/>

            <textarea
              placeholder="Your Message..."
              rows={8}
              value={composeData.body}
              onChange={(e) => setComposeData({ ...composeData, body: e.target.value })}
              className="w-full px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none resize-none flex-1"
            />

            <div className="flex items-center gap-4 mt-4 text-gray-700 px-2">
              <b>B</b>
              <i>I</i>
              <u>U</u>
              <i className="ri-list-unordered"></i>
              <i className="ri-list-ordered"></i>
              <span>Cc Bcc</span>
              <button className="px-3 py-1 bg-[#EEF8FF] rounded-lg text-sm">AI Assist</button>
            </div>

            <button className="w-full mt-6 py-3 bg-[#052659] text-white rounded-xl font-medium">
              Send
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 shadow-sm border h-full flex flex-col">
            <div className="flex justify-end gap-2 mb-4">
              <button className="flex items-center gap-1 bg-[#C1E8FF] px-3 py-1 rounded text-xs">
                <i className="ri-reply-line"></i> Reply
              </button>
              <button className="flex items-center gap-1 bg-[#C1E8FF] px-3 py-1 rounded text-xs">
                <i className="ri-share-forward-line"></i> Forward
              </button>
              <button className="flex items-center gap-1 bg-[#C1E8FF] px-3 py-1 rounded text-xs">
                <i className="ri-delete-bin-line"></i> Delete
              </button>
            </div>

            <div className="text-sm space-y-2 border-y py-4">
              <p><strong>Subject:</strong> {selectedMail.subject}</p>
              <p><strong>From:</strong> {selectedMail.from}</p>
            </div>

            <div className="mt-4 whitespace-pre-line text-sm">{selectedMail.body}</div>
          </div>
        )}
      </aside>
    )}
  </div>
</div>


</div>
  );

      case "tasks":
        return (
      <div className="bg-white rounded-3xl p-5 md:p-8">

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

          <div className="flex items-center gap-2 bg-[#EAF6FF] px-4 py-2 rounded-xl text-sm text-gray-500">
            <i className="ri-stack-line"></i>
            Platforms
            <i className="ri-arrow-down-s-line"></i>
          </div>

          <div className="flex items-center gap-2 bg-[#EAF6FF] px-4 py-2 rounded-xl text-sm text-gray-500">
            <i className="ri-loader-3-line"></i>
            Status
            <i className="ri-arrow-down-s-line"></i>
          </div>

          <button className="ml-auto flex items-center gap-2 bg-[#EAF6FF] px-5 py-2 rounded-xl text-sm text-[#0A2A55]">
            <i className="ri-equalizer-line"></i>
            Filter
          </button>
        </div>
          <hr className="mb-6 border-t border-[#C3C3C3]" />

       

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {[
            "Website Developer",
            "Graphic Designing",
            "SEO",
            "3d Animation",
            "Social Media Marketing",
            "Ecommerce",
          ].map((title, i) => (
            <div key={i} className="bg-[#EEF8FF] rounded-2xl p-5">

              <p className="text-sm text-gray-400 mb-2">
                08-01-2026 [{title}]
              </p>

              {/* Platforms */}
              <div className="flex gap-2 mb-4">
                <span
                  className="px-3 py-1 text-xs rounded-full border"
                  style={{
                    backgroundColor: "#D2F5FF",
                    borderColor: "#029FCA",
                    color: "#029FCA",
                  }}
                >
                  Twitter
                </span>

                <span
                  className="px-3 py-1 text-xs rounded-full border"
                  style={{
                    backgroundColor: "#FFD9D5",
                    borderColor: "#EA4335",
                    color: "#EA4335",
                  }}
                >
                  Google
                </span>
              </div>

              {/* Stats Header */}
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


              {/* Detailed Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="border rounded-xl py-3 text-center" style={{ borderColor: "#7DA0CA" }}>
                <i className="ri-eye-line text-[#0A2A55]"></i>
                <p className="font-semibold text-[#0A2A55]">20</p>
                <p className="text-xs text-gray-400">Opened</p>
              </div>

              <div className="border rounded-xl py-3 text-center" style={{ borderColor: "#7DA0CA" }}>
                <i className="ri-reply-line text-[#0A2A55]"></i>
                <p className="font-semibold text-[#0A2A55]">25</p>
                <p className="text-xs text-gray-400">Replied</p>
              </div>

              <div className="border rounded-xl py-3 text-center" style={{ borderColor: "#7DA0CA" }}>
                <i className="ri-close-circle-line text-[#0A2A55]"></i>
                <p className="font-semibold text-[#0A2A55]">0</p>
                <p className="text-xs text-gray-400">Bounced</p>
              </div>
            </div>


              {/* Button */}
              <button className="w-full bg-[#7DA0CA] hover:bg-[#7AA4CE] text-white py-2 rounded-xl text-sm flex items-center justify-center gap-2">
                <i className="ri-send-plane-line"></i>
                Send Follow-Up
              </button>

            </div>
          ))}
        </div>
      </div>
    
  );

      case "projects":
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
          <div className="bg-[#C1E8FF] flex items-center justify-between mb-4 p-4 rounded-t-2xl">
            <h2 className="font-semibold text-lg">In Discussion</h2>
            <i className="ri-more-2-fill text-xl cursor-pointer"></i>
          </div>

          <div className="space-y-4 p-4">
            {[
              { title: "Website Redesign", company: "Acme Inc.", date: "10 January 2025" },
              { title: "App Dev", company: "Brand Revamp.", date: "10 January 2025" },
              { title: "SEO Optimization", company: "Wanderluster co.", date: "10 January 2025" },
            ].map((item, i) => (
              <div
  key={i}
  onClick={() => setSelectedItem(item)}
  className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition"
>
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
            Discussion
          </span>
          <button onClick={() => setSelectedItem(null)}>
            <i className="ri-close-line text-xl"></i>
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
            Discussion
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold mb-1">Details</h3>
          <p className="text-sm text-gray-600">
            Seeking a skilled professional to design and implement a comprehensive
            sales automation system for our organization. The solution should
            streamline sales processes, including lead management, follow-ups,
            and client communications.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Objectives:</h3>
          <ul className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
            <li>Automate lead capturing and assignment to reduce manual effort.</li>
            <li>Improve follow-up efficiency through automated reminders.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Deliverables:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Fully functional sales automation workflow</li>
            <li>Email or CRM integration (if applicable)</li>
          </ul>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t flex justify-end">
        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm">
          Mark as Ongoing
        </button>
      </div>

    </div>
  </div>
)}

          </div>
        </div>

        {/* ================= ONGOING ================= */}
        <div className="bg-[#EEF8FF] rounded-t-2xl">
          <div className="bg-[#C1E8FF] flex items-center justify-between mb-4 p-4 rounded-t-2xl">
            <h2 className="font-semibold text-lg">Ongoing</h2>
            <i className="ri-more-2-fill text-xl cursor-pointer"></i>
          </div>

          <div className="space-y-4 p-4">
            {[
              { title: "Sales Automation", company: "BizTech LLC.", date: "15 January 2025" },
              { title: "Social Media Man...", company: "Connect Media.", date: "15 January 2025" },
              { title: "CRM Implement...", company: "Vertex Solutions.", date: "15 January 2025" },
              { title: "Content Writing", company: "BizTech LLC.", date: "15 January 2025" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
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
          <div className="bg-[#C1E8FF] flex items-center justify-between mb-4 p-4 rounded-t-2xl">
            <h2 className="font-semibold text-lg">Completed</h2>
            <i className="ri-more-2-fill text-xl cursor-pointer"></i>
          </div>

          <div className="bg-[#EEF8FF] space-y-4 p-4">
            {[
              { title: "Web App Dev...", company: "Inno Soft Tech.", date: "8 January 2025" },
              { title: "Content Writing Ca...", company: "Blumesoft.", date: "15 January 2025" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
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
  );


      default:
        return <h1 className="text-3xl font-bold">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{background: '#FFF'}}>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        sidebar-menu md:translate-x-0 w-24 h-screen flex-shrink-0 flex flex-col items-center py-6 fixed md:sticky top-0 left-0 z-50 
        transition-transform duration-300 md:transition-none`} 
      >

<div className="mb-5 flex justify-center">
  <img
    src={nexLeadlogo}    // <-- replace with your actual logo path
    alt="Nex Leads Logo"
    className="w-25 md:w-20 lg:w-25 h-auto object-contain"
  />
</div>

        {/* Navigation Icons */}
        <div className="flex-1 flex flex-col items-center space-y-3 overflow-y-auto">
          {[
            { icon: Grid, page: "dashboard" },
            { icon: Search, page: "search" },
            { icon: Mail, page: "emails" },
            { icon: Clock, page: "tasks" },
            { icon: Folder, page: "projects" }
          ].map(({ icon: Icon, page }, i) => (
            <button
              key={i}
              onClick={() => setActivePage(page)}
              className={`p-3 rounded-xl transition ${
                activePage === page ? "bg-[#5F81AF] text-white text-bold" : "text-white"
              }`}
            >
              <Icon size={24} />
            </button>
          ))}
        </div>

        {/* Bottom icons */}
        <div className="flex flex-col items-center space-y-3 mt-auto">
          <button className="p-3 text-white hover:bg-white/20 rounded-xl transition"><LogOut size={24} /></button>
          <button className="p-3 text-white hover:bg-white/20 rounded-xl transition"><Settings size={24} /></button>
          <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
            <User size={24} className="text-blue-900" />
          </div>
        </div>

      </div>

      {/* Main Section */}
      <div className="main-section flex-1 flex flex-col overflow-hidden w-full md:w-auto">

         {/* HEADER */}
      <div className="main-section-header bg-[#EEF8FF] flex items-center justify-between px-2 md:px-4 py-3">

        {/* Sidebar Toggle (Mobile only) */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg mr-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>

        {/* DESKTOP SEARCH BAR */}
        <div className="hidden md:flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 py-2 bg-white border border-white rounded-xl">
          <i className="ri-search-line text-lg text-gray-900 font-bold"></i>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-700 ml-2 text-sm px-2 py-2"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center space-x-2 md:space-x-4">

          {/* MOBILE SEARCH ICON (toggles search bar) */}
          <button
            className="md:hidden"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <i className="ri-search-line text-xl text-gray-900"></i>
          </button>

          {/* USER */}
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

      {/* MOBILE SEARCH BAR — appears ONLY when clicking search icon */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileSearchOpen ? "max-h-[80px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="m-auto flex items-center w-[90%] px-4 py-4 bg-[#EEF8FF] border border-white rounded-[30px]">
          <i className="ri-search-line text-lg text-gray-900 font-bold"></i>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-700 ml-2 text-sm px-2 py-2"
          />
        </div>
      </div>


        {/* Dynamic Page Content */}
        <div className="dyanamic-page-content flex-1 overflow-auto p-4 md:p-6 lg:p-8 bg-blue-50 space-y-5">
          {renderPage()}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
