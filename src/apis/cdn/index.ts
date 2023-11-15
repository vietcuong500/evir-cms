import cdnConfig from "config/cdnConfig";

export const cdnService = {
  upload: async (file: any) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      const res: any = await cdnConfig.post("uploadFile", formData);

      if (res) {
        return `${import.meta.env.VITE_APP_CDN}/${res?.fileName}`;
      }
    }
    return null;
  },
};
