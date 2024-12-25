 
 import { appleImg, bagImg, searchImg } from "../utils";
import {navLists} from "../constants";
 const Navbar = () => {
  return (
    <header>
      <nav>
        <img src = {appleImg} alt = "apple" width={14} 
        height={18}/>
        <div className="flex flex-1 justify-center max-sm:hidden ">   
          {navLists.map((nav) =>(
          <div key = {nav} className="px-5 text-sm 
          cursor-pointer text-gray hover:text-white transition-all">
            {nav}
            </div>
          ))}
          </div> 
          <div className="flex items-baseline gap 7 max-sm: justify-end max-sm:flex-1 
          cursor-pointer text-gray hover:text-white transition-all">
            <img src = {searchImg} alt= "search" width={18}
            height={18}/>
            <img src = {bagImg} alt= "bag" width={18}
            height={18}/>
          </div>
      </nav>
    </header>
  )
}
export default Navbar

