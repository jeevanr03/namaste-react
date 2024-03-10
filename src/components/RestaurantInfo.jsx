import { useParams } from 'react-router-dom'
import useRestaurantData from '../utils/useRestaurantData'
 
const RestaurantInfo = () =>{
  const { id } = useParams()
  const restaurantData = useRestaurantData(id)
  
  const restaurantInfo = restaurantData?.cards?.[0]?.card?.card?.info
  const restData = restaurantData?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards

  return (
    <div>
      <div>{restaurantInfo?.name}</div>
      <div>
        <span>{restaurantInfo?.cuisines.join(",")}</span> | 
        <span>{restaurantInfo?.costForTwoMessage}</span>
      </div>
      <h1>Menu</h1>
      <div>
        {
          restData?.map(({card}) => {
            return <li key={card?.info?.id}><span>{card?.info?.name}</span> - <span>{card?.info?.price ? (card?.info?.price)/100 : (card?.info?.defaultPrice)/100}</span></li>
          })
        }
      </div>
    </div>
  )
}

export default RestaurantInfo