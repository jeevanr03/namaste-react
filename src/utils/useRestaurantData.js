import { useState, useEffect } from "react"

const useRestaurantData = (id) => {
  const [restaurantData, setRestaurantData] = useState()
  useEffect(() => {
    (getRestaurantData = async () => {
      const respData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
      const { data } = await respData?.json()
      setRestaurantData(data)
    })();
  }, [])
  return restaurantData
}

export default useRestaurantData