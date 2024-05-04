import { Button, Input, Popover, Radio } from "antd";
import React, { useState } from "react";
import { MdOutlineSort, MdSearch } from "react-icons/md";
import { useDebounce } from "react-use";

function TableFilter(props: any) {
  const { onChange } = props;
  const [keyword, setKeyword] = useState("");

  useDebounce(
    () => {
      onChange(keyword);
    },
    500,
    [keyword]
  );
  return (
    <div className="px-5 py-3 border-b border-neutral-100">
      <div className="flex gap-2">
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          prefix={<MdSearch className="text-xl text-neutral-500" />}
          bordered={false}
          placeholder="Nhập từ khóa cần tìm kiếm"
        />
        <Button icon={<MdSearch className="text-xl text-neutral-500" />} />
        {/* <Popover
          trigger="click"
          placement="bottomLeft"
          content={
            <div className="px-5 py-3">
              <p className="font-semibold text-neutral-800 mb-2">
                Sắp xếp theo
              </p>
              <Radio.Group>
                <div className="flex flex-col">
                  <Radio name="order" value="id">
                    Mã đơn hàng
                  </Radio>
                  <Radio name="order" value="customer">
                    Khách hàng
                  </Radio>
                  <Radio name="order" value="date">
                    Thời gian
                  </Radio>
                  <Radio name="order" value="total">
                    Đơn gía
                  </Radio>
                </div>
              </Radio.Group>
            </div>
          }
        >
          <Button
            icon={<MdOutlineSort className="text-xl text-neutral-500" />}
          />
        </Popover> */}
      </div>
    </div>
  );
}

export default TableFilter;
