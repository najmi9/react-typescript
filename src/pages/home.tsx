import React, { useEffect, useState } from "react";
import { calculate } from "../components/logic";

interface Props{
  title?: string
}

export const Home: React.FC<Props> = ({title}) =>{

    const [count, setCount] = useState<number | null>(0);
    
   useEffect(()=>{
       setCount(calculate([{key:"1", value: 12}, {key:"1", value: 25}]));
   }, []);

    return (
        <div className="main">
            <h1 className="hero">
                {title ? title: "Hello World"} : { count }
            </h1>
        </div>
    );
}