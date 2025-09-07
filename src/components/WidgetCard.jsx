export default function WidgetCard({ title, border, chart, info, content, add }) {
  return (
    <div className={`bg-white rounded-2xl shadow ${border ? border + " border-l-4" : ""} p-6 flex min-h-[210px] items-center`}>
      {add ? (
        <button className="text-[#2563eb] border-2 border-[#2563eb] rounded-xl px-5 py-2 font-semibold m-auto hover:bg-[#2563eb] hover:text-white transition-colors">
          + Add Widget
        </button>
      ) : (
        <div className="flex flex-col justify-center w-full h-full">
          
          <span className="font-bold text-gray-500 text-sm mb-10">{title}</span>
          
          {content ? (
            <div>{content}</div>
          ) : (
            <div className="flex flex-row items-start w-full">
              <div className="mr-10">{chart}</div>
              <div className="flex flex-col justify-center w-full">{info}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
