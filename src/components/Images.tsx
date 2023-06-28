import waitingRoom from "../assets/waiting-room.jpeg";
import "../styling/Images.css"

const Images = () => {
  return (
    <section className="images-container">
      <img className="image" src={waitingRoom} alt="dentist waiting room"/>
      
    </section>
  );
};

export default Images;
