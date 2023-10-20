import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function ProductInfo() {
  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản</p>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <label className="mb-1 inline-block" htmlFor="name">
            Tên sản phẩm
          </label>
          <Input id="name" placeholder="Tên sản phẩm" />
        </div>
        <div>
          <label className="mb-1 inline-block" htmlFor="desc">
            Mô tả
          </label>
          <TextArea
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
            id="desc"
            placeholder="Tên sản phẩm"
          />
        </div>
        <div>
          <Editor
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 600,
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              tinycomments_mode: "embedded",
              file_picker_types: "image",
              // file_picker_callback: function (cb, value, meta) {
              //   var input = document.createElement("input");
              //   input.setAttribute("type", "file");
              //   input.setAttribute("accept", "image/*");

              //   input.onchange = function () {
              //     var file = this.files[0];
              //     var reader = new FileReader();
              //     reader.onload = function () {
              //       var id = "blobid" + new Date().getTime();
              //       var blobCache = editorRef.current.editorUpload.blobCache;
              //       var base64 = reader.result.split(",")[1];
              //       var blobInfo = blobCache.create(id, file, base64);
              //       blobCache.add(blobInfo);

              //       cb(blobInfo.blobUri(), { title: file.name });
              //     };
              //     reader.readAsDataURL(file);
              //   };

              //   input.click();
              // },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
