import { Spin } from "antd";
import { EditorTiny } from "components";
import { useDetailPage } from "hooks/themes";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();
  const { control, reset } = useForm({
    defaultValues: {
      title: "Bài 1",
      content: "content ngắn thôi",
      avatar: null,
      status: "ACTIVE",
      slug: "123",
    },
  });
  const { isLoading, data } = useDetailPage(Number(id));

  useEffect(() => {
    if (data) {
      reset(data.data);
    }
  }, [data]);
  if (isLoading) return <Spin />;
  if (data)
    return (
      <div>
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
    );
  return null;
}

export default UpdatePage;
