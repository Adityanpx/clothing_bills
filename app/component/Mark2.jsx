import React from "react";
import Box from "./Box";

function Mark2() {
  return (
    <div>
      <div className="mt-2 flex justify-between">
        <div className="">
          <h1 className="text-sm ml-2">
            Choaurang Smitship, S.No: 119/120, Manjri road,
          </h1>
          <h1 className="text-sm ">Mahadev Nagar, Hadapsar, Pune : 41112345</h1>

          <h2 className="text-2xl text-red-600 font-extrabold mt-4">
            Mob: 8600256200
          </h2>
        </div>
        <div className="mr-32 mt-2 font-extrabold">
          <h1>
            O. DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;202
          </h1>
          <h1 className="mt-4">
            D.
            DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;202
          </h1>
        </div>
      </div>

      <div className="text-start text-xl flex mt-6 font-extrabold ml-4">
        <h1>Name :-</h1>
        <input
          className="border-b border-black outline-none w-[80%]"
          type="text"
        />
      </div>

      {/* Table */}
      <div className="mt-8">
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr className="text-left">
              <th className="  px-4 py-2">Sr. No.</th>
              <th className="border border-black px-4 py-2">Particulars</th>
              <th className="border border-black px-4 py-2">Rate</th>
              <th className="border border-black px-4 py-2">Qty</th>
              <th className="border border-black px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add as many rows as needed */}
            <tr className="h-64">
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            
            {/* Empty row for spacing */}
            <tr>
              <td colSpan="" className=""></td>
            </tr>
            {/* Total, Discount, Advance, Total Balance */}
            <tr>
              <td className="border-none"></td>
              <td className="border-none"></td>
              <td className="border border-black px-4 py-2">Total</td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border-none">&nbsp;</td>
              <td className="border-none">&nbsp;</td>
              <td className="border border-black px-4 py-2">Discount</td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border-none">&nbsp;</td>
              <td className="border-none">&nbsp;</td>
              <td className="border border-black px-4 py-2">Advance</td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border-none ">&nbsp;</td>
              <td className="border-none text-xl font-bold text-rose-600">( शनिवार बंद )</td>
              <td className="border text-red-600 font-bold border-black px-4 py-2">Total Balance</td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Box/>
    </div>
  );
}

export default Mark2;
