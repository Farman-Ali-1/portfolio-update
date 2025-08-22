// cloudinary.ts

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "portfolio"); // unsigned preset

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dnnverlyi/image/upload`, // ✅ correct endpoint: image (not images)
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Cloudinary upload failed");
    }

    return data.secure_url; // ✅ this is the URL you can save in Firebase
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
