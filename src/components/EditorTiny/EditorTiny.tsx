import { Editor } from "@tinymce/tinymce-react";
import cdnConfig from "config/cdnConfig";
import React from "react";

function EditorTiny(props: any) {
  const { value, onChange } = props;
  return (
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
            const res: any = await cdnConfig
              .post("uploadFile", formData)
              ;
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
  );
}

export default EditorTiny;
