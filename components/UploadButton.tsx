"use client";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UploadButton() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `/api/material/05a2ca17-5ac3-4ceb-a435-12bd64bf038d/image`,
        );
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, []);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);

      try {
        const response = await fetch(
          "/api/material/05a2ca17-5ac3-4ceb-a435-12bd64bf038d/image",
          {
            method: "POST",
            body: formData,
          },
        );
        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        上传图片
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>

      <div>
        {imageUrl ? (
          <Image src={imageUrl} alt="Material" width={200} height={200} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    </>
  );
}

export default UploadButton;
