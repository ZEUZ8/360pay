export const ImageValidation = (file) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  const maxSizeInBytes = 10 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    return "Invalid file type. Please upload JPEG or PNG image.";
  }

  if (file.size > maxSizeInBytes) {
    return "File size exceeds the maximum limit of 10MB.";
  }

  return null;
};

export const FileValidation = (file) => {
  const allowedTypes = ["application/pdf"];
  const maxSizeInBytes = 20 * 1024 * 1024; // 20MB

  
  if (!allowedTypes.includes(file.type)) {
    return "Invalid file type. Please upload PDF file.";
  }

  if (file.size > maxSizeInBytes) {
    return "File size exceeds the maximum limit of 20MB.";
  }

  return null;
};
