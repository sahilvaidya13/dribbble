import React, { useState, useEffect } from "react";
import img_asset from "../assets/3d_asset.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Signup = () => {
  const navigate = useNavigate();
  const [tick, setTick] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleTick = () => {
    setTick(!tick);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    setLoading(true);
    try {
      const response = await fetch(
        "https://dribbble-uyit.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const value = await response.json();
      console.log(value);
      if (response.alreadyExists) {
        setLoading(false);
        setMessage(response.message);
      }
      if (!response.alreadyExists) {
        setLoading(false);

        localStorage.setItem("token", value.token);
        navigate("/user-profile");
      } else {
        // Handle error or display error message
        console.error("Failed to sign up:", response.statusText);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="main w-screen  h-screen flex max-sm:flex-col">
        {loading && <Loading />}
        <div className="leftpane bg-[#a29eeb] w-[38%] max-sm:hidden max-sm:w-screen flex items-center justify-center">
          <div className="leftpane-content w-[75%] max-sm:w-screen h-screen pt-10 flex flex-col max-sm:items-center gap-8">
            <div className="max-sm:flex max-sm:justify-center max-sm:pt-10">
              <h1 className="text-[#1c1772] font-goodline  text-3xl max-sm:text-5xl">
                dribbble
              </h1>
            </div>
            <div className=" font-helbold text-3xl max-sm:w-[60%] max-sm:flex max-sm:flex-col max-sm:justify-center   text-[#1c1772]">
              <div
                className={`max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:pl-6 transition-opacity duration-1000 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1>Discover the world's top</h1>
                <h1>Designers & Creatives.</h1>
              </div>
            </div>

            <div>
              <img src={img_asset} />
            </div>
            <div className="pt-8 max-sm:pt-3">
              <p className="text-[#1c1772] font-helmed">
                Art by{" "}
                <span
                  className="underline hover:cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#fromView=search&page=2&position=0&uuid=e57b8ffc-b0ff-4613-a670-18c2c622b3c9"
                    )
                  }
                >
                  Freepik
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="rightpane grow  flex flex-col">
          <div className="max-sm:hidden   topright w-full h-12 flex items-center justify-end pr-10 font-helmed">
            <p>
              Already a member?{" "}
              <span className="text-[#5c4ead] underline hover:cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
          <div className="signup  w-full grow flex justify-center items-center ">
            <div className="signup-content max-sm:w-[90%]   w-[60%] pt-3  h-full">
              <div className="gap-6 flex flex-col w-[75%] max-sm:w-screen">
                <div className="signup-title max-sm:text-3xl max-sm:mt-8 font-Monabold text-2xl">
                  <h1>Sign up to Dribbble</h1>
                </div>

                <div className="error">
                  <p
                    role="list"
                    className="marker:text-[#fd5556] list-disc pl-5 space-y-3 text-[#fd5556]"
                  >
                    {errorMessage}
                  </p>
                </div>
                <div className="name-username max-sm:flex-col flex gap-4 w-full max-sm:w-[90%]">
                  <label class="block">
                    <span class="block max-sm:text-2xl text-sm font-helbold text-black">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      class="mt-1 px-3 py-2 max-sm:py-3 max-sm:border max-sm:border-black bg-[#f0f0f0] max-sm:focus:border-[#ea4b8b] max-sm:focus:border-2 max-sm:bg-white   outline-none block w-full rounded-md sm:text-sm"
                      onChange={handleInputChange}
                    />
                  </label>
                  <label class="block">
                    <span className=" block max-sm:text-2xl text-sm font-helbold text-black">
                      Username
                    </span>
                    <input
                      type="text"
                      name="username"
                      class="mt-1 max-sm:py-3 max-sm:border max-sm:bg-white max-sm:focus:border-[#ea4b8b] max-sm:focus:border-2 max-sm:border-black px-3 py-2 bg-[#f0f0f0]  outline-none block w-full rounded-md sm:text-sm "
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="eml max-sm:w-[90%]">
                  <label class="block">
                    <span class="block max-sm:text-2xl text-sm font-helbold text-black">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      class="mt-1 max-sm:py-3 max-sm:border max-sm:bg-white max-sm:focus:border-[#ea4b8b] max-sm:focus:border-2 max-sm:border-black px-3 py-2 bg-[#f0f0f0]  outline-none block w-full rounded-md sm:text-sm "
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="pass max-sm:w-[90%]">
                  <label class="block">
                    <span class="block max-sm:text-2xl text-sm font-helbold text-black">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="6+ characters"
                      class="placeholder:font-helmed mt-1 max-sm:py-3 max-sm:border max-sm:bg-white max-sm:focus:border-[#ea4b8b] max-sm:focus:border-2 max-sm:border-black px-3 py-2 bg-[#f0f0f0]  outline-none block w-full rounded-md sm:text-sm "
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="max-sm:w-[90%] policy w-full grid grid-flow-col justify-stretch gap-2">
                    <div
                      className="check  w-4 h-4 border border-slate-400 flex justify-center items-center hover:cursor-pointer "
                      onClick={() => handleTick((val) => !val)}
                    >
                      <p className="">{tick ? "✅" : ""}</p>
                    </div>
                    <div className="chk-content ">
                      <p className="text-xs text-[#6f6e73] font-Monamedium">
                        Creating an account means you're okay with our{" "}
                        <span className="text-[#5c4ead] hover:cursor-pointer">
                          Terms of Service,{" "}
                        </span>
                        <span className="text-[#5c4ead] hover:cursor-pointer">
                          Privacy Policy,
                        </span>{" "}
                        and our default{" "}
                        <span className="text-[#5c4ead] hover:cursor-pointer">
                          Notification Setttings.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      disabled={!tick}
                      style={{
                        cursor: tick ? "pointer" : "not-allowed",
                      }}
                      className="px-10 py-2 bg-[#ea4b8b] text-white rounded-md hover:bg-[#ff3e8b] focus:outline-none font-helmed text-sm hover:cursor-pointer"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Create Account
                    </button>
                  </div>
                  <div className="short-txt max-sm:w-[90%] text-[0.65rem] text-[#6f6e73] font-Monamedium">
                    <p>
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="text-[#5c4ead] hover:cursor-pointer">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="text-[#5c4ead] hover:cursor-pointer">
                        Terms and Services{" "}
                      </span>{" "}
                      apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
