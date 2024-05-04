import { Button, Modal } from "antd";
import { cdnService } from "apis/cdn";
import cdnConfig from "config/cdnConfig";
import { FiUpload } from "react-icons/fi";
import ListCartUpload from "./ListCartUpload";

function FileUpload(props: any) {
  const { open, toggle, files, onChange, onDelete } = props;
  return (
    <Modal centered open={open} footer={false} onCancel={toggle}>
      <div className="bg-white shadow rounded min-w-[60rem]">
        <div className="flex border-b border-neutral-300 p-5 items-center justify-between">
          <label
            htmlFor="files"
            className="cursor-pointer flex items-center gap-2"
          >
            <input
              className="hidden"
              id="files"
              type="file"
              onChange={async (e) => {
                const file: any = e.target.files;
                const url = await cdnService.upload(file[0]);
                onChange(url);
              }}
            />
            <FiUpload />
            <span>Tải lên</span>
          </label>
          {/* <Button icon={<FiUpload />}>Upload</Button> */}
        </div>
        <div className="flex h-96">
          <div className="px-5 py-3 overflow-auto w-full">
            <ListCartUpload
              onDelete={(images: string[]) => onDelete(images)}
              files={files || []}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default FileUpload;
