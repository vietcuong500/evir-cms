import { StyleProvider } from "@ant-design/cssinjs";
import { MainLayout } from "./layouts";

function Root() {
  return (
    <StyleProvider hashPriority="high">
      <MainLayout />
    </StyleProvider>
  );
}

export default Root;
