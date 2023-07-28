import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded m-3 shadow overflow-hidden">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg"
        alt="no-img-found"
        className="h-32 w-32 object-cover"
      />
      <div>
        <span>Lorem ipsum dolor sit amet.</span>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  );
};

export default Card;
