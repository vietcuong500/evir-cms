import { Button, Input, Table, Tag } from "antd";
import ProductResource from "components/ProductResource/ProductResource";
import { useToggle } from "react-use";
import { formatCurrency } from "utlis/common";

function OrderProducts(props: any) {
  const { orderDetails } = props;
  const [open, setOpen] = useToggle(false);
  return (
    <div className="box">
      {/* <ProductResource open={open} toggle={setOpen} />
      <p className="box-title">Sản phẩm</p>
      <div className="px-5 py-3 flex items-center justify-between gap-x-4">
        <Input placeholder="Nhập tù khóa tìm kiếm" />
        <Button type="primary" onClick={setOpen}>
          Browers
        </Button>
      </div> */}
      <div>
        <Table
          dataSource={orderDetails?.map((el: any) => ({ ...el, key: el.id }))}
          columns={[
            {
              title: "",
              dataIndex: "product",
              key: "product",
              width: 50,
              render(value, record, index) {
                return (
                  <div className="flex-center cursor-pointer w-10 h-12 rounded border border-neutral-300">
                    <img
                      src={value.images}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                );
              },
            },
            {
              title: "Tên sản phẩm",
              dataIndex: "product",
              key: "product",
              render(value, record, index) {
                return (
                  <div>
                    <p className="font-semibold text-neutral-700 mb-1">
                      {value.name}
                    </p>
                    <p className="text-sm mt-1 text-neutral-600">
                      {formatCurrency(value.price)} vnd
                    </p>
                  </div>
                );
              },
            },
            {
              title: "Giảm giá",
              key: "discount_price",
              dataIndex: "discount_price",
              render: (value) => <span>{formatCurrency(value)} vnd</span>,
            },
            {
              title: "Số lượng",
              key: "quantity",
              dataIndex: "quantity",
            },
            {
              title: "Thành tiền",
              key: "total",
              dataIndex: "total",
              render: (value) => <span>{formatCurrency(value)} vnd</span>,
            },
            // {
            //   title: "",
            //   dataIndex: "",
            //   key: "x",
            //   width: 10,
            //   render: () => (
            //     <Button type="link" size="small">
            //       Xóa
            //     </Button>
            //   ),
            // },
          ]}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default OrderProducts;
