import React, { useState } from 'react'
import SearchLeadsModal from '../../modal/searchLeadsModal';
import { useDispatch, useSelector } from 'react-redux';
import { JobLeads, searchLeads, sendEmails } from '../../../Redux/Features/UserDetailSlice';
import { toast } from 'react-toastify';

const DashboardSearch = () => {
  const dispatch = useDispatch();
  const { userLeads, loading, error } = useSelector(
    (state) => state.userDetail
  );

  const [platformOpen, setPlatformOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [attachments, setAttachments] = useState([]);

  // Drag & Drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setAttachments((prev) => [...prev, ...files]);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    setAttachments((prev) => [...prev, ...files]);
  };



  const onSubmit = async ({ keyword, platforms, dateFrom, dateTo }) => {
    await dispatch(
      searchLeads({
        keyword,
        platforms,
        dateFrom,
        dateTo,
      })
    );

    dispatch(JobLeads());
  };

  const [selectedLeads, setSelectedLeads] = useState([]);

  const toggleLead = (leadId) => {
    if (selectedLeads.includes(leadId)) {
      setSelectedLeads(selectedLeads.filter((id) => id !== leadId));
    } else {
      setSelectedLeads([...selectedLeads, leadId]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedLeads.length === userLeads?.leads?.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(userLeads?.leads?.map((lead) => lead._id));
    }
  };

  const handleSend = async () => {
    if (selectedLeads.length === 0) return toast.info('Select at least 1 lead');

    await dispatch(sendEmails({
      subject,
      body,
      attachments,
      leadIds: selectedLeads,
    }));

    // Clear compose
    setSubject('');
    setBody('');
    setAttachments([]);
    setSelectedLeads([]);
  };


  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">

      {/* LEFT CONTENT — JOB BOARD */}
      <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm border space-y-6">

        {/* Job Board Header */}
        <div className="w-full flex flex-col lg:flex-row gap-6 space-y-6 justify-between">
          <div>
            <h1 className="text-3xl font-medium text-[#000000]">Job Board</h1>
            <p className="text-gray-900 mt-1">
              Find leads, email them, close the deal, and happily earn.
            </p>
          </div>
          <div className="searchLeads">
            <button className="text-sm text-[#FFFFFF] font-medium hover:underline bg-[#052659] pr-5 pl-5 pt-2 pb-2 border border-[#052659] rounded-xl "
              onClick={() => { setSearchOpen(true) }}
            >Search For Leads</button>
          </div>
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
          <div className="w-full xl:w-1/4 relative">
            <button
              onClick={() => setPlatformOpen(!platformOpen)}
              className="w-full flex justify-between items-center px-4 py-3 bg-[#EEF8FF] border border-[#EEF8FF] rounded-xl text-gray-700 text-sm"
            >
              <span className="flex items-center gap-2">
                <i className="ri-apps-2-line text-lg text-gray-900 font-bold"></i>
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


          {/* Filter Button */}
          <button className="w-full xl:w-auto flex items-center gap-2 px-4 py-3 bg-[#EEF8FF] border border-[#EEF8FF] rounded-xl text-gray-700 text-sm">
            <i className="ri-equalizer-line text-lg text-gray-900"></i>
            Date
          </button>

        </div>

        {/* Tags */}
        {/* <div className="flex items-center flex-wrap gap-3">
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
        </div> */}


        {/* Found Jobs */}
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-gray-600">
            found <span className="text-[#9711B9] font-semibold">{userLeads?.count ?? 20}</span> Jobs!
          </p>

          {/* <button className="text-sm text-[#FFFFFF] font-medium hover:underline bg-[#052659] pr-5 pl-5 pt-2 pb-2 border border-[#052659] rounded-xl">
            Select All
          </button> */}
        </div>


        {/* Jobs Table */}
        <div className="overflow-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-2">
                  <input
                    type="checkbox"
                    checked={
                      selectedLeads.length === userLeads?.leads?.length &&
                      userLeads?.leads?.length > 0
                    }
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="py-3 px-2 font-medium text-[#000000]">Name</th>
                <th className="py-3 px-2 font-medium text-[#000000]">Description</th>
                <th className="py-3 px-2 font-medium text-[#000000]">Email</th>
                <th className="py-3 px-2 font-medium text-[#000000]">Platform</th>
                <th className="py-3 px-2 font-medium text-[#000000]">Date</th>
              </tr>
            </thead>

            <tbody>
              {userLeads?.leads?.map((lead, i) => (
                <tr key={i} className="border-b text-gray-700">
                  <td className="py-3 px-2">
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead._id)}
                      onChange={() => toggleLead(lead._id)}
                    />
                  </td>
                  <td className="py-3 px-2">{lead.name}</td>
                  <td className="py-3 px-2">
                    {lead.jobTitle} - {lead.jobField}
                  </td>
                  <td className="py-3 px-2">{lead.email}</td>
                  <td className="py-3 px-2">{lead.platform}</td>
                  <td className="py-3 px-2">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}

              {userLeads?.leads?.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-4 text-center text-gray-500">
                    No leads found
                  </td>
                </tr>
              )}
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
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full mb-3 px-4 py-3 bg-[#EEF8FF] rounded-xl outline-none"
        />

        <textarea
          placeholder="Write your message here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
        <div
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-blue-500', 'bg-blue-50'); }}
          onDragLeave={(e) => e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50')}
          className="mt-5 p-4 border-2 border-dashed border-gray-300 rounded-xl text-center text-sm text-gray-500 hover:border-blue-400 transition"
        >
          <p>Drag & drop files here </p>
          <button
            type="button"
            className="text-blue-600 hover:underline mt-1"
            // onClick={() => fileInputRef.current?.click()}
          >
            browse files
          </button>
          <input type="file" multiple onChange={handleFileInput} className="ml-2" style={{position: 'relative', bottom: '25px', opacity: 0, }} />
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {attachments.map((file, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-200 rounded">{file.name}</span>
          ))}
        </div>


        {/* Send Button */}
        <button
          onClick={handleSend}
          className="w-full mt-6 py-3 bg-[#052659] text-white rounded-xl font-medium hover:bg-blue-800">
          {loading ? "Sending..." : "Send to all Selected"}
        </button>
      </div>

      {searchOpen &&
        <SearchLeadsModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSubmit={onSubmit}
        />
      }
    </div>
  )
}

export default DashboardSearch