import { CircularProgress } from "@mui/material";
import { FileInputLabel } from "./styles";
import axios from "axios";
import { mockEnv } from "./consts";
import { enqueueSnackbar } from "notistack";
import { ERROR_COLOR, snackbarStyle } from "../../globalStyles";

interface CloudinaryUploadProps {
  onUpload: (url: string) => void;
  setLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

export const CloudinaryUpload = ({
  onUpload,
  setLoading,
  isLoading,
}: CloudinaryUploadProps) => {
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      mockEnv.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", mockEnv.REACT_APP_CLOUDINARY_CLOUD_NAME);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dcnijwmki/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onUpload(response.data.secure_url);
    } catch (error) {
      console.error("Upload failed:", error);
      enqueueSnackbar({
        variant: "error",
        message: "Failed to upload image. Please try again",
        style: {
          ...snackbarStyle,
          backgroundColor: ERROR_COLOR,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="img-input"
        onChange={uploadImage}
        accept="image/*"
        style={{ display: "none" }}
      />

      <FileInputLabel htmlFor="img-input">
        {isLoading ? <CircularProgress size={20} /> : "Upload Image"}
      </FileInputLabel>
    </div>
  );
};
