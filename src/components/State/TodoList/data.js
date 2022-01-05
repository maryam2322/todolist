const data = [
  {
    id: 1,
    name: "Buy List",
    description: "These items need for home",
    items: [
      {
        id: 1,
        title: "Milk",
        status: false,
      },
      {
        id: 2,
        title: "Cheese",
        status: false,
      },
    ],
  },
  {
    id: 2,
    name: "Buy List",
    description: "These items need for work",
    items: [
      {
        id: 1,
        title: "Pen",
        status: false,
      },
      {
        id: 2,
        title: "Notebook",
        status: false,
      },
    ],
  },
];

export const makeRandomID = () => {
  return parseInt(Math.random() * 10000);
};

export default data;
