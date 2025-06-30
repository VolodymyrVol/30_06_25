import Carousel from 'react-bootstrap/Carousel';

export function UncontrolledExample() {
  return (
    <Carousel style= {{ width: '100rem', height:'50rem'}} slide={true} >
      <Carousel.Item style= {{ width: '100rem', height:'50rem'}}>
      <img
        className="d-block w-100"
          src="1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style= {{ width: '100rem', height:'50rem'}}>
      <img
           className="d-block w-100"
          src="2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style= {{ width: '100rem', height:'50rem'}}>
      <img
             className="d-block w-100"
          src="3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
