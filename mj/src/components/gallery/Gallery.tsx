import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <div className="gallery">
          <div className="gallery-content">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-5xl lg:text-6xl">
              Appreciating Your
              <span className="dark:pink-blue-500 text-pink-600"> Beauty</span>
            </h1>

            <p className=" text-gray-500 dark:text-gray-400 lg:text-xl">
              This gallery is a tribute to the most beautiful person in my life
              MJ Vinculado yes you ikaw . Each photo here captures your radiant
              smile, your graceful presence, and the way your eyes light up the
              world. From the simplest moments to the grandest occasions, your
              beauty shines through, making every memory we share even more
              special. Here’s to celebrating all that makes you uniquely
              wonderful, inside and out. You are my inspiration, my joy, and my
              forever love. 💖😍
            </p>
          </div>
        </div>

        <div className="gallery-img-header">
          <div className="gallery-img-content">
            <img src="/love11.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love2.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love13.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love14.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love15.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love6.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love17.jpg" alt="" />
          </div>
          <div className="gallery-img-content">
            <img src="/love16.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
