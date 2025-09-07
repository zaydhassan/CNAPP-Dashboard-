import React, { useState } from "react";
import WidgetCard from "./WidgetCard.jsx";
import MultiSegmentDonutChart from "./MultiSegmentDonutChart.jsx";
import BarIndicator from "./BarIndicator.jsx";
import NoDataPlaceholder from "./NoDataPlaceholder.jsx";
import Topbar from "./Topbar.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialSections = [
  {
    id: "cspm",
    title: "CSPM Executive Dashboard",
    widgets: [
      {
        id: "cloud-accounts",
        title: "Cloud Accounts",
        border: "border-blue-400",
        chart: (
          <MultiSegmentDonutChart
            total={4}
            data={[
              { value: 2, color: "#2563eb" },
              { value: 2, color: "#e5e7eb" },
            ]}
          />
        ),
        info: (
          <>
            <div className="text-gray-600 font-semibold mb-2">2 Total</div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-blue-600 font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Connected (2)
              </div>
              <div className="flex items-center text-gray-400 font-medium">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Not Connected (2)
              </div>
            </div>
          </>
        ),
      },
      {
        id: "risk-assessment",
        title: "Cloud Account Risk Assessment",
        border: "border-green-400",
        chart: (
          <MultiSegmentDonutChart
            total={9659}
            data={[
              { value: 1689, color: "#dc2626" },
              { value: 681, color: "#facc15" },
              { value: 36, color: "#d1d5db" },
              { value: 7253, color: "#22c55e" },
            ]}
          />
        ),
        info: (
          <ul className="space-y-1 text-base font-semibold mt-1">
            <li className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ background: "#dc2626" }}
              ></span>
              <span className="text-red-600">Failed (1689)</span>
            </li>
            <li className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ background: "#facc15" }}
              ></span>
              <span className="text-yellow-600">Warning (681)</span>
            </li>
            <li className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ background: "#d1d5db" }}
              ></span>
              <span className="text-gray-400">Not available (36)</span>
            </li>
            <li className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ background: "#22c55e" }}
              ></span>
              <span className="text-green-600">Passed (7253)</span>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "cwpp",
    title: "CWPP Dashboard",
    widgets: [
      {
        id: "namespace-alerts",
        title: "Top 5 Namespace Specific Alerts",
        border: "border-gray-300",
        content: <NoDataPlaceholder />,
      },
      {
        id: "workload-alerts",
        title: "Workload Alerts",
        border: "border-gray-300",
        content: <NoDataPlaceholder />,
      },
    ],
  },
  {
    id: "registry",
    title: "Registry Scan",
    widgets: [
      {
        id: "image-risk",
        title: "Image Risk Assessment",
        border: "border-red-400",
        info: (
          <>
            <div className="font-bold text-lg text-gray-700 mb-2">
              1470 Total Vulnerabilities
            </div>
            <BarIndicator
              data={[
                { label: "Critical", value: 9, color: "#dc2626" },
                { label: "High", value: 150, color: "#f59e0b" },
                { label: "Medium", value: 741, color: "#fbbf24" },
                { label: "Low", value: 570, color: "#22c55e" },
              ]}
            />
          </>
        ),
      },
      {
        id: "image-security",
        title: "Image Security Issues",
        border: "border-yellow-400",
        info: (
          <>
            <div className="font-bold text-lg text-gray-700 mb-2">
              2 Total Images
            </div>
            <BarIndicator
              data={[
                { label: "Critical", value: 2, color: "#dc2626" },
                { label: "High", value: 2, color: "#f59e0b" },
                { label: "Medium", value: 2, color: "#fbbf24" },
              ]}
            />
          </>
        ),
      },
    ],
  },
];

