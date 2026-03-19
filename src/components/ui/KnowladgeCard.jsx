import ProjBtn from "./ProjBtn";

const KnowladgeCard = (prop) => {
    return (<>
        <a href={prop.url} target="_blank">

        
        <div className="backdrop-blur-md border border-indigo-900/30 shadow-2xl bg-linear-to-br from-white/20 to-indigo-950/50 rounded-3xl h-auto w-full px-3 py-5 flex flex-col gap-3">
            <div className="flex items-center gap-7 ">
                <img src={prop.img} alt={prop.name} className="w-24"/>
                <h3 className="text-gray-50 text-2xl font-bold">
                    {prop.name}
                </h3>
            </div>
            <div className="text-gray-50 text-lg">
                {prop.description}
            </div>
            {prop.url && <div>
              <ProjBtn/>  
            </div>}
        </div>
        </a>
    </>)
}

export default KnowladgeCard;