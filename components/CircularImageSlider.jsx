import { useEffect } from "react";

const CircularImageSlider = () => {
  useEffect(() => {
    console.log(1);
    const cosmos = document.querySelectorAll(".cosmos");
    const total = cosmos.length;
    for (let i = 0; i < total; i++) {
      const angle = (360 / total) * i;
      const transform = `rotate(${angle}deg) translate(55vh)`;
      cosmos[i].style.transform = transform;
      const cosmosItem = cosmos[i].querySelectorAll(".cosmos-item");
      for (let j = 0; j < cosmosItem.length; j++) {
        cosmosItem[j].style.animationDelay = `${j * 0.5}s`;
      }
    }
  }, []);

  return (
    <div className="body-CircularImageSlider h-[100%]">
      <h1
        className="absolute top-[50%] left-[50%] translate-x-[-50%]
      translate-y-[-50%] text-left uppercase text-2xl m-0
      "
      >
        VIsual@ <br /> Graphic Design
      </h1>
      <div
        className="absolute top-0 h-[100vh] w-[100vw]
        flex items-center justify-center overflow-hidden"
      >
        {[0, 1, 2, 3, 4].map((y) => {
          return (
            <div
              key={y}
              className="cosmos absolute w-[200px] h-[200px]"
            >
              {[1, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11].map((x) => (
                <div
                  key={`${y * x}${x}`}
                  className="cosmos-item absolute top-0 left-0 w-[100%] 
                h-[100%] fall-and-disapper"
                >
                  <img
                    className="w-full h-full object-cover"
                    key={x}
                    alt={x}
                    src={"/gach_lat/" + x.toString() + ".jpg"}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularImageSlider;
