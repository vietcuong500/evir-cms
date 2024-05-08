import { Editor } from "@tinymce/tinymce-react";
import cdnConfig from "config/cdnConfig";
import React from "react";

function EditorTiny(props: any) {
  const { value, onChange } = props;
  return (
    <Editor
    apiKey='d8peyfrzl0nn332tp3jypuckuw35vjj9dauzg3l1lsxy8rmg'
      init={{
        height: 600,
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
        imagetools_cors_hosts: ["picsum.photos"],
        menubar: "file edit view insert format tools table help",
        toolbar:
          "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        link_list: [
          { title: "My page 1", value: "https://www.tiny.cloud" },
          { title: "My page 2", value: "http://www.moxiecode.com" },
        ],
        image_list: [
          { title: "My page 1", value: "https://www.tiny.cloud" },
          { title: "My page 2", value: "http://www.moxiecode.com" },
        ],
        image_class_list: [
          { title: "None", value: "" },
          { title: "Some class", value: "class-name" },
        ],
        importcss_append: true,

        templates: [
          {
            title: "New Table",
            description: "creates a new table",
            content:
              '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
          },
          {
            title: "Starting my story",
            description: "A cure for writers block",
            content: "Once upon a time...",
          },
          {
            title: "New list with dates",
            description: "New List with dates",
            content:
              '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
          },
        ],
        template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
        template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
        image_caption: true,
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        noneditable_noneditable_class: "mceNonEditable",
        toolbar_mode: "sliding",
        contextmenu: "link image imagetools table",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        images_upload_handler: async (blobInfo) => {
          const formData = new FormData();
          formData.append("file", blobInfo.blob());
          try {
            const res: any = await cdnConfig.post("uploadFile", formData);
            if (res) {
              return `${import.meta.env.VITE_APP_CDN}/${res?.fileName}`;
            }

            throw new Error("Unable to upload image");
          } catch {
            throw new Error("Unable to upload image");
          }
        },
        mobile: {
          plugins:
            "print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable",
        },
        menu: {
          tc: {
            title: "Comments",
            items: "addcomment showcomments deleteallconversations",
          },
        },
      }}
      value={value}
      onEditorChange={onChange}
    />
  );
}

export default EditorTiny;
