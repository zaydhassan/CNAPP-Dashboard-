import { FiPlus, FiRepeat, FiMoreVertical, FiBell } from "react-icons/fi";

export default function Topbar() {
  return (
    <div>
      <div className="flex items-center justify-between px-6 pt-3 pb-3 bg-[#f6f9fb]">
      
        <div className="flex items-center min-w-max">
          <span className="text-sm text-gray-400 mr-1">Home &gt; </span>
          <span className="text-sm text-blue-800 font-semibold">Dashboard V2</span>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            className="w-[520px] px-4 py-1 rounded-xl border border-[#e6eaf2] bg-white focus:outline-none focus:border-blue-400 shadow-sm placeholder-gray-400 text-base"
            type="text"
            placeholder="Search anything..."
          />
        </div>
        <div className="flex items-center gap-4 min-w-max">
          <button className="bg-white border border-[#d1d5db] shadow-sm p-2 rounded-full hover:bg-gray-100">
            <FiBell className="text-gray-500" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img
              src="https://img.freepik.com/premium-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
     
      <div className="border-b border-[#e6eaf2]" />
     
      <div className="flex items-center justify-end gap-3 px-6 py-3 bg-[#f6f9fb]">
        <button className="flex items-center gap-2 bg-white border border-[#d1d5db] shadow-sm px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition">
          <FiPlus className="text-[#2563eb]" />
          Add Widget
        </button>
        <button className="bg-white border border-[#d1d5db] shadow-sm p-2 rounded-xl hover:bg-gray-100">
          <FiRepeat className="text-gray-500" />
        </button>
        <button className="bg-white border border-[#d1d5db] shadow-sm p-2 rounded-xl hover:bg-gray-100">
          <FiMoreVertical className="text-gray-500" />
        </button>
        <select className="border border-[#2563eb] px-4 py-2 rounded-xl text-base bg-white shadow-sm font-semibold text-[#2563eb] focus:outline-none">
          <option>Last 2 days</option>
          <option>Last 7 days</option>
        </select>
      </div>
    </div>
  );
}