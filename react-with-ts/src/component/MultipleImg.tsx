import React, { useState } from "react";
import "./MultipleImg.css";

const MultipleImg = () => {
  const [imgPreview, setImgPreview] = useState<any[]>([]);

  const handleFileChanges = (event: any) => {
    const files = Array.from(event.target.files);
    console.log(files);

    if (files.length > 5) {
      alert("you can select 5 image only");
      event.target.files = null;
      setImgPreview([]);
      return;
    }

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

  return (
    <div>
      <label className="custom-file-upload" htmlFor="selectFile">
        Choose File
      </label>
      <input
        id="selectFile"
        type="file"
        multiple
        onChange={(event) => handleFileChanges(event)}
      />
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
