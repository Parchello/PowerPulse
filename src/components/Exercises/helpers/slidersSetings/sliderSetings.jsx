export const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  rows: 2,
  arrows: false,

  appendDots: (dots) => (
    <div
      style={{
        borderRadius: '15px',
        padding: '15px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: 'rgba(239, 237, 232, 0.2)',
        border: '1px black solid',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#e6533c';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'rgba(239, 237, 232, 0.2)';
      }}
    ></div>
  ),

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
        rows: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        rows: 50,

        dots: false,
      },
    },
  ],
};
