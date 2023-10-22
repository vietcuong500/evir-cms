import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useListingCategory } from "../hook";

function ListingCategory() {
  const [params, setParams] = useState({
    keyword: "",
    page: 1,
    page_size: 10,
  });

  const { isLoading, data } = useListingCategory(params);
  console.log(data);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-neutral-700">
          Danh mục bài viết
        </p>
        <div className="flex items-center gap-2">
          <Button type="primary">Thêm danh mục</Button>
        </div>
      </div>
    </div>
  );
}

export default ListingCategory;
