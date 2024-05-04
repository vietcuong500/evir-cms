import { Modal, Table } from "antd";
import { useListingCollection } from "hooks/collection";
import React, { useState } from "react";

function CategoryResource(props: any) {
  const { open, toggle, onClick, data, isLoading } = props;
  const [params, setParams] = useState({
    page: 1,
    page_size: 100,
  });
  return (
    <Modal open={open} onCancel={toggle} onOk={toggle} footer={false}>
      <div className="bg-neutral-100 rounded">
        <p className="box-title">Danh mục</p>
      </div>
      <div>
        <Table
          pagination={{
            total: data ? data.total : 0,
            pageSize: 10,
            onChange(page) {
              setParams({
                ...params,
                page,
              });
            },
          }}
          loading={isLoading}
          style={{
            width: "60vw",
          }}
          size="small"
          dataSource={
            data ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                onClick(record);
              }, // click row
            };
          }}
          columns={[
            {
              title: "Tên sản phẩm",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Số lượng",
              key: "num_of_products",
              dataIndex: "num_of_products",
            },
          ]}
        />
      </div>
    </Modal>
  );
}

export default CategoryResource;
