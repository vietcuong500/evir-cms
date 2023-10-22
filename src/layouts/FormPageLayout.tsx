import { Button } from "antd";
import React from "react";

function FormPageLayout(props: any) {
  const { contentLeft, contentRight, onSubmit, onCancel, loading } = props;
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-8">{contentLeft}</div>
        <div className="col-span-4 flex flex-col gap-8">{contentRight}</div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">
        <Button onClick={onCancel}>Hủy</Button>
        <Button loading={loading} onClick={onSubmit} type="primary">
          Hoàn thành
        </Button>
      </div>
    </div>
  );
}

export default FormPageLayout;
