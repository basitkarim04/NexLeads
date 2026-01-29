import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchLeadsModal = ({ isOpen, onClose, onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [platforms, setPlatforms] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

   const {  loading, error } = useSelector(
    (state) => state.userDetail
  );
  
  if (!isOpen) return null;

  const togglePlatform = (platform) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword, platforms, dateFrom, dateTo });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Search Leads</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Keyword */}
          <div>
            <label className="mb-1 block text-sm font-medium">Keyword</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. Web Developer"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Platforms */}
          <div>
            <label className="mb-2 block text-sm font-medium">Platforms</label>
            <div className="flex gap-3">
              {['LinkedIn', 'Upwork', 'Twitter', 'Facebook'].map((platform) => (
                <button
                  type="button"
                  key={platform}
                  onClick={() => togglePlatform(platform)}
                  className={`rounded-lg border px-3 py-1 text-sm transition ${
                    platforms.includes(platform)
                      ? 'bg-[#052659] text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">From</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">To</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-4 py-2 text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#052659] px-4 py-2 text-white hover:underline"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search Leads"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchLeadsModal;