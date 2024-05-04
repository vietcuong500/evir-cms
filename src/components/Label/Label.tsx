import React from "react";

function Label(props: any) {
  const { label, ...rest } = props;
  return (
    <label className="mb-1 font-medium inline-block" {...rest}>
      {label}
    </label>
  );
}

export default Label;
