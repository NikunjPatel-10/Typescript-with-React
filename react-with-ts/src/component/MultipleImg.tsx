import React, { useState } from "react";

const MultipleImg = () => {
  const [selectedImg, setSelectedImg] = useState<any[]>([]);
  const [imgPreview, setImgPreview] = useState<any[]>([]);

  const handleFileChanges = (event: any) => {
    const files = Array.from(event.target.files);
    const selectedFiles = files.slice(0, 5);
    setSelectedImg(selectedFiles);

    const preview: any[] = [];
    files.forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        preview.push(e.target?.result);
        setImgPreview([...preview]);
      };
      reader.readAsDataURL(file);
    });
  };
  const handleUpload = () => {
    console.log(selectedImg);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(event) => handleFileChanges(event)}
      />
      <button onClick={handleUpload}>Upload Img</button>
      <div>
        {imgPreview.map((preveiw, index) => {
          return (
            <div key={index}>
              <img src={preveiw} width={100} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleImg;
