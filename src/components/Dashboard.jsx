import message from "../assets/message.svg";
import menuchevron from "../assets/menu-chevron.svg";
import download from "../assets/download.svg";
import sort from "../assets/sort.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faInfoCircle,
  faSearch,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
function DashboardHeader() {
  return (
    <div className="h-16 px-4 flex justify-between items-center border-b-2">
      <div className="flex gap-2 items-center">
        <h4 className=" text-black">Payments</h4>
        <div className="font-thin text-sm text-black/70 flex items-center gap-1">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <p> How it works</p>
        </div>
      </div>
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-black/50 absolute top-3  left-2"
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
      <div className="mx-4 my-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Overview</h1>
          <p className="border-2 flex text-black/40 px-1  gap-2 items-center ">
            Last Month{" "}
            <FontAwesomeIcon className="text-black" icon={faChevronDown} />
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
        <div className="">
          <h2 className="text-xl font-semibold my-2">
            Transactions | This Month
          </h2>
          <div className="shadow-md p-2 rounded">
            <div className="flex justify-between items-center ">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-black/50 absolute top-3  left-2"
                />
                <input
                  type="text"
                  className="bg-[#F2F2F2]/95 px-8 py-2  rounded-sm w-72"
                  placeholder="Search features, tutorials, etc."
                />
              </div>
              <div className="flex gap-4 ">
                <button className=" bg-white border-2 flex gap-2 items-center px-2 py-1 rounded">
                  Sort <img src={sort} alt="sort icon" />
                </button>
                <button className="border-2 bg-white px-2 py-1 rounded">
                  <img src={download} alt="donwnload-button" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F2F2F2] p-2 rounded ">
              <div className="column ">Order ID</div>
              <div className="column flex gap-1 ">
                Order Date <FontAwesomeIcon icon={faSortDown} />
              </div>
              <div className="column text-right ">Order Amount</div>
              <div className="column  text-right">
                Transaction Fees{" "}
                <FontAwesomeIcon className="text-sm" icon={faInfoCircle} />
              </div>
            </div>

            <ul className="grid grid-cols-4 p-2 border-b-2">
              <li className="column text-blue-500 ">#281209</li>
              <li className="column  ">7 July, 2023</li>
              <li className="column  text-right">₹1,278.23</li>
              <li className="column  text-right">₹22</li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
