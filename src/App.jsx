import Topbar from './components/Topbar.jsx';
import DashboardGrid from './components/DashboardGrid.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f9fb]">
      <Topbar />
      <DashboardGrid />
    </div>
  );
}