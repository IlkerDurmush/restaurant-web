interface FoodItemProps{
  foodName:string;
  
}

const FoodItem = ({foodName}:FoodItemProps) => {
  return (
    <div className='h-72 w-72 bg-gradient-to-t from-slate-300 to-slate-100 rounded-3xl relative shadow-lg'>
      <div className="w-full text-center absolute bottom-2 grid">
        <hr />
        <span className="font-alexbush text-2xl">{foodName}</span>
        <button className="bg-cyan-600 w-fit mx-auto py-1 px-6 rounded-xl text-zinc-200 hover:bg-cyan-950 hover:text-cyan-600">Add To Cart</button>
      </div>
    </div>
  )
}

export default FoodItem