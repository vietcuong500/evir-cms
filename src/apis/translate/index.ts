import serviceConfig from "config/service";

const url = {
  base: "/admin/translate",
};

export interface IParamsTranslate {
  refId: number;
  refTable: string;
}

interface IColumnTranslate {
  ref_column: string;
  content: string;
}

export interface IDataTranslate {
  ref_id: number;
  ref_table: string;
  language_code: string;
  column: IColumnTranslate[];
}

export const translateService = {
  addLanguage: (data: IDataTranslate) => {
    return serviceConfig.put(url.base, data).then((res) => res.data);
  },
  getLanguage: (params: IParamsTranslate) => {
    return serviceConfig.get(url.base, { params }).then((res) => res.data);
  },
};
