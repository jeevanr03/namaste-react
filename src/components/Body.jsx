import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom"

const Body = () => {
  const [resCard, setResCard] = useState()
  const [filteredCards, setFilteredCards] = useState()
  const [isFiltered, setIsFiltered] = useState(false)
  const [searchText, setSearchText] = useState("")
  const filterCards = () => {
    setIsFiltered(!isFiltered)
    if(isFiltered) {
      setFilteredCards(resCard)
      return 
    }
    let filteredList = resCard.filter(({info}) => info?.avgRating > 4.0)
    setFilteredCards(filteredList)
  }
  const handleSearchInput = (evt) => setSearchText(evt.target.value)

  useEffect(() => {
    (async function fetchRestaurantData () {
      let resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const { data } = await resData.json()
      const requiredCardData = data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setResCard(requiredCardData)
      setFilteredCards(requiredCardData)
    })();

    return () => {
      // anything written here will fire after component is unmounted 
    }

  }, [])

  useEffect(() => filterRestaurantCards(), [searchText])

  const filterRestaurantCards = () => {
    if(!searchText) {
      setFilteredCards(resCard)
      return
    }
    let filteredCard = resCard?.filter(({info}) => info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    setFilteredCards(filteredCard)
  }

  return (
    <div className="body">
      <div className="search-container">
        <div>
          <input type="text" placeholder="Search Restaurants" value={searchText} onChange={(e) => handleSearchInput(e)} />
        </div>
        <button onClick={filterCards}>Top Rated Restaurants</button>
      </div>
      <div className="card-container">
        {filteredCards?.map((data) => <Link key={data.info.id} to={`/restaurant-info/${data.info.id}`}><RestaurantCard data={data} /></Link>)}
      </div>
    </div>
  )
}

export default Body