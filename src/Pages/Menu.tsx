import FoodItem from "../Components/FoodItem"

const Menu = () => {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-20 mx-auto my-8">
      <FoodItem foodName="Lavash"/>
      <FoodItem foodName="Pizza"/>
      <FoodItem foodName="Salata"/>
      <FoodItem foodName="Kufteta"/>
      <FoodItem foodName="Kebab"/>
      <FoodItem foodName="Pork Chops"/>
      <FoodItem foodName="Macaroni"/>
      <FoodItem foodName="Fries"/>
      <FoodItem foodName="Shekmbe"/>
    </div>
  )
}

export default Menu