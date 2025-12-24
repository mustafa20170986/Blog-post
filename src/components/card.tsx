interface HerocardProps {
  cls: string;
  imagelink: string;
  cardtitle: string;
  innertext: string;
}
function Herocard({cls,imagelink,cardtitle,innertext}:HerocardProps){
    return (
        <div className={cls}>
<figure>
    <img className="w-full object-cover p-1 rounded-3xl relative"
    src={imagelink} alt="image"/>
</figure>
<div className="card-body">
    <h2 className="card-title font-bold">
        {cardtitle}
    </h2>
    <p className="text-center"> {innertext}</p>
</div>
        </div>
    )
}
export default Herocard