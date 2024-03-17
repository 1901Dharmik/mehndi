import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "/images/img1.jpg", width: 800, height: 600 },
  { src: "/images/img2.jpg", width: 1600, height: 900 },
  { src: "/images/img3.jpg", width: 800, height: 600 },
  { src: "/images/img4.jpg", width: 1600, height: 900 },
  { src: "/images/img5.jpg", width: 800, height: 600 },
  { src: "/images/img6.jpg", width: 1600, height: 900 },
  { src: "/images/img7.jpg", width: 800, height: 600 },
  { src: "/images/img8.jpg", width: 1600, height: 900 },
  { src: "/images/img9.jpg", width: 800, height: 600 },
  { src: "/images/img10.jpg", width: 1600, height: 900 },
  { src: "/images/img11.jpg", width: 1600, height: 900 },
];

export default function Gallery() {
  return (
    <div className="mx-3 my-3">
       <h2 class="my-8  text-center text-2xl font-bold text-red-600 md:mb-8 lg:text-3xl xl:mb-12">
          Image Gallery
        </h2>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
}
