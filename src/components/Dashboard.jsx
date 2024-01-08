import message from "../assets/message.svg";
import menuchevron from "../assets/menu-chevron.svg";
import search from "../assets/search.svg";
import chevron from "../assets/chevron.svg";

import question from "../assets/que-mark.svg";
function DashboardHeader() {
  return (
    <div className="h-16 px-4 flex justify-between items-center border-b-2">
      <div className="flex gap-2 items-center">
        <h4>Payments</h4>
        <div className="font-thin text-sm text-black/80 flex items-center gap-1">
          <span>
            <img src={question} alt="question-mark" />
          </span>
          <p> How it works</p>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-3  left-2"
          src={search}
          alt="search-icon"
        />
        <input
          type="text"
          className="bg-[#F2F2F2]/95 px-8 py-2  rounded-sm w-72"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex gap-2">
        <img src={message} alt="messages" />
        <img src={menuchevron} alt="options" />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="flex-grow border-2">
      <DashboardHeader />
      <div className="mx-4 my-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Overview</h1>
          <p className="border-2 flex text-black/40 px-3 ">
            Last Month{" "}
            <span>
              <img src={chevron} className="text-black" alt="dropdown-menu" />
            </span>
          </p>
        </div>
        <div className="flex  gap-3 my-4">
          <div className=" w-1/2 h-20 flex flex-col gap-2 justify-center px-4 rounded-md shadow-md">
            <h4 className="text-black/70 text-sm">Online Orders</h4>{" "}
            <h2 className="text-xl font-semibold">231</h2>
          </div>
          <div className=" w-1/2 h-20 flex flex-col gap-2 justify-center px-4 rounded-md shadow-md">
            <h4 className="text-black/70 text-sm">Amount Recieved</h4>{" "}
            <h2 className="text-xl font-semibold">₹23,92,312.19</h2>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Dashboard;
