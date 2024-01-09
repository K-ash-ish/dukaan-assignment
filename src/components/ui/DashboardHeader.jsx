import message from "../../assets/message.svg";
import menuchevron from "../../assets/menu-chevron.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
export default DashboardHeader;
