import React, { useState } from "react";
import WageDetails from "./WageDetails";
import { FaChevronDown } from "react-icons/fa6";
import SearchResultsList from "./SearchResultsList";

const Page = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(true);
  const [suggestionCount, setSuggestionCound] = useState(0);



  // function that attached to the Detail click in the userWageDetails and waiting for the funtionality
  const handleClick = () => {
    console.log("function for api call");
  };

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(result);
      });
  };

  const handleChange = async (value) => {
    setShow(true);
    setSuggestionCound(0);
    setInput(value);
    fetchData(value);
  };

  const handlePress = (evnt) => {
    if (results) {
      if (evnt.keyCode === 40 && suggestionCount < results.length-1) {
        console.log(' the name')
        setSuggestionCound((prev) => prev + 1);
      }
      if (evnt.keyCode === 38 && suggestionCount > 0) {
        setSuggestionCound((prev) => prev - 1);
      }
    }
    if (evnt.key === "Enter" && results.length) {
      setInput(results[suggestionCount].name);
      setResults([]);
    }
  };
  return (
    <>
      <div className="grid max-md:grid-rows-10 md:grid-cols-2 h-[100vh]">
        <div className=" grid row-span-5 md:col-span-1">
          <div className="grid justify-center items-end md:items-center ">
            <div className="grid justify-center items-center gap-6 relative">
              <div>
                <h1 className="text-xs font-medium text-[#02345D] pb-3 ">
                  Employee Wage Detail
                </h1>

                <div className=" flex items-center max-md:w-[16rem] bg-gray-100 px-4 rounded-lg">
                  <input
                    type="text"
                    placeholder="Choose Employee"
                    onKeyDown={handlePress}
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    className="p-3 px-5 w-full  text-sm placeholder-gray-400 focus:outline-none bg-transparent text-gray-500 bg-gray-200 rounded-md border-none "
                  />
                  <FaChevronDown
                    id="downArrow"
                    className=""
                    onClick={() => setShow((prev) => !prev)}
                  />
                </div>
                {results.length > 0 && show && (
                  <div className={`absolute  scrollbar-hide  w-[100%] `}>
                    <SearchResultsList
                      suggestionCount={suggestionCount}
                      setResults={setResults}
                      results={results}
                      setInput={setInput}
                    />
                  </div>
                )}
              </div>
              <div>
                <img
                  className="w-40 h-40  rounded-full mx-auto "
                  src="/imgs/person.png"
                  alt=""
                />
                <div className="flex gap-0 justify-center items-center pt-2">
                  <h1 className=" p-3 text-center">userName</h1>
                  <img
                    className="w-4 h-4"
                    src="./imgs/yes.png"
                    alt="verified"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-5 md:col-span-1 flex flex-col gap-2  md:justify-center w-[100%]">
          <WageDetails />
          <div className=" grid justify-center ">
            <h1
              className="bg-[#003663] px-10 py-2 rounded-lg text-white font-medium"
              onClick={handleClick}
            >
              Details
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
