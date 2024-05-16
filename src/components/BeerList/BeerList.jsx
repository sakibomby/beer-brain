import BeerListBeer from '../BeerListBeer/BeerListBeer';
import './BeerList.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BeerList({ beersList }) {
  const beers = beersList.map(beer =>
      <BeerListBeer
        key={beer._id}
        beer={beer}
        />
      );
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <>
      <main className="BeerList">
        <div>
        <Slider {...settings}>
        {beers}
        </Slider>
        </div>
      </main>
        </>
    );
  }