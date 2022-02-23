import { useEffect, useState } from "react";
import cardConfig from "./card-config";
import Card from "./components/Card";
import Countdown from "./components/Countdown";

export type Card = {src: string; id: number; matched: boolean; flipped: boolean}

const App = () => {  
  const thema = cardConfig['thema1'];
  const [ready, setReady] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  
  const [choice1, setChoice1] = useState<null|Card>(null);
  const [choice2, setChoice2] = useState<null|Card>(null);

  const [disabled, setDisabled] = useState(false);

  const setRandomCard = () => {
    const randomCards = [...thema.card, ...thema.card]
      .sort(() => Math.random() - 0.5)
      .map((card, i) => ({id: i, ...card, matched: false, flipped: true}));

    setCards(randomCards);
    setChoice1(null);
    setChoice2(null);
  }

  useEffect(() => {
    setRandomCard();

    let tick: number;
    tick = setTimeout(() => setCards(cards => cards.map(card => ({...card, flipped: false}))), 5000)

    return () => clearTimeout(tick);
  }, []);

  const choiceHandler = (card: Card) => {
    if (!ready || card.matched) return;

    choice1 ? setChoice2(card) : setChoice1(card);
    setCards(prevCards => prevCards.map(prevCard => {
      return (prevCard.id === card.id || choice1?.id === card.id || card.matched) ? { ...prevCard, flipped: true } : prevCard;
    }));
  }

  useEffect(() => {
    if (choice1 && choice2) {
      setDisabled(true);
      if (choice1.src === choice2.src) {
        setCards((prevCards) => prevCards.map((card) => card.src === choice1.src ? {...card, matched: true} : card));
        resetTruns();
      } else {
        setTimeout(() => resetTruns(), 800)
      }
    }
  }, [choice1, choice2]);

  const resetTruns = () =>{
    setCards(cards => cards.map(card => card.matched ? card : {...card, flipped: false}));
    setChoice1(null);
    setChoice2(null);
    setDisabled(false);
  }

  return <div id="app">
    {ready ? <div>게임 시작!</div> : <div><Countdown start={5} end={0} callback={() => setReady(true)} /> 초 뒤 게임이 시작됩니다.</div>}

    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: 20, marginTop: 60}}>
      {cards.map((card, i) => {
        const cover = thema.cover[i];
        
        return <Card key={`card-${card.id}`} 
          card={card} 
          cover={cover.src} 
          flipped={card.flipped}
          onChoice={choiceHandler}
          disabled={disabled}
        />
      })}
    </div>
  </div>
}

export default App;


{/* <p>테마 선택</p>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 20}}>
  {Object.values(themas).map((thema, i) => {
    return <div 
      key={`thema-${i}`} 
      style={{cursor: cards.length ? 'default' :'pointer', opacity: cards.length ? 0.35 : 1}} 
      onClick={(thema.cover && thema.card) && themaSelectHandler(thema.cover, thema.card)}
    >
      <img src={thema.image} alt="" />
    </div>
  })}
</div> */}