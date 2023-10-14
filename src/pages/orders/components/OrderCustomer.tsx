import { Button } from "antd";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { useToggle } from "react-use";

function OrderCustomer() {
  const [isNote, setIsNote] = useToggle(false);

  return (
    <div className="box">
      <div className="box-title flex items-center justify-between">
        <p>Khách hàng</p>
        <Button
          onClick={setIsNote}
          size="small"
          type="text"
          icon={<FiEdit2 />}
        ></Button>
      </div>
      <div className="px-5 py-3 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>Nguyễn Việt Cường</p>
          <Button type="link">Lịch sử mua hàng</Button>
        </div>
        <div>
          <p className="text-neutral-800 mb-1 font-semibold">Thông tin khách hàng</p>
          <div>
            <p className="text-blue-500">vietcuong500@gmail.com</p>
            <p className="text-neutral-600">0389886781</p>
          </div>
        </div>
        <div>
          <p className="text-neutral-800 font-semibold mb-1">Địa chỉ nhận hàng</p>
          <div>
            <p className="text-neutral-600">CT7A KDT Dương Nội, Hà Đông, Hà Nội </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCustomer;
