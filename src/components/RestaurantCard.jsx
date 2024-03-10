import BASE_URLS from "../utils/constants"

const RestaurantCard = (props) => {
  const { data } = props
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = data.info
  return (
    <div className="card-body">
      <div>
        <img className="res-img" src={`${BASE_URLS?.CDN_URL}${cloudinaryImageId}`} alt="res-img" />
      </div>
      <div className="res-name">{name}</div>
      <div className="res-cuisines">{cuisines.join(", ")}</div>
      <div className="res-details">
        <div>{avgRating} Stars</div> &nbsp; | &nbsp;
        <div>{sla.deliveryTime} Minutes</div> &nbsp; | &nbsp;
        <div>{costForTwo}</div>
      </div>
    </div>
  )
}

export default RestaurantCard