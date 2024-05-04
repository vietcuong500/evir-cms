export interface OptionModel {
  value: string;
  label: string;
}

export interface FilterModel {
  name: string;
  title: string;
  options: OptionModel[];
  selected?: OptionModel[];
}

export interface IFFilterContainerProps {
  filters: FilterModel[];
  onChange: (values: any) => void;
  values?: any;
}
