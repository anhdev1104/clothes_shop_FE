import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import getAllSlider from '../services/slider';

const Sliders = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    (async () => {
      setSlider(await getAllSlider());
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {slider.map((item, index) => (
          <div className="cursor-pointer" key={index}>
            <div>
              <img src={`./src/assets/images/${item.banner}`} alt="" className="max-w-full" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sliders;
