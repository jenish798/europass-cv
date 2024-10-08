import React, { useState } from "react";

const DEFAULT_IMAGE_URL = "https://via.placeholder.com/256?text=Profile+Image";
const MAX_SIZE_MB = 2;
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;


const ImageUploader = ({onImageChange}) => {
  const [image, setImage] = useState(DEFAULT_IMAGE_URL);
  const [errorMessage, setErrorMessage]=useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setErrorMessage(`File size exceeds ${MAX_SIZE_MB} MB`);
        return;
      }

      const reader = new FileReader();
      const img = new Image();
      
      reader.onloadend = () => {
        img.src = reader.result; 
      };

      img.onload = () => {
        const { width, height } = img;
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          setErrorMessage(`The image resolution must be within ${MAX_WIDTH}x ${MAX_HEIGHT}`);
          return;
        }
        setErrorMessage('');
        setImage(reader.result);
        onImageChange(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (

    <div className="flex flex-col lg:flex-row w-full items-center md:justify-center md:mx-auto">
  <div className="mb-4 md:mb-0 md:mr-4">
    <img
      src={image}
      alt="Profile Preview"
      className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
    />
  </div>
  <div className="flex flex-col w-full md:w-auto">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="border border-gray-300 p-2 rounded w-full md:w-64 file-input"
    />
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    <p className="mt-2 text-sm text-gray-600">
      Please upload passport image, ensuring that the file size is within 2 MB.
    </p>
  </div>
</div>
  );
};

export default ImageUploader;
