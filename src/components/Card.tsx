import { Card } from "@/App";
import { FC, MouseEvent } from "react";
import { useSpring, animated as a } from "react-spring";

const Card: FC<{
  cover: string;
  card: Card;
  flipped: boolean;
  onChoice: (card: Card) => void;
  disabled: boolean;
}> = ({cover, card, flipped, onChoice, disabled}) => {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(-${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  
  const clickHandler = (ev: MouseEvent) => {
    disabled || onChoice(card);
  }

  return <div className="card" onClick={clickHandler}>
    <a.img 
      src={cover}
      className="back"
      style={{ opacity: opacity.to((o) => 1 - o), transform }}
    />
    <a.img 
      src={card.src}
      className="front"
      style={{
        opacity,
        transform: transform.to((t) => `${t} rotateY(180deg)`)
      }}
    />
  </div>
}

export default Card;