const allPossibleWidgets = [
  {
    id: "cloud-accounts",
    name: "Cloud Accounts",
    categoryId: "cspm",
  },
  {
    id: "risk-assessment",
    name: "Cloud Account Risk Assessment",
    categoryId: "cspm",
  },
  {
    id: "namespace-alerts",
    name: "Top 5 Namespace Specific Alerts",
    categoryId: "cwpp",
  },
  {
    id: "workload-alerts",
    name: "Workload Alerts",
    categoryId: "cwpp",
  },
  {
    id: "image-risk",
    name: "Image Risk Assessment",
    categoryId: "registry",
  },
  {
    id: "image-security",
    name: "Image Security Issues",
    categoryId: "registry",
  },
  {
    id: "custom-widget-1",
    name: "Custom Widget 1",
    categoryId: "cspm",
  },
  {
    id: "custom-widget-2",
    name: "Custom Widget 2",
    categoryId: "cwpp",
  },
];

export default function DashboardGrid() {
  const [sections, setSections] = useState(initialSections);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWidgets, setFilteredWidgets] = useState(allPossibleWidgets);

    function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    }

  function openAddWidgetModal(categoryId) {
    setCurrentCategory(categoryId);
    setSearchTerm("");
    setFilteredWidgets(allPossibleWidgets.filter((w) => w.categoryId === categoryId));
    setIsAddModalOpen(true);
  }

  function closeAddWidgetModal() {
    setIsAddModalOpen(false);
    setCurrentCategory(null);
  }

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = allPossibleWidgets
      .filter((w) => w.categoryId === currentCategory)
      .filter((w) => w.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredWidgets(filtered);
  }

  function addWidget(widget) {
    if (!widget) return;
    setSections((prev) =>
      prev.map((cat) => {
        if (cat.id === currentCategory) {
          const exists = cat.widgets.find((w) => w.id === widget.id);
          if (exists) return cat; // avoid duplicates
          let widgetContent = {
            id: widget.id,
            title: widget.name,
            border: "border-indigo-400",
            content: <p>{`Widget content for ${widget.name}`}</p>,
          };
          return { ...cat, widgets: [...cat.widgets, widgetContent] };
        }
        return cat;
      })
    );
    toast.success(`${widget.name} added!`);
  }

  function removeWidget(categoryId, widgetId) {
    setSections((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            widgets: cat.widgets.filter((w) => w.id !== widgetId),
          };
        }
        return cat;
      })
    );
    toast.success(`Widget removed!`);
  }

  return (
    <>
     
      <ToastContainer position="top-right" autoClose={1800} />
      <h1 className="text-3xl font-bold mb-6">CNAPP Dashboard</h1>
      {sections.map((category) => (
        <section key={category.id} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{category.title}</h2>
          
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="relative">
                <WidgetCard
                  title={widget.title}
                  border={widget.border}
                  chart={widget.chart}
                  info={widget.info}
                  content={widget.content}
                  add={widget.add}
                />
                <button
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold"
                  onClick={() => removeWidget(category.id, widget.id)}
                >
                  ×
                </button>
              </div>
            ))}
            
            <div className="flex items-center justify-center">
              <button
                className="w-full h-full min-h-[200px] text-[#2564eb94] border-2 border-[rgba(37,100,235,0.1)] rounded-xl px-5 py-2 font-semibold hover:bg-[#2564eb56] hover:text-white transition"
                onClick={() => openAddWidgetModal(category.id)}
              >
                + Add Widget
              </button>
            </div>
          </div>
        </section>
      ))}

      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded shadow-lg p-6 w-96 max-w-full">
            <h3 className="text-xl font-semibold mb-4">
              Add Widget to {sections.find((c) => c.id === currentCategory)?.title || ""}
            </h3>

            <input
              type="text"
              placeholder="Search widgets"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded w-full px-3 py-2 mb-4"
            />
            <ul className="max-h-60 overflow-auto">
              {filteredWidgets.length === 0 && <li className="text-gray-500 py-2">No widgets found</li>}
              {filteredWidgets.map((widget) => (
                <li
                  key={widget.id}
                  className="cursor-pointer hover:bg-blue-50 px-3 py-2 rounded flex justify-between items-center"
                >
                  <span>{widget.name}</span>
                  <button
                    className="text-blue-600 font-semibold hover:underline"
                    onClick={() => addWidget(widget)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}