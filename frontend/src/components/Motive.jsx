import React, { useState } from "react";
import designer_svg from "../assets/undraw_art_lover_re_fn8g.svg";
import inspiration_svg from "../assets/undraw_inspiration_re_ivlv.svg";
import hire_svg from "../assets/undraw_mobile_prototyping_grmd.svg";
import tick from "../assets/tick.svg";
import Loading from "./Loading";

import { useNavigate } from "react-router-dom";
const Motive = () => {
  const [role, selectedRole] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleOption = (event) => {
    if (role.includes(event)) {
      const newArray = role.filter((item) => item !== event);
      selectedRole(newArray);
    } else {
      selectedRole([...role, event]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://dribbble-uyit.onrender.com/api/add-roles",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roles: role }),
        }
      );

      if (response.ok) {
        setLoading(true);

        const data = await response.json();
        console.log(data.data);
        // Check if roles were successfully added

        // Redirect to the mail verification page
        navigate("/verify-mail", { state: data.data });
      } else {
        console.error("Failed to add roles:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding roles:", error.message);
    }
  };
  return (
    <div>
      <div className="motive-section w-screen h-screen flex flex-col">
        {loading && <Loading />}

        <div className="motive-nav w-full h-16 flex items-center pl-16">
          <div className="font-goodline text-3xl text-[#ea4b8b]">
            <h3>dribbble</h3>
          </div>
        </div>
        <div className="motive-content w-full grow  flex flex-col items-center p-4 ">
          <div className="motive-title w-full flex flex-col gap-4 items-center ">
            <h1 className="font-Monaextra text-3xl">
              What brings you to Dribbble?
            </h1>
            <p className="text-[#77767a] font-Monamedium">
              Select the options that best describes you. Don't worry, you can
              explore other options later.
            </p>
          </div>
          <div className="motive-interest-tabs w-full flex max-sm:gap-1  m-1 h-80  items-center justify-center gap-10 ">
            <div
              className="designer h-72 w-72 rounded-xl flex flex-col items-center p-3 justify-between hover:cursor-pointer text-center max-sm:overflow-y-scroll"
              name="designer"
              style={{
                border: role.includes("designer")
                  ? "solid #ea4b8b 1px"
                  : "solid 1px #c2c2c2",
              }}
              onClick={() => handleOption("designer")}
            >
              <img src={designer_svg} className="w-24" />
              <div className="w-full">
                <p className="font-Monaextra text-xl max-sm:text-sm  text-[#120f1f]">
                  I'm a designer looking to share my work
                </p>
              </div>

              <div className="rounded-full border border-[#c2c2c2]  w-8 h-8">
                {role.includes("designer") ? <img src={tick} /> : " "}
              </div>
              {role.includes("designer") ? (
                <p className="w-full text-center text-xs">
                  With over 7 million shots from a vast community of designers,
                  Dribbble is leading source for design ideas.
                </p>
              ) : (
                " "
              )}
            </div>
            <div
              className="hire h-72 w-72  rounded-xl flex flex-col items-center p-3 justify-between hover:cursor-pointer text-center max-sm:overflow-y-scroll"
              name="hire"
              style={{
                border: role.includes("hire")
                  ? "solid #ea4b8b 1px"
                  : "solid 1px #c2c2c2",
              }}
              onClick={() => handleOption("hire")}
            >
              <img src={hire_svg} className="w-32" />
              <div className="w-full flex items-center">
                <p className="font-Monaextra text-xl max-sm:text-sm  text-[#120f1f]">
                  I'm looking to hire a designer
                </p>
              </div>
              <div className="rounded-full border border-[#c2c2c2] w-8 h-8">
                {role.includes("hire") ? <img src={tick} /> : " "}
              </div>
              {role.includes("hire") ? (
                <p className="w-full text-center text-xs">
                  With over 7 million shots from a vast community of designers,
                  Dribbble is leading platform for hirers to look for talent.
                </p>
              ) : (
                " "
              )}
            </div>
            <div
              className="inspiration h-72 w-72  rounded-xl flex flex-col items-center p-3 justify-between hover:cursor-pointer text-center max-sm:overflow-y-scroll"
              name="inspiration"
              style={{
                border: role.includes("inspiration")
                  ? "solid #ea4b8b 1px"
                  : "solid 1px #c2c2c2",
              }}
              onClick={() => handleOption("inspiration")}
            >
              <img src={inspiration_svg} className="w-32" />
              <p className="font-Monaextra text-xl max-sm:text-sm  text-[#120f1f]">
                I'm looking for design inspiration
              </p>
              <div className="rounded-full border flex items-center border-[#c2c2c2] w-8 h-8">
                {role.includes("inspiration") ? <img src={tick} /> : " "}
              </div>
              {role.includes("inspiration") ? (
                <p className="w-full text-center text-xs animate-fade-in">
                  With over 7 million shots from a vast community of designers,
                  Dribbble is leading source for design inspiration.
                </p>
              ) : (
                " "
              )}
            </div>
          </div>
          <div className="motive-button w-full grow  flex flex-col items-center gap-4">
            <div className="bottom-text font-Monabold">
              <h3>Anything else? You can select multiple</h3>
            </div>
            <div>
              <button
                className="px-10 py-2 bg-[#ea4b8b] text-white rounded-md hover:bg-[#ff3e8b] focus:outline-none font-helmed text-sm"
                onClick={(e) => handleSubmit(e)}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motive;
//#ea64d9
