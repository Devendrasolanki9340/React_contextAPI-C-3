import { useContext } from "react"
import { MyShop } from "../context/MyWebsite"


const Navbar = () => {

 let {setIsCardOpen} = useContext(MyShop)


  return (
    <div className="p-4 bg-red-300 rounded-xl flex items-center justify-between ">
        <div>logo</div>
        <div className="flex gap-10 text-xl">

            <p onClick={()=>{
              setIsCardOpen(false)
            }}
             className="cursor-pointer">Home</p>

            <p  
            onClick={()=>{
              setIsCardOpen(true)
            }}
             className="cursor-pointer">Card</p>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar
