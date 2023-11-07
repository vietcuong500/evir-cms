import { Tag } from "antd";
import moment from "moment";
import { ORDER_STATUS, PAYMENT_STATUS } from "types/common";

function OrderSummary(props: any) {
  const { date, paymentType, paymentStatus, status } = props;
  return (
    <div className="box">
      <p className="box-title">Thông tin đơn hàng</p>
      <div className="px-5 py-3 text-neutral-800 flex flex-col gap-2">
        <p className="flex items-center justify-between">
          <span>Thời gian đặt hàng</span>
          <span className="font-medium">
            {moment(date).format("DD/MM/YYYY")}
          </span>
        </p>
        <div>
          <p className="text-neutral-800 mb-1 font-semibold">
            Phương thúc thanh toán
          </p>
          <div className="flex items-center justify-between">
            <p className="text-neutral-600">{paymentType}</p>
            <Tag className="!m-0" bordered={false}>{PAYMENT_STATUS[paymentStatus]}</Tag>
          </div>
        </div>
        <div>
          <p className="text-neutral-800 mb-1 font-semibold">
            Trạng thái đơn hàng
          </p>
          <div className="flex items-center justify-between">
            <p className="text-neutral-600">{ORDER_STATUS[status]}</p>
            {/* <Tag bordered={false}>{PAYMENT_STATUS[paymentStatus]}</Tag> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
