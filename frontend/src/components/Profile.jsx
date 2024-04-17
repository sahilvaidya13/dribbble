import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import default_image from "../assets/default-image.jpeg";
import Loading from "./Loading";
const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  const [locationVal, setLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log(selectedImage);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("location", locationVal);

    try {
      const response = await fetch(
        "https://dribbble-uyit.onrender.com/api/upload-avatar",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      console.log(response);
      console.log(token);

      if (response.ok) {
        console.log("Uploaded");
        setLoading(false);

        navigate("/select-interest");
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };
  return (
    <div className="">
      <div className="main-profile flex flex-col w-screen h-screen max-sm:overflow-x-hidden">
        {loading && <Loading />}

        <div className="logo-class w-full h-20  p-3 flex items-center text-[#ea4b8b] font-goodline text-3xl max-sm:ml-[25%] max-sm:p-0">
          <h1 className="pl-10">dribbble</h1>
        </div>
        <div className="profile-form  w-full grow flex justify-center ">
          <div className="profile-form-content w-[50%]  ">
            <div className="heading-profile flex flex-col gap-4">
              <div className="main-heading text-3xl font-Monaextra">
                <h1>Welcome! Let's create your profile</h1>
              </div>
              <div className="small-heading font-Monamedium text-base text-[#a09fa5]">
                <p>Let others get to know you better! You can do this later</p>
              </div>
            </div>
            <div className="avatar-section mt-6 max-sm:flex-col">
              <div className="avatar-section-text font-Monaextra text-lg">
                <h3>Add an avatar</h3>
              </div>
              <div className="avatar-upload w-96 h-36 flex gap-2  max-sm:flex-col max-sm:items-start max-sm:mb-16 items-center  mt-6">
                <div className="image-box rounded-full w-32 h-32 ">
                  {!selectedImage ? (
                    <img
                      src={default_image}
                      className="w-32  h-32 rounded-full"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      className="w-32 h-32 rounded-full"
                    />
                  )}
                </div>
                <div className="image-dialog grow h-full gap-8 flex flex-col items-center justify-center ">
                  <div>
                    <label
                      htmlFor="imageInput"
                      className="mb-4 cursor-pointer bg-white  text-black font-Monamedium border border-slate-200 border-0.5 py-2 px-4 rounded"
                    >
                      Choose Image
                    </label>
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="font-Monamedium text-sm text-[#9d9ea6] hover:cursor-pointer">
                    <p>{"> Or choose one of our defaults"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-section  w-96 h-28 pt-8 flex flex-col gap-5">
              <div className="location-title font-Monaextra text-lg">
                <h3>Add location</h3>
              </div>
              <div className="location-input w-96 max-sm:w-64">
                <input
                  type="text"
                  value={locationVal}
                  onChange={(e) => handleLocationChange(e)}
                  placeholder="Enter a location"
                  className="border-b-[1px] border-[#9d9ea6] outline-none placeholder:text-[#9d9ea6] w-full py-2 placeholder:font-Monaregular"
                />
              </div>
            </div>
            <div className="next-button pt-10">
              <button
                style={{
                  backgroundColor: selectedImage ? "#ea4b8b" : "#f8b8d0",
                }}
                className="px-16 py-2 hover:cursor-pointer  text-white rounded-md focus:outline-none font-Monamedium text-sm"
                onClick={(e) => handleSubmit(e)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
