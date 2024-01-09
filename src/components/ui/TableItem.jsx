/* eslint-disable react/prop-types */

function TableItem({ id, date, amount, transasctionFee }) {
  return (
    <>
      <div className=" text-blue-500 ">{id}</div>
      <div>{date}</div>
      <div className="  text-right">{amount}</div>
      <div className="  text-right">{transasctionFee}</div>
    </>
  );
}
export default TableItem;
