import Image from "next/image";
import * as T from "./elements";

const TopMenu: React.FC = () => {
  return (
    <T.Nav>
      <Image alt='logo' src='/imgs/logo.png' width={220} height={28} />
      <T.Button>Login</T.Button>
    </T.Nav>
  );
};

export default TopMenu;
