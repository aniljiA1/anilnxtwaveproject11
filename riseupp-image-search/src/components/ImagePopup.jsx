function ImagePopup({ image }) {
  return (
    <div className="popup">
      <h4>{image.user.name}</h4>
      <p>❤️ {image.likes} Likes</p>
      <p>{image.alt_description}</p>
    </div>
  );
}

export default ImagePopup;
