// @ts-expect-error "'react-slick' not found module, but this module exists."
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickSliderProps {
  list: { id: string; src: string }[];
  settings: Settings;
}

export const SlickSlider = ({ list, settings }: SlickSliderProps) => {
  return (
    <Slider {...settings}>
      {list.map((item) => (
        <div key={item.id}>
          <img
            src={item.src}
            className="w-full h-[360px] object-cover"
            alt={`image-${item.id}`}
          />
        </div>
      ))}
    </Slider>
  );
};