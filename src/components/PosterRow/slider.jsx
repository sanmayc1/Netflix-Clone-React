export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1497,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
      },
    },
  ],
};
