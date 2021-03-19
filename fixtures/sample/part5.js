module.exports = [
  {
    id: String(1),
    indexNumber: 100,
    question: {
      indexNumber: 0,
      questionText: "Can you finish your homework ___ next Thursday?",
      answerLists: [
        {
          id: String(1),
          bullet: "A",
          text: "then",
        },
        {
          id: String(2),
          bullet: "B",
          text: "by",
        },
        {
          id: String(3),
          bullet: "C",
          text: "until",
        },
        {
          id: String(4),
          bullet: "D",
          text: "till",
        },
      ],
      answerKey: "B",
    },
  },
  {
    id: String(1),
    indexNumber: 104,
    question: {
      indexNumber: 0,
      questionText: "He ___ that smoking indoors not be allowed under any circumstances.",
      answerLists: [
        {
          id: String(1),
          bullet: "A",
          text: "refuses",
        },
        {
          id: String(2),
          bullet: "B",
          text: "insists",
        },
        {
          id: String(3),
          bullet: "C",
          text: "conditions",
        },
        {
          id: String(4),
          bullet: "D",
          text: "regulates",
        },
      ],
      answerKey: "B",
    },
  },
];
