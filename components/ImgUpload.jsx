"use client";

import Image from "next/image";
import { useState } from "react";

function ImgUpload() {
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handlFileUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setErrors((prev) => ({ ...prev, logo: "" }));
  };
  return (
    <div className="mb-8">
      <label className="mb-3 inline-block text-black">
        Upload Logo <span className="text-red">*</span>
      </label>
      <div className="p-[3px] rounded-lg backdrop-saturate-[4.5] backdrop-blur-[10px]	shadow-[inset_0_0_0_3px_rgba(156,156,156,.08)]">
        <div className="file-upload card rounded-lg shadow-md">
          {file && (
            <button
              onClick={() => setFile(null)}
              aria-label="clear file"
              className="absolute top-[-10px] right-[-10px] w-5 h-5 flex item-center justify-center rounded-full bg-red-600 text-white text-sm z-20"
            >
              X
            </button>
          )}
          <span className="file-upload-text text-black text-xl font-light">
            {file ? (
              <Image width={200} height={200} src={file} alt="preview" />
            ) : (
              <>
                Drag
                <span>(SVG,PNG,PDF,EPS,JPG)</span>
              </>
            )}
          </span>
          <input type="file" onChange={handlFileUpload} />
        </div>
      </div>
      {errors && errors.logo && <span className="text-red">{errors.file}</span>}
    </div>
  );
}

export default ImgUpload;
