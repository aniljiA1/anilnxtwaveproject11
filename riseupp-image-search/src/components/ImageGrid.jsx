import ImageCard from "./ImageCard";

function ImageGrid({ images }) {
  return (
    <div className="grid">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGrid;
