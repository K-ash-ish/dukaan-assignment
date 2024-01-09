/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import download from "../assets/download.svg";
import sort from "../assets/sort.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faInfoCircle,
  faSearch,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { tableData } from "../constant";
import DashboardHeader from "./ui/DashboardHeader";
import TableItem from "./ui/TableItem";
import { useState } from "react";

function DashboardCard({ cardTitle, cardData }) {
  return (
    <div className=" w-1/2 h-20 flex flex-col gap-2 justify-center px-4 rounded-md shadow-md">
      <h4 className="text-black/70 text-sm">{cardTitle}</h4>{" "}
      <h2 className="text-xl font-semibold">{cardData}</h2>
    </div>
  );
}

function Dashboard() {
  const [page, setpage] = useState(1);

  function handlePageSelect(pageNo) {
    if (pageNo >= 1 && pageNo <= tableData.length / 5) setpage(pageNo);
  }

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
          <DashboardCard cardTitle="Online Orders" cardData="231" />
          <DashboardCard cardTitle="Amount Received" cardData="₹23,92,312.19" />
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
                  className="text-black/50 absolute top-3  left-3"
                />
                <input
                  type="text"
                  className="border-2 px-10 py-2  rounded-sm w-72"
                  placeholder="Search by order ID..."
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
            <div className="grid grid-cols-4 bg-[#F2F2F2] p-2 rounded my-2 ">
              <div className=" ">Order ID</div>
              <div className=" flex gap-1 ">
                Order Date <FontAwesomeIcon icon={faSortDown} />
              </div>
              <div className=" text-right ">Order Amount</div>
              <div className="  text-right">
                Transaction Fees{" "}
                <FontAwesomeIcon className="text-sm" icon={faInfoCircle} />
              </div>
            </div>
            <div className="my-4">
              {tableData.slice(page * 5 - 5, page * 5).map((data, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-4 p-2 border-b-2 my-2 "
                  >
                    <TableItem
                      pageNo={page}
                      id={data.id}
                      date={data.date}
                      amount={data.amount}
                      transasctionFee={data.transasctionFee}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 justify-center items-center mx-auto w-1/2 py-2 px-1">
              <button
                className={`border-2 px-3 flex items-center gap-2 py-1 rounded hover:bg-blue-500 hover:text-white ${
                  page === 1 ? "hidden" : "visible"
                }`}
                onClick={() => handlePageSelect(page - 1)}
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                Previous
              </button>
              <div className="flex gap-2">
                {[...Array(tableData.length / 5)].map((_, index) => {
                  return (
                    <button
                      key={index}
                      className={`border-2 py-1 px-3 rounded hover:bg-blue-500 hover:text-white ${
                        page === index + 1 ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => {
                        handlePageSelect(index + 1);
                      }}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              <button
                className={`border-2 px-3 flex items-center gap-2 py-1 rounded hover:bg-blue-500 hover:text-white ${
                  page === tableData.length / 5 ? "hidden" : "visible"
                }`}
                onClick={() => handlePageSelect(page + 1)}
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
