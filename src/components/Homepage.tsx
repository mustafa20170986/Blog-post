import Herocard from "./card";
import Navbar from "./navbar";

function Homepae(){
    return(
        <div className="flex flex-col justify-center items-center gap-6">
            <Navbar/>

{/* prehero card  text section*/}
           
           <div className="bg-base-200 shadow-lg w-full rounded-xl">
<h1 className=" text-center font-bold text-xl md:text-md lg:text-lg  p-5 m-5">Welcome to Blog co</h1>
<p className="font-semibold text-center">
    craft naratives that ignites ispirations and 
</p> 
<div className="flex gap-3 justify-center items-center">
<p className="text-red-400 text-center font-bold">Knowledge</p>
<p className="text-teal-400 text-center font-bold">Inspiration</p>
          </div>
</div>

{/* hero card  section*/}

<Herocard
cls="card card-side bg-base-300   border-base-100 shadow-xl md:card-md lg:card-lg"
imagelink="https://posterspy.com/wp-content/uploads/2024/10/Doomsday-by-VISCOM.jpg"
cardtitle="Doomsday relese date" 
innertext="after a long time of waiting dooms day is arriving in the deceber  18 2026 dont miss the chance to waych the movie .Here is the list
of theater llist  where u can watch the movie very first day of release"
/>
{/* Latest section card  section*/}
<div className="flex gap-2 mt-4">
<Herocard 
cls="card bg-base-300 rounded-3xl border-base-100 shadow-xl md:-card-md sm:card-sm lg:card-lg xs-card-xs"
imagelink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0zHAzhQJsd6j-ddkMkNZr5XnzSwVOcP0KA&s"
cardtitle="Elon musk new podcast here..."
innertext="we all have to save money  there will be no 
poverty in future"
           />

           <Herocard 
cls="card bg-base-300 rounded-3xl  border-base-100 shadow-xl md:-card-md sm:card-sm lg:card-lg xs-card-xs"
imagelink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0zHAzhQJsd6j-ddkMkNZr5XnzSwVOcP0KA&s"
cardtitle="Elon musk new podcast here..."
innertext="we all have to save money  there will be no 
poverty in future"
           />


           <Herocard 
cls="card bg-base-300 border-base-100 rounded-3xl  shadow-xl md:-card-md sm:card-sm lg:card-lg xs-card-xs"
imagelink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0zHAzhQJsd6j-ddkMkNZr5XnzSwVOcP0KA&s"
cardtitle="Elon musk new podcast here..."
innertext="we all have to save money  there will be no 
poverty in future"
           />

           <Herocard 
cls="card bg-base-300 border-base-100 rounded-3xl  shadow-xl md:-card-md sm:card-sm lg:card-lg xs-card-xs"
imagelink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0zHAzhQJsd6j-ddkMkNZr5XnzSwVOcP0KA&s"
cardtitle="Elon musk new podcast here..."
innertext="we all have to save money  there will be no 
poverty in future"
           />
</div>
        </div>
    )
}
export  default Homepae