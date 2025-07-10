import React from "react";

const Signup = () => {
  return (
    <form action="" className="md:h-screen h-[600px]">
      <div className="h-full flex flex-col justify-center items-center px-4 md:p-0">
        <div className="flex flex-col gap-5">
          <div className="">
            <h2 className="font-bold text-black text-3xl">Welcome👋</h2>
            <h3 className="md:text-xl text-lg">Create Your Account Here</h3>
          </div>
          <div className="md:w-[450px] flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/10 rounded-md">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="w-full px-2 py-4 outline-none placeholder:text-sm"
                  required
                />
              </div>
              <div className="bg-black/10 rounded-md">
                <input
                  type="text"
                  placeholder="Lastname"
                  className="w-full px-2 py-4 outline-none placeholder:text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-black/10 rounded-md">
                <input
                  type="text"
                  className="w-full px-2 py-4 outline-none placeholder:text-sm"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-black/10 rounded-md">
                <input
                  type="text"
                  className="w-full px-2 py-4 outline-none placeholder:text-sm"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="h-24 bg-black/10 rounded-md">
              <textarea
                name=""
                id=""
                className="h-full w-full px-2 resize-none outline-0 placeholder:text-sm py-4"
                placeholder="Please tell us a bit about yourself "
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 rounded-md"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
