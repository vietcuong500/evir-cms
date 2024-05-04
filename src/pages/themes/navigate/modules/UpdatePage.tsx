import { Button, Checkbox, Input, Select, Spin } from "antd";
import { EditorTiny } from "components";
import { useDeletePage, useDetailPage, useUpdatePage } from "hooks/themes";
import { enqueueSnackbar } from "notistack";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      title: "Bài 1",
      content: "content ngắn thôi",
      avatar: null,
      status: "ACTIVE",
      slug: "123",
    },
  });
  const { isLoading, data } = useDetailPage(Number(id));
  const { mutateAsync, isPending } = useUpdatePage();
  const { mutateAsync: ondelete, isPending: loadingDelete } = useDeletePage();

  useEffect(() => {
    if (data) {
      reset(data.data);
    }
  }, [data]);
  const handleDelete = async () => {
    const res = await ondelete(Number(id));
    if (res.code === 200 || res.code === 0) {
      enqueueSnackbar({
        message: "Xóa trang thành công",
        variant: "success",
      });
      navigate("/themes/navigate");
    } else {
      enqueueSnackbar({
        message: "Xóa trang không thành công",
        variant: "error",
      });
    }
  };
  if (isLoading) return <Spin />;
  if (data)
    return (
      <div>
        <div className="flex flex-col gap-4">
          <div className="box">
            <p className="box-title">Thông tin cơ bản</p>
            <div className="p-5">
              <div className="flex gap-4">
                <Controller
                  control={control}
                  name="title"
                  render={({ field: { onChange, value } }) => (
                    <div className="w-full">
                      <label className="mb-1 inline-block" htmlFor="name">
                        <span className="inline-block mr-2"> Tên trang</span>
                      </label>

                      <Input id="name" value={value} onChange={onChange} />
                    </div>
                  )}
                />
                <Controller
                  control={control}
                  name="slug"
                  render={({ field: { onChange, value } }) => (
                    <div className="w-full">
                      <label className="mb-1 inline-block" htmlFor="link">
                        <span className="inline-block mr-2">URL</span>
                      </label>

                      <Input id="link" value={value} onChange={onChange} />
                    </div>
                  )}
                />
              </div>
              <Controller
                name="status"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div className="flex items-center mt-4">
                    <Checkbox
                      checked={value === "ACTIVE"}
                      onChange={(e) =>
                        onChange(e.target.checked ? "ACTIVE" : "DRAFT")
                      }
                      id="status"
                    />
                    <label className="inline-block" htmlFor="status">
                      <span className="inline-block ml-2">
                        Hiển thị trên điều hướng
                      </span>
                    </label>
                  </div>
                )}
              />
            </div>
          </div>
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, value } }) => (
              <EditorTiny value={value} onChange={onChange} />
            )}
          />
        </div>

        <div className="flex items-center justify-end gap-4 mt-8">
          <Button danger type="primary" onClick={handleDelete}>
            Xóa
          </Button>
          <Button
            type="primary"
            onClick={handleSubmit(async (data: any) => {
              const res = await mutateAsync({ id, data });
              if (res.code === 0 || res.code === 200) {
                enqueueSnackbar({
                  message: "Sửa trang thành công",
                  variant: "success",
                });
              } else {
                enqueueSnackbar({
                  message: "Sửa trang không thành công",
                  variant: "error",
                });
              }
            })}
          >
            Hoàn thành
          </Button>
        </div>
      </div>
    );
  return null;
}

export default UpdatePage;
