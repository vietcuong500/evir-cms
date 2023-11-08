import { Editor } from "@tinymce/tinymce-react";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import cdnConfig from "config/cdnConfig";
import { Controller, useFormContext, useWatch } from "react-hook-form";

function PostInfo() {
  const { control } = useFormContext();

  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản</p>
      <div className="p-5 flex flex-col gap-4">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="name">
                Tên bài viết
              </label>
              <Input
                value={value}
                onChange={onChange}
                id="name"
                placeholder=""
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="summary"
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="desc">
                Mô tả
              </label>
              <TextArea
                value={value}
                onChange={onChange}
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
                id="desc"
                placeholder=""
              />
            </div>
          )}
        />

        <div>
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, value } }) => (
              <Editor
                init={{
                  height: 600,
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks insertfile wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image insertfile media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  automatic_uploads: true,
                  //   convert_urls: false,
                  file_picker_types: "image",
                  images_upload_handler: async (blobInfo) => {
                    const formData = new FormData();
                    formData.append("file", blobInfo.blob());
                    try {
                      const res: any = await cdnConfig.post(
                        "uploadFile",
                        formData
                      );
                      if (res) {
                        return res.fileDownloadUri;
                      }

                      throw new Error("Unable to upload image");
                    } catch {
                      throw new Error("Unable to upload image");
                    }
                  },
                }}
                value={value}
                onEditorChange={onChange}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default PostInfo;
