import { Button, Input, Table, Tag } from "antd";
import ProductResource from "components/ProductResource/ProductResource";
import { useToggle } from "react-use";

function OrderProducts() {
  const [open, setOpen] = useToggle(false);
  return (
    <div className="box">
      <ProductResource open={open} toggle={setOpen} />
      <p className="box-title">Sản phẩm</p>
      <div className="px-5 py-3 flex items-center justify-between gap-x-4">
        <Input placeholder="Nhập tù khóa tìm kiếm" />
        <Button type="primary" onClick={setOpen}>
          Browers
        </Button>
      </div>
      <div>
        <Table
          dataSource={[
            {
              key: "1",
              price: "12.000.000",
              variant: "Black / M",
              quantity: 1,
              name: "Iphone 12",
              total_price: "12.000.000",
            },
            {
              key: "2",
              price: "8.400.000",
              name: "Iphone X",
              variant: "Black / L",
              quantity: 1,
              total_price: "8.400.000",
            },
          ]}
          columns={[
            {
              title: "",
              dataIndex: "image",
              key: "image",
              width: 50,
              render(value, record, index) {
                return (
                  <div className="flex-center cursor-pointer w-10 h-12 rounded border border-neutral-300"></div>
                );
              },
            },
            {
              title: "Tên sản phẩm",
              dataIndex: "name",
              key: "name",
              render(value, record, index) {
                return (
                  <div>
                    <p className="font-semibold text-neutral-700 mb-1">
                      {value}
                    </p>
                    <Tag bordered={false}>{record.variant}</Tag>
                    <p className="text-sm mt-1 text-neutral-600">
                      {record.price}
                    </p>
                  </div>
                );
              },
            },
            {
              title: "Số lượng",
              key: "quantity",
              dataIndex: "quantity",
            },
            {
              title: "Thành tiền",
              key: "total_price",
              dataIndex: "total_price",
            },
            {
              title: "",
              dataIndex: "",
              key: "x",
              width: 10,
              render: () => (
                <Button type="link" size="small">
                  Xóa
                </Button>
              ),
            },
          ]}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default OrderProducts;
