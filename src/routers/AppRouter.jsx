import {  Route, Routes } from "react-router-dom"
import { CrudApp } from "../CrudApp"
import { AddUserButton } from "../components/pages/AddUserButton"
import { DetailsUser } from "../components/pages/DetailsUser"
import { EditUser } from "../components/pages/EditUser"

export const AppRouter = () => {
  return (
    <>
  
      <Routes>
        <Route path="*" element={<CrudApp/>} />
        <Route path="/adduser" element={<AddUserButton/>}/>
        <Route path="/detailsuser" element={<DetailsUser/>}/>
        <Route path="/edituser" element={<EditUser/>}/>
      </Routes>
        
    </>
  )
}