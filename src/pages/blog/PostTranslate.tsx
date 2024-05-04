import { Button, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { EditorTiny } from "components";
import { useAddLanguage, useGetLanguage } from "hooks/translate";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

function PostTranslate(props: any) {
  const { id, open, toggle } = props;
  const [language, setLanguage] = useState("EN");
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      content: "",
      summary: "",
    },
  });
  const [params, setParams] = useState<any>({
    refId: id,
    refTable: "BlogPost",
  });
  const { isPending, mutateAsync } = useAddLanguage();
  const { isLoading, data } = useGetLanguage(params);
  useEffect(() => {
    if (data) {
      const translateByLanguage = data.data.find(
        (el: any) => el.language_code === language
      );
      if (translateByLanguage) {
        const { column } = translateByLanguage;
        const title = column.find(
          (el: any) => el.ref_column === "title"
        ).content;
        const content = column.find(
          (el: any) => el.ref_column === "content"
        ).content;
        const summary = column.find(
          (el: any) => el.ref_column === "summary"
        ).content;

        reset({
          title,
          content,
          summary,
        });
      }
    }
  }, [data]);

  const handleTranslate = handleSubmit(async (data) => {
    const { title, content, summary } = data;
    const body: any = {
      ref_id: params.refId,
      ref_table: params.refTable,
      language_code: language,
      column: [
        {
          ref_column: "title",
          content: title,
        },
        {
          ref_column: "content",
          content: content,
        },
        {
          ref_column: "summary",
          content: summary,
        },
      ],
    };
    const res = await mutateAsync(body);
    if (res) {
      enqueueSnackbar({
        message: "Thêm ngôn ngữ thành công",
        variant: "success",
      });
    }
  });

  return (
    <Modal
      open={open}
      onCancel={toggle}
      onOk={toggle}
      footer={false}
      className=""
      width={900}
    >
      <div className="px-5 py-3 border-b border-neutral-300">
        <p>Chuyển đổi ngôn ngữ</p>
      </div>
      <div className="p-5">
        <div>
          <Select
            onChange={(value) => setLanguage(value)}
            value={language}
            options={[
              { label: "Tiếng Việt", value: "VI" },
              { label: "English", value: "EN" },
            ]}
          />
          <div className="mt-5 flex flex-col gap-4">
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <div>
                  <label className="mb-1 inline-block" htmlFor="name">
                    <span className="inline-block mr-2"> Tên bài viết</span>
                  </label>

                  <Input
                    id="name"
                    value={value}
                    onChange={onChange}
                    placeholder="Tên sản phẩm"
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
                  <EditorTiny value={value} onChange={onChange} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-neutral-300">
        <Button onClick={handleTranslate} type="primary">
          Hoàn thành
        </Button>
      </div>
    </Modal>
  );
}

export default PostTranslate;
