import { Button, Divider, Table, Tag } from "antd";
import { FiPlus } from "react-icons/fi";
import { useToggle } from "react-use";
import ChooseImageVariant from "./ChooseImageVariant";

const variants = [
  {
    label: "Size",
    options: ["M", "L"],
  },
  {
    label: "Màu sắc",
    options: ["Đen", "Trắng"],
  },
];

function ProductVariants() {
  const [open, setOpen] = useToggle(false);
  return (
    <div className="box">
      <p className="box-title">Quản lý mã sản phẩm</p>
      <div className="">
        <div className="p-5 flex flex-col gap-y-2">
          {variants.map((el: any, id: number) => (
            <div className="flex items-center justify-between" key={id}>
              <div>
                <p className="text-neutral-700 font-semibold mb-1">
                  {el.label}
                </p>
                <div className="flex items-center gap-1">
                  {el.options.map((option: string, option_idx: number) => (
                    <Tag bordered={false} key={option_idx}>
                      {option}
                    </Tag>
                  ))}
                </div>
              </div>
              <Button size="small" type="link">
                Sửa
              </Button>
            </div>
          ))}
        </div>
        <Divider style={{ margin: 0 }} />
        <Button className="my-3" type="link">
          Thêm thuộc tính
        </Button>
        <Table
          dataSource={[
            {
              key: "1",
              availble: 32,
              on_hand: 21,
              sku: "No SKU",
              price: "12.000.000",
              name: "Black / M",
            },
            {
              key: "2",
              availble: 42,
              on_hand: 10,
              sku: "No SKU",
              price: "8.400.000",
              name: "Black / L",
            },
            {
              key: "3",
              availble: 32,
              on_hand: 21,
              sku: "No SKU",
              price: "12.000.000",
              name: "White / M",
            },
            {
              key: "4",
              availble: 42,
              on_hand: 10,
              sku: "No SKU",
              price: "8.400.000",
              name: "White / L",
            },
          ]}
          columns={[
            {
              title: "",
              dataIndex: "image",
              key: "image",
              render(value, record, index) {
                return (
                  <div
                    onClick={setOpen}
                    className="flex-center cursor-pointer w-10 h-12 rounded border border-neutral-300"
                  >
                    <FiPlus className="text-neutral-700 text-xl" />
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
              title: "SKU",
              dataIndex: "sku",
              key: "sku",
            },
            {
              title: "Giá bán",
              key: "price",
              dataIndex: "price",
            },
            {
              title: "Tồn kho",
              key: "availble",
              dataIndex: "availble",
            },
            {
              title: "Hiện có",
              key: "on_hand",
              dataIndex: "on_hand",
            },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: () => (
                <Button type="link" size="small">
                  Sửa
                </Button>
              ),
            },
          ]}
          pagination={false}
        />
      </div>
      <ChooseImageVariant open={open} toggle={setOpen} />
    </div>
  );
}

export default ProductVariants;
