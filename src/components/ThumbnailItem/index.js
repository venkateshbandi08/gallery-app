// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, changeGalleryImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const onClickThumbnail = () => {
    changeGalleryImage(thumbnailDetails)
  }

  const thumbnailStatus = isActive ? 'active-thumbnail' : 'non-active-thumbnail'

  return (
    <li>
      <button className="btn-image">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image-style ${thumbnailStatus}`}
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
