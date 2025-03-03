import { useState } from "react";
import Component2 from "./Component2";
import Navbar1 from "./Navbar1"

function Component() {
    const [x, setX] = useState(0);
    return (
        <div>
            <Component2/>
            <Navbar1/>
        </div>
      );
}

export default Component;