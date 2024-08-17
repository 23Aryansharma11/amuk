import Navbar from "@/components/custom/Navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center ">
        <Navbar />
        <div className="w-full flex-grow">
        <Outlet />
        </div>
    </main>
  )
}

export default RootLayout