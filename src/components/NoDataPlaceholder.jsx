import { BsBarChart } from 'react-icons/bs';

export default function NoDataPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
      <BsBarChart size={32} />
      <span className="mt-2 text-sm">No Graph data available!</span>
    </div>
  );
}
