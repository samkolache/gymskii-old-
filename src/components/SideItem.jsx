import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function SideItem({icon, name, path}) {
    return (
    <>
    <NavLink to = {path} className= {({isActive}) => {
      return isActive ? "flex items-center gap-2 p-2 rounded-lg cursor-pointer bg-brandSelected text-white" : "flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-brandHover text-black"
    }}>
        <span className="material-icons">{icon}</span> 
        <p className="text-md w-full">{name}</p>
    </NavLink>
      
    </>
 )
}