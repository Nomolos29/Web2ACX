// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "Which HTML tag is used to define an unordered list" + escapeHTML("<ul>?"),
        answer: "<ul>",
        options: [
          "list",
          escapeHTML("<ol>"),
          escapeHTML("<ul>"),
          escapeHTML("<dl>")
        ]
      },
    {
    numb: 2,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 3,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 4,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 5,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 6,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
    {
        numb: 7,
        question: escapeHTML("What does the <a> tag define in HTML"),
        answer: "Anchor",
        options: ["Article", "Anchor", "Abbreviation", "Audio"]
    },
    {
    numb: 8,
    question: "You are building a website for a local bakery. Which HTML element would you use to display the bakery's logo in the header section?",
    answer: "<img>",
    options: [escapeHTML("<img>"), escapeHTML("<div>"), escapeHTML("<header>"), escapeHTML("<logo>")]
    },
    {
    numb: 9,
    question: "You want to display a message in the console when a button is clicked. Which JavaScript event should you use?",
    answer: "onclick",
    options: [escapeHTML("onclick"), escapeHTML("onsubmit"), escapeHTML("onmouseover"), escapeHTML("onload")]
    },
    {
    numb: 10,
    question: "You want to create a bulleted list of flavors available for a new ice cream shop website. Which HTML element should you use?",
    answer: "<ul>",
    options: [escapeHTML("<list>"), escapeHTML("<ol>"), escapeHTML("<ul>"), escapeHTML("<li>")]
    },
    {
    numb: 11,
    question: "You need to create a form for users to submit their contact information. Which HTML element would you use to collect the user's email address?",
    answer: "<input type='email'>",
    options: [escapeHTML("<input type='text'>"), escapeHTML("<input type='email'>"), escapeHTML("<input type='password'>"), escapeHTML("<input type='checkbox'>")]
    },
    
];

function escapeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }