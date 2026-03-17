import type React from "react";
import Navbar from "./Nav";
import type { PropsWithChildren } from "react";

const Layout:React.FC<React.PropsWithChildren> = ({children}:PropsWithChildren) => {
  return (<>
    <div className="sticky top-0">
        <Navbar/>
    </div>
    <div className="">
        {children}
    </div>
  </>);
}

export default Layout;