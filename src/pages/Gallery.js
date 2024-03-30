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
  { src: "/images/IMG-20240316-WA0002.jpg", width: 1600, height: 900 },
  { src: "/images/IMG-20240316-WA0003.jpg", width: 800, height: 600 },
  { src: "/images/IMG-20240316-WA0004.jpg", width: 1600, height: 900 },
  { src: "/images/IMG-20240316-WA0005.jpg", width: 800, height: 600 },
  { src: "/images/IMG-20240316-WA0006.jpg", width: 1600, height: 900 },
  { src: "/images/IMG-20240316-WA0007.jpg", width: 800, height: 600 },
  { src: "/images/IMG-20240316-WA0008.jpg", width: 1600, height: 900 },
];

export default function Gallery() {
  return (<>
  <h2 class="my-8  text-center text-2xl font-bold text-red-600 md:mb-8 lg:text-3xl xl:mb-12">
        Image Gallery
      </h2>
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-4 py-4 ">
     
      {photos.map((photo) => (
        <div key={photo.src}>
          <img src={photo.src} className="rounded-md" alt="" />
        </div>
      ))}
    </div>
    </>
  );
}
