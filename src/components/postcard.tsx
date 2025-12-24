interface Pc{
    tit:string
    cont:string
    handledelete:(id:string)=>void
    id:string
}

function Postcard({tit,cont,handledelete,id}:Pc){
    const modalid=`modal-${id}`
    return(
        <div className="card bg-base-100  border border-pink-400">
            <div className="card-body">
                <h1 className="font-bold lg:text-xl md:text-md sm:text-sm xs-text-xs border border-indigo-400 rounded-xl text-center">
                    {tit}
                </h1>
                <p className="font-semibold lg:text-xl md:text-lg sm:text-sm xs-text-xs">
                    {cont}
                </p>
            </div>
            <div className="card-actions justify-around">


                <button className="btn bg-pink-500 text-white p-5 rounded-xl" onClick={()=>(document.getElementById(modalid)as HTMLDialogElement).showModal()}>Delete</button>
                <dialog id={modalid} className="modal">
                    <div className="modal-box w-11/12">
                    <h3 className="font-semibold">Are sure want to delete</h3>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bnt-soft" onClick={()=>handledelete(id)}>Delete</button>
                            <button className="btn btn-ghost">Close</button>
                        </form>
                        </div>
                    </div>
                </dialog>


                <button className="btn bg-indigo-500 text-white p-5 rounded-md" onClick={()=>('hui')}>Edit</button>
            </div>
        </div>
    )
}
export default Postcard