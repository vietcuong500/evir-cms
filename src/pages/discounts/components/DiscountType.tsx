import { Modal } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function DiscountType(props: any) {
  const { open, toggle } = props;
  const navigate = useNavigate();
  return (
    <Modal open={open} onOk={toggle} onCancel={toggle} footer={false}>
      <div className="bg-neutral-100 rounded">
        <p className="box-title">Loại khuyến mãi</p>
      </div>
      <div className="my-2">
        <div
          className="px-5 py-3 hover:bg-neutral-100"
          onClick={() => navigate("add?type=discount-master")}
        >
          <p className="text-neutral-700 font-semibold">Giảm giá tự động</p>
        </div>
        {/* <div className="px-5 py-3 hover:bg-neutral-100">
          <p className="text-neutral-700 font-semibold">Giảm gía sản phẩm</p>
          <p className="text-neutral-800">Giảm giá sản phẩm sử dụng code</p>
        </div>
        <div className="px-5 py-3 hover:bg-neutral-100">
          <p className="text-neutral-700 font-semibold">Giảm giá đơn hàng</p>
          <p className="text-neutral-800">
            Giảm giá theo tổng giá trị đơn hàng
          </p>
        </div>
        <div className="px-5 py-3 hover:bg-neutral-100">
          <p className="text-neutral-700 font-semibold">
            Mua hàng sô lượng lớn
          </p>
          <p className="text-neutral-800">
            Mua càng nhiều đươc giảm giá càng nhiều
          </p>
        </div>
        <div className="px-5 py-3 hover:bg-neutral-100">
          <p className="text-neutral-700 font-semibold">Tặng sản phẩm</p>
          <p className="text-neutral-800">
            Mua sản phẩm X được tặng sản phẩm Y
          </p>
        </div> */}
      </div>
    </Modal>
  );
}

export default DiscountType;
