import React from "react";

const Instapost = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const user = {
    username: "sokhushyy_",
    image: "https://placekitten.com/100/100", // Replace with your profile image URL
    followers: 1000,
    following: 500,
  };

  //https://cdn.pixabay.com/photo/2019/09/08/20/48/friends-4461896_1280.jpg

  const posts = [
    {
      id: 1,
      username: "sokhushyy_",
      alt: "Image of a concert",
      userImage: "https://placekitten.com/500/500", // Replace with the user's profile image URL
      postImage:
        "https://cdn.pixabay.com/photo/2014/12/12/10/49/music-565244_1280.jpg", // Replace with your image URL
      likes: 150,
      location: "Concert",
      caption:
        "Had the time of my life at that concert!! 🎶🔥 #musiclover #concertgoals",
      timePosted: "5 minutes ago",
    },
    {
      id: 2,
      username: "sokhushyy_",
      alt: "Image of a little kitten named Milo",
      userImage: "https://placekitten.com/500/500", // Replace with the user's profile image URL
      postImage:
        "https://cdn.pixabay.com/photo/2022/12/20/11/49/fall-7667684_1280.jpg", // Replace with your image URL
      likes: 200,
      location: "Wisconssin",
      caption: "My Milo is the cutest cat in the world!! 😍 #catlover",
      timePosted: "10-01-2024",
    },
    {
      id: 3,
      username: "sokhushyy_",
      alt: "",
      userImage: "https://placekitten.com/500/500", // Replace with the user's profile image URL
      postImage:
        "https://cdn.pixabay.com/photo/2019/09/08/20/48/friends-4461896_1280.jpg", // Replace with your image URL
      likes: 200,
      location: "Wisconssin",
      caption: "Now this was a fun day with friends!! 🤠 #friendsforever",
      timePosted: "10-01-2024",
    },
    {
      id: 4,
      username: "sokhushyy_",
      alt: "Image of a trendy street art",
      userImage:
        "https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_1280.jpg",
      postImage:
        "https://cdn.pixabay.com/photo/2023/03/29/16/53/street-art-7885965_1280.jpg",
      likes: 120,
      location: "Urban Jungle",
      caption: "Exploring the city vibes and street art! 🌆✨ #CityExplorer",
      timePosted: "2 hours ago",
    },
    {
      id: 5,
      username: "sokhushyy_",
      alt: "Image of a gaming setup",
      userImage: "https://placekitten.com/500/500",
      postImage:
        "https://cdn.pixabay.com/photo/2021/03/17/14/39/gaming-6102500_1280.jpg",
      likes: 180,
      location: "Gamer's Paradise",
      caption: "Gaming all day, every day! 🎮🕹️ #GamerLife",
      timePosted: "1 day ago",
    },
    {
      id: 6,
      username: "sokhushyy_",
      alt: "Image of a vibrant sunset",
      userImage: "https://placekitten.com/500/500",
      postImage:
        "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg",
      likes: 250,
      location: "Chasing Sunsets",
      caption:
        "Sunsets are proof that no matter what happens, every day can end beautifully. 🌅 #SunsetChaser",
      timePosted: "3 days ago",
    },
  ];

  return (
    <div className="flex rounded-md flex-col justify-center items-center relative h-full bg-black pb-3">
      {/* Notch Code */}
      <div className="w-full flex justify-around top-2 absolute ">
        <h1 className="text-white">{time.slice(0, time.lastIndexOf(":"))}</h1>
        <div className="bg-black p-[12px] rounded-[100%]"></div>
        <div className="flex gap-1">
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="m12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2L12 21m0-18C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3m0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c2.03 0 3.9.67 5.4 1.8l1.8-2.4C17.19 9.89 14.7 9 12 9Z"
            ></path>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="M19.5 5.5v13h-2v-13h2M21 4h-5v16h5V4m-7 5H9v11h5V9m-7 5H2v6h5v-6Z"
            ></path>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="M16 14H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Notch Code */}

      <>
        <div className="bg-[#0a0a0a] overflow-scroll h-full">
          <div className="text-2xl flex flex-col  font-bold text-center mt-10 text-white items-center gap-1 justify-center  ">
            <h1>Instapost</h1>
          </div>

          {/* User Info and Stats */}
          <div className="flex items-center justify-between p-4  m-2 ">
            <div className="flex items-center">
              <img
                src={user.image}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <span className="font-semibold text-white">
                  {user.username}
                </span>
                <div className="text-gray-500">
                  <span>{user.followers} followers</span>
                  <span className="mx-2">•</span>
                  <span>{user.following} following</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-2 h-full ">
            {/* Main Content */}
            {posts.map((post) => (
              <div className="flex" key={post.id}>
                <div className="bg-[#eaeaea] p-5 rounded-md shadow-md">
                  <div className="mb-1 ">
                    {/* User Info */}
                    <div className="flex items-center mb-2">
                      <img
                        src={post.userImage}
                        alt={post.alt}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-black">
                          {post.username}
                        </h1>
                        <h1 className="text-xs text-gray-900 mt-[-7px]">
                          {post.location}
                        </h1>
                      </div>
                    </div>

                    {/* Post Image */}
                    <img
                      src={post.postImage}
                      alt="Post"
                      className="w-full rounded-md mb-4"
                    />

                    {/* Likes Section */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={"1.5rem"}
                          height={"1.5rem"}
                          style={{ fill: "#ed1d24" }}
                        >
                          <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
                        </svg>
                        <span className="text-gray-700">{post.likes}</span>
                      </div>
                    </div>

                    {/* Caption */}
                    <p className="text-gray-800">{post.caption}</p>
                    <p className="text-gray-800 text-sm">{post.timePosted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Instapost;
