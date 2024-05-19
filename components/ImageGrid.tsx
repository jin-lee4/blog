import Image from "next/image";
import styles from "./../src/app/styles/ImageGrid.module.css";

const images = [
  "/images/1.JPG",
  "/images/3.TIF",
  "/images/4.TIF",
  "/images/5.TIF",
];

const ImageGrid = () => {
  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-4 gap-x-4 flex-wrap flex">
        {images.map((src, index) => (
          <div key={index} className={styles.gridItem}>
            <Image src={src} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageGrid;
