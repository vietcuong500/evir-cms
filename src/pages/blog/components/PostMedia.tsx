import cdnConfig from "config/cdnConfig";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FiPlus, FiUpload } from "react-icons/fi";

function PostMedia() {
  const { control } = useFormContext();
  const avatar = useWatch({
    control,
    name: "avatar",
  });
  return (
    <div className="box">
      <div className="box-title flex items-center justify-between">
        <p>Media</p>
        <Controller
          control={control}
          name="avatar"
          render={({ field: { onChange } }) => (
            <label htmlFor="file" className="cursor-pointer">
              <input
                className="hidden"
                id="file"
                type="file"
                name="file"
                onChange={async (e) => {
                  const formData = new FormData();
                  const file: any = e.target.files;
                  if (file[0]) {
                    formData.append("file", file[0]);

                    const res: any = await cdnConfig.post(
                      "uploadFile",
                      formData
                    );
                    if (res) {
                      onChange(res.fileDownloadUri);
                    }
                  }
                }}
              />
              <FiUpload />
            </label>
          )}
        />
      </div>
      <div className="px-5 py-3 h-40">
        <div className="w-full h-full border border-neutral-300 rounded overflow-hidden flex-center">
          {avatar ? (
            <img className="w-full h-full object-cover" src={avatar} alt="" />
          ) : (
            <label
              htmlFor="file"
              className="flex cursor-pointer text-sm text-neutral-800 gap-2"
            >
              <FiPlus className="text-lg text-neutral-700" />
              Add media
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostMedia;
