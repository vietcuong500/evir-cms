import { Button } from "antd";
import React from "react";

interface IFormPageLayoutProps {
  contentLeft: any;
  contentRight: any;
  footer: any;
}

function FormPageLayout(props: IFormPageLayoutProps) {
  const { contentLeft, contentRight, footer } = props;
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-12  gap-x-8">
        <div className="col-span-8 flex flex-col gap-8">{contentLeft}</div>
        <div className="col-span-4 flex flex-col gap-8">{contentRight}</div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-8">{footer}</div>
    </div>
  );
}

export default FormPageLayout;
