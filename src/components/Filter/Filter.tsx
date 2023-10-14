import { useMemo, useState } from "react";
import { useUpdateEffect } from "react-use";
import { FiCheck } from "react-icons/fi";
import { FilterItem } from "./FilterItem";
import { Button, Popover } from "antd";
import { MdClose } from "react-icons/md";
import { FilterModel, IFFilterContainerProps } from "./types";

export default function Filter(props: IFFilterContainerProps) {
  const { filters, onChange, values } = props;
  const defaultValues: FilterModel[] = useMemo(() => {
    if (values) {
      const t = Object.entries(values);
      const temp: any = filters
        ? filters.map((el) => {
            const a = t.find((ti) => ti[0] === el.name);
            if (a) {
              return { ...el, selected: a[1] };
            }
            return { ...el, selected: [] };
          })
        : [];
      return temp;
    } else {
      return filters.map((el) => ({ ...el, selected: [] }));
    }
  }, [values]);
  const [anchorMenu, setAnchorMenu] = useState(null);
  const handleClick = (e: any) => setAnchorMenu(e.currentTarget);
  const handleClose = () => setAnchorMenu(null);
  const openMenu = Boolean(anchorMenu);
  const [filtersSelected, setFiltersSelected] =
    useState<FilterModel[]>(defaultValues);

  useUpdateEffect(() => {
    const result = filtersSelected.map((el: any) => ({
      [el.name]: el.selected,
    }));
    onChange(Object.assign({}, ...result));
  }, [filtersSelected]);
  return (
    <div>
      <div className="flex flex-row gap-2 flex-nowrap items-center">
        <div>
          <Popover
          className="filter-popover"
            trigger="click"
            placement="bottomLeft"
            content={
              <div className="py-2 w-52">
                {filtersSelected.map((filter, filterId) => (
                  <FilterItem
                    onChange={(values: any) =>
                      setFiltersSelected(
                        filtersSelected.map((el: any) =>
                          el.name === values.name ? values : el
                        )
                      )
                    }
                    item={filter}
                    key={filterId}
                    values={filter.selected}
                  />
                ))}
              </div>
            }
          >
            <Button
              onClick={handleClick}
              className="p-2 bg-stone-100 rounded-md"
            >
              Bộ lọc
            </Button>
          </Popover>
        </div>
        {filtersSelected.map((el: any) =>
          el.selected.map((child: any, id: number) => (
            <div
              key={id}
              className="flex h-[32px] flex-row items-center text-stone-700  px-4 bg-stone-100 rounded-md"
            >
              <span className="font-semibold mr-1">{el.title}</span>
              <span>{child.label}</span>
              <button
                onClick={() => {
                  setFiltersSelected(
                    filtersSelected.map((it: any) => {
                      if (it.name === el.name) {
                        return {
                          ...it,
                          selected: it.selected.filter(
                            (se: any) => se.value !== child.value
                          ),
                        };
                      }
                      return it;
                    })
                  );
                }}
                className="ml-3 rounded-full"
              >
                <MdClose className="" />
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}
