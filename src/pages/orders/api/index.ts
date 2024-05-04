import serviceConfig from "config/service";

const url = {
  listing: "/order/listing",
  change_status: "/order/change-status",
  detail: "/order/detail/{{id}}",
};

export interface ChangeStatusOrderModel {
  id: number;
  status: string;
}

export const orderService = {
  listing: (params: any) => {
    return serviceConfig.get(url.listing, { params }).then((res) => res.data);
  },
  change_status: (data: ChangeStatusOrderModel) => {
    return serviceConfig.post(url.change_status, data).then((res) => res.data);
  },
  detail: (id: any) => {
    return serviceConfig
      .get(url.detail.replace("{{id}}", id))
      .then((res) => res.data);
  },
};
