//import { SignIn } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
import {  SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react"

function Navbar(){
    return(
        <nav className="flex justify-between gap-4">
            <ul>
                <li><a className="text-xl">Home</a></li>
            </ul>
            <ul>
                <li>
                    <h1 className="text-xl"> Stories</h1></li>
            </ul>
            <ul>
                <li className="bg-base-300 rounded-xl">
                    <h1 className=" text-7xl bg-clip-text text-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vFNRhDZOE-agHYpT9Bk409jazk_PO-NBFQ&s')] bg-cover bg-center">
BLOG-co
                    </h1>
                </li>
                </ul>
            <ul>
                <li> <h1 className="text-xl"> About </h1> </li>
            </ul>
          
<SignedOut> 
    <ul>
        <li> <SignInButton/></li>
    </ul>
</SignedOut>

<SignedIn>
  <ul> 
    <li> <Link to="/myprofile" >My profile </Link></li>
  
      <UserButton afterSignOutUrl="/" />
  
  </ul>
</SignedIn>          

     
          
            
        </nav>
    )
}

export default Navbar