import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        
          src="https://www.learningcomputer.com/blog/wp-content/uploads/2020/04/HTML5.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGZ8vp0HsvotYad-g6kuQo-IuAzWfCcSflQ&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVy5HDRPF8dmRvRXpVnz80_3BGGEeR5dARg&s"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;