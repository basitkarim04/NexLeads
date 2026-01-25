import React, { useState, useEffect } from 'react';

const Dashboardemail = () => {
    const foldersList = ["compose", "inbox", "sent", "drafts", "spam", "trash"];


    const [open, setOpen] = useState(false);
    const [activeFolder, setActiveFolder] = useState("inbox");
    const [selectedMail, setSelectedMail] = useState(null);
    const [isComposing, setIsComposing] = useState(false);
    const [composeData, setComposeData] = useState({
        to: "",
        subject: "",
        body: ""
    });


    useEffect(() => {
        localStorage.setItem("activeFolder", activeFolder);
    }, [activeFolder]);

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


    return (
        <div className="h-full w-full main-email">
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
                                        ${activeFolder === folder
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
                            className={`flex-1 border-r overflow-auto ${activeFolder === "drafts" ? "" : ""
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
                                        ${selectedMail?.id === mail.id
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
                                                    Mark as Discussion
                                                </button>
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
                                <div className="relative bg-white rounded-3xl p-6 shadow-sm border h-full flex flex-col">
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
                                        <button
                                            onClick={() => setOpen(!open)}
                                            className="bg-[#C1E8FF] px-2 py-1 rounded text-xs"
                                        >
                                            <i className="ri-more-2-fill text-base"></i>
                                        </button>

                                        {open && (
                                            <div className="absolute right-0 mt-9 mr-9 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                                                <button
                                                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                                >
                                                    Mark as Discussion
                                                </button>
                                                <button
                                                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                                    onClick={() => {
                                                        setOpen(false);
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
                                </div>
                            )}
                        </aside>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Dashboardemail