import {Carousel} from "react-bootstrap"

export const CardCarousel = ({cardContent}: {cardContent: any[]}) => {
   return (
      <Carousel data-bs-theme="dark" interval={3000}>
         {cardContent.map((card, index) => (
            <Carousel.Item key={index} style={{position: "relative"}}>
               <Carousel.Caption style={{position: "absolute", zIndex: 0}}>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                     <h5>{card.title}</h5>
                     <p>{card.content}</p>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
         ))}
      </Carousel>
   )
}
