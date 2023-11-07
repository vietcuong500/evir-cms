import { Button, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { IDataTranslate, IParamsTranslate } from "apis/translate";
import { EditorTiny } from "components";
import { useAddLanguage, useGetLanguage } from "hooks/translate";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

function ProductTranslate(props: any) {
  const { open, toggle, product_id } = props;
  const [language, setLanguage] = useState("EN");
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const [params, setParams] = useState<IParamsTranslate>({
    refId: product_id,
    refTable: "product",
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
        const name = column.find((el: any) => el.ref_column === "name").content;
        const description = column.find(
          (el: any) => el.ref_column === "description"
        ).content;
        reset({
          name,
          description,
        });
      }
    }
  }, [data]);

  const handleTranslate = handleSubmit(async (data) => {
    const { name, description } = data;
    const body: IDataTranslate = {
      ref_id: params.refId,
      ref_table: params.refTable,
      language_code: language,
      column: [
        {
          ref_column: "name",
          content: name,
        },
        {
          ref_column: "description",
          content: description,
        },
      ],
    };
    const res = await mutateAsync(body);
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
              name="name"
              render={({ field: { onChange, value } }) => (
                <div>
                  <label className="mb-1 inline-block" htmlFor="name">
                    <span className="inline-block mr-2"> Tên sản phẩm</span>
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
              <Controller
                control={control}
                name="description"
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

export default ProductTranslate;
