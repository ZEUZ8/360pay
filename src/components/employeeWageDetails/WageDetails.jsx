import React from "react";

const WageDetails = ({ selectedSuggestion }) => {
  return (
    <>
      <div className="grid gap-4 shadow-special  rounded-xl m-5 p-4 ">
        <div className="grid grid-cols-2 items-center">
          <div className="text-center text-gray-600 ">Total Wage</div>
          <div className=" linear_gradient1 rounded-lg py-2 text-center text-white font-medium">
            {selectedSuggestion ? `${selectedSuggestion.total}.00 INR` : "000.00 INR"}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div className="text-center text-gray-600 ">Today Wage</div>
          <div className=" linear_gradient2 rounded-lg py-2 text-center text-white font-medium">
            {selectedSuggestion ? `${selectedSuggestion.dailyWage}.00 INR` : "000.00 INR"}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div className="text-center text-gray-600 ">Excess Amount</div>
          <div className=" linear_gradient3 rounded-lg py-2 text-center text-white font-medium">
            {selectedSuggestion ? `${selectedSuggestion.exceeAmount}.00 INR` : "000.00 INR"}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div className="text-center text-gray-600 ">Balance</div>
          <div className=" linear_gradient4 rounded-lg py-2 text-center text-white font-medium">
            {selectedSuggestion
              ? `${selectedSuggestion.balanceAmount}.00 INR`
              : "000.00 INR"}
          </div>
        </div>
      </div>
    </>
  );
};

export default WageDetails;
