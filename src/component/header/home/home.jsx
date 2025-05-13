import React from 'react'
import pic from '/src/images/wp2406589.webp'
import { DrawerComponent } from '../drawer/drawer'
import { TableComponent } from '../table/table'



export default function Home() {
  return (
    <div className="relative h-screen w-full">
  <img src={pic} alt="Background" className="absolute w-full h-full object-cover " />

  <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/50">
    <h1 className="text-6xl ms-5  font-bold text-gray-50">
      Welcome To BudgetApp
    </h1>
    <div>
      <DrawerComponent />
    </div>
  </div>
  <TableComponent/>
</div>



  )
}



