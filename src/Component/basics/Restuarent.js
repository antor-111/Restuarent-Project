import React,{useState} from "react";
import "./style.css";
import Menu from "../MenuApi";
import Nav from "./nav";
import MenuCard from "./MenuCard";



const Restuarent=()=>{
    const uniqueList=[...new Set(Menu.map((curElem)=>{
            return curElem.category;
    })
    ),
    "All",

];

    console.log(uniqueList);
    const[menuData,setMenuData]=useState(Menu);
    const[menuDiv,setMenuDiv]=useState(uniqueList);
    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
         const UpdatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
         })

         setMenuData(UpdatedList);
    }
    
    return(
        <>
            <Nav filterItem={filterItem} menulist={menuDiv}/>
            <MenuCard menuData={menuData}/>
            
        </>
    );
}

export default Restuarent;