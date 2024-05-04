import { Button, Checkbox, Divider, Input, Modal } from "antd";
import { FiPlus } from "react-icons/fi";
import "./editvariant.scss";

function EditVariant(props: any) {
  const { open, toggle } = props;
  return (
    <Modal
      open={open}
      footer={false}
      onCancel={toggle}
      onOk={toggle}
      className="editvariant"
    >
      <div className="px-5 rounded-md py-3 bg-neutral-100">
        <p className="capitalize font-semibold text-neutral-900">Chỉnh sửa</p>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="px-5 py-3 flex flex-col gap-4">
        <div>
          <p className="font-semibold text-neutral-800 mb-1">Media</p>
          <div>
            <div className="w-24 h-24 cursor-pointer group hover:border-blue-500 rounded border-dashed border border-neutral-400 flex items-center justify-center">
              <FiPlus className="text-4xl group-hover:text-blue-500 text-neutral-500" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-neutral-800 mb-1">Inventory</p>
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1 inline-block" htmlFor="name">
                SKU
              </label>
              <Input id="name" placeholder="Tên sản phẩm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 inline-block" htmlFor="quantity">
                  Số lượng sản phẩm
                </label>
                <Input id="quantity" placeholder="Số lượng sản phẩm tồn kho" />
              </div>
              <div>
                <label className="mb-1 inline-block" htmlFor="quantity">
                  Hiện có
                </label>
                <Input id="quantity" placeholder="Số lượng sản phẩm hiện có" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-neutral-800 mb-1">Price</p>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 inline-block" htmlFor="price-regular">
                  Giá thường
                </label>
                <Input id="price-regular" placeholder="Tên sản phẩm" />
              </div>
              <div>
                <label className="mb-1 inline-block" htmlFor="price-regular">
                  Giá bán
                </label>
                <Input id="price-regular" placeholder="Tên sản phẩm" />
              </div>
            </div>
            <div className="flex items-center gap-4 my-4">
              <Checkbox id="inventory" />
              <label htmlFor="inventory">Tính thuế sản phẩm</label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 inline-block" htmlFor="price-regular">
                  Giá nhập
                </label>
                <Input id="price-regular" placeholder="Tên sản phẩm" />
              </div>
              <div>
                <label className="mb-1 inline-block" htmlFor="price-regular">
                  Lãi
                </label>
                <Input
                  readOnly
                  bordered={false}
                  style={{
                    backgroundColor: "#d2d2d2",
                  }}
                  id="price-regular"
                  placeholder="Tên sản phẩm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="px-5 py-3 flex gap-4 justify-end">
        <Button>Hủy</Button>
        <Button type="primary">Hoàn thành</Button>
      </div>
    </Modal>
  );
}

export default EditVariant;
