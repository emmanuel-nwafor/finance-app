export default function SideBar() {
  return (
    <>
      {/* Sidebar for larger screens */}
      <aside
        className="fixed h-screen w-[250px] text-gray-400 bg-zinc-900 rounded-tr-[20px] rounded-br-[20px] 
          sm:flex md:block lg:flex-col xl:flex-col hidden flex-col justify-between"
      >
        <div>
          <h1 className="font-bold text-2xl p-6">finance</h1>
          <div>
            <p className=" hover:border-r-2 border-teal-500 m-0 p-5 hover:bg-neutral-200 transition-all mr-5 rounded-tr-[20px] rounded-br-[20px] hover:text-black font-semibold flex">
              <i className="bg-black hover:text-teal-500 p-1 rounded-full m-2"></i> Overview
            </p>
            <p className=" hover:border-r-2 border-teal-500 m-0 p-5 hover:bg-neutral-200 transition-all mr-5 rounded-tr-[20px] rounded-br-[20px] hover:text-black font-semibold flex">
              <i className="bg-black hover:text-teal-500 p-1 rounded-full m-2"></i> Transactions
            </p>
            <p className=" hover:border-r-2 border-teal-500 m-0 p-5 hover:bg-neutral-200 transition-all mr-5 rounded-tr-[20px] rounded-br-[20px] hover:text-black font-semibold flex">
              <i className="bg-black hover:text-teal-500 p-1 rounded-full m-2"></i> Budgets
            </p>
            <p className=" hover:border-r-2 border-teal-500 m-0 p-5 hover:bg-neutral-200 transition-all mr-5 rounded-tr-[20px] rounded-br-[20px] hover:text-black font-semibold flex">
              <i className="bg-black hover:text-teal-500 p-1 rounded-full m-2"></i> Pots
            </p>
            <p className=" hover:border-r-2 border-teal-500 m-0 p-5 hover:bg-neutral-200 transition-all mr-5 rounded-tr-[20px] rounded-br-[20px] hover:text-black font-semibold flex">
              <i className="bg-black hover:text-teal-500 p-1 rounded-full m-2"></i> Recurring Bills
            </p>
          </div>
        </div>

        <footer className="p-10 text-[10px] md:block lg:hidden xl:hidden">
          © {new Date().getFullYear()} Attendance System. All Rights Reserved.
        </footer>
      </aside>

      {/* Mobile Tabs for smaller screens */}
      <div
        className="sm:hidden pt-3 rounded-tl-[10px] rounded-tr-[10px] fixed bottom-0 left-0 w-full bg-zinc-900 text-gray-400 flex justify-around items-center">
        <button className="hover:bg-slate-200 hover:rounded-t-[20px] hover:text-black p-2 transition-all font-semibold flex flex-col items-center">
          <i className="bg-black p-1 rounded-full m-2 hover:text-teal-500"></i>
          <span className="text-[10px]">Overview</span>
        </button>
        <button className="hover:bg-slate-200 hover:rounded-t-[20px] hover:text-black p-2 transition-all font-semibold flex flex-col items-center">
          <i className="bg-black p-1 rounded-full m-2 hover:text-teal-500"></i>
          <span className="text-[10px]">Transactions</span>
        </button>
        <button className="hover:bg-slate-200 hover:rounded-t-[20px] hover:text-black p-2 transition-all font-semibold flex flex-col items-center">
          <i className="bg-black p-1 rounded-full m-2 hover:text-teal-500"></i>
          <span className="text-[10px]">Budgets</span>
        </button>
        <button className="hover:bg-slate-200 hover:rounded-t-[20px] hover:text-black p-2 transition-all font-semibold flex flex-col items-center">
          <i className="bg-black p-1 rounded-full m-2 hover:text-teal-500"></i>
          <span className="text-[10px]">Pots</span>
        </button>
        <button className="hover:bg-slate-200 hover:rounded-t-[20px] hover:text-black p-2 transition-all font-semibold flex flex-col items-center">
          <i className="bg-black p-1 rounded-full m-2 hover:text-teal-500"></i>
          <span className="text-[10px]">Recurring Bills</span>
        </button>
      </div>

    </>
  );
}