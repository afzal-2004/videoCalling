import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const handelSumbitter = () => {
    navigate(`/room/${input}`);
  };
  return (
    <>
      <section className=" text-center border border-red-300 h-[100vh] flex justify-center items-center  bg-slate-700">
        <section className=" ">
          <div className=" ">
            <input
              type="text"
              placeholder="Enter Your name.."
              className="  p-1  sm:w-[300px] w-[80%] border-2 border-blue-500 rounded-xl"
              onChange={(e) => setinput(e.target.value)}
            />
          </div>

          <div className=" mt-[3%]">
            <button
              className=" bg-blue-700 px-3 py-2 text-white rounded-lg w-[100px] "
              onClick={handelSumbitter}
            >
              Join
            </button>
          </div>
        </section>
      </section>
    </>
  );
};
