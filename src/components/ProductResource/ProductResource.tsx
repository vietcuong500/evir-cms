import { Button, Input, Modal, Table } from "antd";
import { useListingProduct } from "hooks/product";
import React, { useEffect, useState } from "react";

function ProductResource(props: any) {
  const { open, toggle, onChange, defaultValues } = props;
  const [params, setParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });
  const [rowKeys, setRowKeys] = useState<any>(defaultValues || []);
  const [rowsSelected, setRowsSelected] = useState<any>([]);
  const { isLoading, data, isSuccess } = useListingProduct(params);

  useEffect(() => {
    setRowKeys(defaultValues);
  }, [defaultValues]);

  return (
    <Modal open={open} onCancel={toggle} onOk={toggle} footer={false}>
      <div className="bg-neutral-100 rounded">
        <p className="box-title">Thêm sản phẩm</p>
      </div>
      <div>
        <div className="px-5 py-3 flex items-center justify-between gap-4">
          <Input placeholder="Nhập từ khóa tìm kiếm" />
          <Button type="primary">Tìm kiếm</Button>
        </div>
        <Table
          loading={isLoading}
          style={{
            width: "60vw",
          }}
          size="small"
          rowSelection={{
            selectedRowKeys: rowKeys,
            onChange: (keys, rows) => {
              setRowKeys(keys);
              setRowsSelected(rows);
            },
          }}
          dataSource={
            isSuccess ? data.data.map((el: any) => ({ ...el, key: el.id })) : []
          }
          columns={[
            {
              title: "",
              dataIndex: "images",
              key: "images",
              width: 90,
              render(value, record, index) {
                return (
                  <div className="flex-center cursor-pointer w-10 h-12 bg-neutral-200">
                    <img src={value} alt="" />
                  </div>
                );
              },
            },
            {
              title: "Tên sản phẩm",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Giá bán",
              key: "price",
              dataIndex: "price",
            },
          ]}
          pagination={false}
        />
      </div>
      <div className="flex items-center justify-end gap-4 px-5 py-3">
        <Button>Hủy</Button>
        <Button
          onClick={() => {
            const id_not_in_init = rowKeys.filter(
              (el: number) => !defaultValues.includes(el)
            );
            const product_not_in_init = rowsSelected.filter(
              (el: any) => !defaultValues.includes(el.id)
            );
            onChange({
              product_ids: id_not_in_init,
              products: product_not_in_init,
            });
            toggle();
          }}
          type="primary"
        >
          Thêm sản phẩm
        </Button>
      </div>
    </Modal>
  );
}

export default ProductResource;
