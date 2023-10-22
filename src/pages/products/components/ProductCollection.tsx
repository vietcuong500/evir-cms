import { Button, Tree } from "antd";
import React from "react";

function ProductCollection() {
  return (
    <div className="box">
      <p className="box-title">Danh mục</p>
      <div className="py-3 px-3">
        <Tree
          checkable
          treeData={[
            {
              title: "Quần Nam",
              key: 1,
              children: [
                {
                  title: "Quần vải",
                  key: 2,
                },
                {
                  title: "Quần kaki",
                  key: 3,
                },
                {
                  title: "Quần thun",
                  key: 4,
                },
              ],
            },
            {
              title: "Áo Nam",
              key: 5,
              children: [
                {
                  title: "Áo sơ mi",
                  key: 6,
                },
                {
                  title: "Áo tanktop",
                  key: 7,
                },
                {
                  title: "Áo thun",
                  key: 8,
                },
              ],
            },
          ]}
        />
        <Button className="mt-3" type="link">
          Thêm danh mục
        </Button>
      </div>
    </div>
  );
}

export default ProductCollection;
