export type CradConfig = {
  [name: string] : {
    image: string;
    cover: {src: string}[];
    card: {src: string}[];
  }
}

const cardConfig: CradConfig = {
  thema1: {
    image: "https://picsum.photos/id/1053/900/600",
    cover: [
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
      { src: "https://dummyimage.com/200x250/000000/FFD32D&text=cover" },
    ],
    card: [
      { src: "https://picsum.photos/id/166/200/250" },
      { src: "https://picsum.photos/id/659/200/250" },
      { src: "https://picsum.photos/id/844/200/250" },
      { src: "https://picsum.photos/id/1002/200/250" },
      { src: "https://picsum.photos/id/12/200/250" },
      { src: "https://picsum.photos/id/50/200/250" },
    ]
  },
  thema2: {
    image: "https://picsum.photos/id/1077/900/600",
    cover: [
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
      { src: "https://dummyimage.com/200x250/FF9F45/000000&text=cover" },
    ],
    card: [
      { src: "https://picsum.photos/id/200/200/250" },
      { src: "https://picsum.photos/id/123/200/250" },
      { src: "https://picsum.photos/id/1000/200/250" },
      { src: "https://picsum.photos/id/900/200/250" },
      { src: "https://picsum.photos/id/30/200/250" },
      { src: "https://picsum.photos/id/800/200/250" },
    ]
  },
  thema3: {
    image: "https://picsum.photos/id/193/900/600",
    cover: [
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
      { src: "https://dummyimage.com/200x250/464E2E/ffffff&text=cover" },
    ],
    card: [
      { src: "https://picsum.photos/id/650/200/250" },
      { src: "https://picsum.photos/id/1005/200/250" },
      { src: "https://picsum.photos/id/5/200/250" },
      { src: "https://picsum.photos/id/160/200/250" },
      { src: "https://picsum.photos/id/98/200/250" },
      { src: "https://picsum.photos/id/565/200/250" },
    ]
  }
}

export default cardConfig