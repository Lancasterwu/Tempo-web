import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/webpage4.jpg"),
    altText: "1",
    caption: <h6>Projects<br></br>The Study on Recessions: Past, Present, and Future:<br></br>Comparing and analyzing thoughts on recessions between different economic schools. Try to develop old theories with new theories, to predict the near future recession and strategies to get out of it.</h6>
  },
  {
    src: require("assets/img/webpage4.jpg"),
    altText: "2",
    caption: <h6>Projects<br></br>Fault-Localization:<br></br>Research and study of localizing faults within the program. Implement existing algorithms, based other’s research and paper, to PyTest. Develop a production-quality tool that can be used by developers.</h6>
  },
  {
    src: require("assets/img/webpage4.jpg"),
    altText: "3",
    caption: <h6>Projects<br></br>Tada!: auTomAtic orDer-of-growth Analysis:<br></br>A tool for automatic order of growth analysis written in Python 3-Runs the doubling experiment to ascertain the likely worst-case order-of-growth function for an arbitrary Python function.</h6>
  },
  {
    src: require("assets/img/webpage4.jpg"),
    altText: "4",
    caption: <h6>Projects<br></br>PyTest-Blame:<br></br>A plugin for python testing framework, PyTest-Allows PyTest to quick check Github see if the most recent commit is passing test cases.</h6>
  },
  {
    src: require("assets/img/webpage4.jpg"),
    altText: "5",
    caption: <h6>Projects<br></br>GatorGrouper:<br></br>A grouping tool with both command-line-interface and web-interface.
-Reads input CSV file or user inputs on the website to generate requested numbers of groups.</h6>
  }
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
  );
}

export default CarouselSection;
