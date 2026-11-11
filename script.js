
"use strict";

/* =========================================
   ENGLISH ZERO — GRADE 1
   Learning, quizzes, animal pictures,
   scores, stars, history and speech.
========================================= */

const $ = id => document.getElementById(id);

const TOPICS = [
  {
    id: "alphabet", title: "Alphabet", description: "Learn your ABCs",
    icon: "🔤", color: "#e6edff"
  },
  {
    id: "greetings", title: "Greetings", description: "Say hello!",
    icon: "👋", color: "#fff0e1"
  },
  {
    id: "colours", title: "Colours", description: "Beautiful colours",
    icon: "🎨", color: "#ffe8f1"
  },
  {
    id: "fruits", title: "Fruits", description: "Yummy fruits",
    icon: "🍎", color: "#e5ffed"
  },
  {
    id: "domestic", title: "Domestic Animals", description: "Meet farm friends",
    icon: "🐶", color: "#fff1d9"
  },
  {
    id: "wild", title: "Wild Animals", description: "Discover wild animals",
    icon: "🦁", color: "#e8e5ff"
  },
  {
    id: "seasons", title: "Seasons", description: "Four seasons",
    icon: "🌈", color: "#e1f6ff"
  },
  {
    id: "numbers", title: "Numbers", description: "Count with us",
    icon: "🔢", color: "#fff0f4"
  },
  {
    id: "school", title: "School Things", description: "Things in school",
    icon: "🎒", color: "#e9eaff"
  }
];

/* Animal illustrations are embedded SVG data images.
   No external image hosting is required. */

const ANIMALS = {
  lion: ["🦁", "#ffe2a6"],
  tiger: ["🐅", "#ffdfc5"],
  elephant: ["🐘", "#dceaff"],
  giraffe: ["🦒", "#fff0b8"],
  zebra: ["🦓", "#e6eaff"],
  monkey: ["🐒", "#f5dfc5"],
  bear: ["🐻", "#ead8ca"],
  fox: ["🦊", "#ffe1c4"],
  crocodile: ["🐊", "#d8f3d9"],
  deer: ["🦌", "#f6e4ce"],
  cat: ["🐱", "#ffe4ee"],
  cow: ["🐄", "#f0f0f0"],
  dog: ["🐶", "#ffe7c8"],
  sheep: ["🐑", "#f2f1ff"],
  horse: ["🐴", "#f2dfce"],
  rabbit: ["🐰", "#fce8f2"],
  hen: ["🐔", "#fff0c9"],
  duck: ["🦆", "#dff4ff"],
  goat: ["🐐", "#f4eadb"],
  pig: ["🐷", "#ffe2ed"]
};

function animalImage(name) {
  const item = ANIMALS[name];
  if (!item) return "";

  const [emoji, background] = item;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="640" height="400" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${background}"/>
          <stop offset="100%" stop-color="#e8e5ff"/>
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="35" fill="url(#bg)"/>
      <circle cx="320" cy="175" r="135" fill="#fff" opacity=".58"/>
      <text x="320" y="245" text-anchor="middle"
        font-size="185" font-family="Arial,sans-serif">${emoji}</text>
      <text x="320" y="350" text-anchor="middle"
        font-size="25" font-weight="bold"
        font-family="Arial,sans-serif" fill="#43518a">
        ENGLISH ZERO
      </text>
    </svg>`;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}

function question(text, options, correct, image = null, hint = "") {
  return { text, options, correct, image, hint };
}

/* Question bank:
   correct is the index of the correct answer before shuffling. */

const QUESTION_BANK = {
  alphabet: {
    easy: [
      question("Which letter comes first?", ["A", "B", "C", "D"], 0, "🔤"),
      question("Which letter is this: B?", ["A", "B", "C", "D"], 1, "🅱️"),
      question("Which letter comes after A?", ["C", "B", "D", "E"], 1, "🔠")
    ],
    medium: [
      question("Which letter comes after C?", ["A", "B", "D", "E"], 2, "🔤"),
      question("Which letter starts the word DOG?", ["D", "B", "C", "A"], 0, "🐶"),
      question("Which is a vowel?", ["B", "M", "A", "T"], 2, "🔠")
    ],
    hard: [
      question("Which letter comes before F?", ["D", "E", "G", "H"], 1, "🔤"),
      question("Which word starts with S?", ["Apple", "Sun", "Dog", "Cat"], 1, "☀️"),
      question("Which letter comes after Y?", ["W", "X", "Z", "A"], 2, "🔠")
    ]
  },

  greetings: {
    easy: [
      question("What do you say in the morning?", ["Good morning", "Good night", "Goodbye", "Sorry"], 0, "🌞"),
      question("How are you?", ["I am fine", "Good night", "Goodbye", "Thank you"], 0, "😊"),
      question("What do you say when you meet a friend?", ["Hello", "Sorry", "Bye", "No"], 0, "👋")
    ],
    medium: [
      question("What do you say before sleeping?", ["Good morning", "Good night", "Hello", "Welcome"], 1, "🌙"),
      question("What do you say when someone helps you?", ["Sorry", "No", "Thank you", "Bye"], 2, "💜"),
      question("What do you say when you leave?", ["Goodbye", "Hello", "Welcome", "Please"], 0, "👋")
    ],
    hard: [
      question("Someone says 'Thank you'. What do you say?", ["You're welcome", "Good night", "Goodbye", "Hello"], 0, "💬"),
      question("How do you introduce yourself?", ["My name is Ali", "Good night", "I am fine", "Thank you"], 0, "🙋"),
      question("What do you say when you make a mistake?", ["Sorry", "Hello", "Welcome", "Yes"], 0, "🙂")
    ]
  },

  colours: {
    easy: [
      question("What colour is the sky?", ["Blue", "Red", "Green", "Black"], 0, "🌤️"),
      question("What colour is grass?", ["Pink", "Green", "Purple", "Blue"], 1, "🌱"),
      question("What colour is a banana?", ["Yellow", "Blue", "Black", "Red"], 0, "🍌")
    ],
    medium: [
      question("What colour is a strawberry?", ["Blue", "Red", "White", "Black"], 1, "🍓"),
      question("What colour is snow?", ["Green", "White", "Orange", "Purple"], 1, "❄️"),
      question("What colour is a dolphin?", ["Blue", "Red", "Yellow", "Pink"], 0, "🐬")
    ],
    hard: [
      question("Which two colours make orange?", ["Red and yellow", "Blue and green", "Black and white", "Pink and blue"], 0, "🎨"),
      question("What colour is a lemon?", ["Purple", "Yellow", "Blue", "Brown"], 1, "🍋"),
      question("Which colour is darker?", ["Black", "White", "Yellow", "Pink"], 0, "🎨")
    ]
  },

  fruits: {
    easy: [
      question("Which fruit is red?", ["Apple", "Banana", "Lemon", "Kiwi"], 0, "🍎"),
      question("Which fruit is yellow?", ["Grape", "Banana", "Cherry", "Blueberry"], 1, "🍌"),
      question("Which fruit is orange?", ["Orange", "Apple", "Pear", "Plum"], 0, "🍊")
    ],
    medium: [
      question("Which fruit is small and purple?", ["Grape", "Banana", "Lemon", "Apple"], 0, "🍇"),
      question("Which fruit has a green outside and red inside?", ["Watermelon", "Orange", "Pear", "Peach"], 0, "🍉"),
      question("Which fruit is sour and yellow?", ["Lemon", "Cherry", "Apple", "Grape"], 0, "🍋")
    ],
    hard: [
      question("Which fruit grows in a bunch?", ["Grapes", "Lemon", "Peach", "Pear"], 0, "🍇"),
      question("Which fruit has a hard brown shell?", ["Coconut", "Strawberry", "Apple", "Cherry"], 0, "🥥"),
      question("Which fruit is usually green or red?", ["Apple", "Banana", "Lemon", "Orange"], 0, "🍏")
    ]
  },

  domestic: {
    easy: [
      question("Which animal says meow?", ["Cat", "Cow", "Horse", "Sheep"], 0, "cat"),
      question("Which animal gives us milk?", ["Dog", "Cow", "Duck", "Cat"], 1, "cow"),
      question("Which animal says woof?", ["Sheep", "Horse", "Dog", "Hen"], 2, "dog"),
      question("Which animal gives us wool?", ["Sheep", "Cat", "Duck", "Pig"], 0, "sheep")
    ],
    medium: [
      question("Which animal can carry a rider?", ["Cat", "Horse", "Hen", "Duck"], 1, "horse"),
      question("Which animal lays eggs?", ["Dog", "Cow", "Hen", "Sheep"], 2, "hen"),
      question("Which animal swims and says quack?", ["Duck", "Horse", "Cat", "Goat"], 0, "duck"),
      question("Which animal has a curly tail and says oink?", ["Cow", "Pig", "Dog", "Sheep"], 1, "pig")
    ],
    hard: [
      question("Which animal has long ears and likes carrots?", ["Rabbit", "Cow", "Horse", "Hen"], 0, "rabbit"),
      question("Which animal can give us milk and has horns?", ["Goat", "Cat", "Duck", "Dog"], 0, "goat"),
      question("Which animal guards a house?", ["Dog", "Sheep", "Pig", "Duck"], 0, "dog")
    ]
  },

  wild: {
    easy: [
      question("Which animal is the king of the jungle?", ["Lion", "Rabbit", "Cow", "Cat"], 0, "lion"),
      question("Which animal has a long trunk?", ["Tiger", "Elephant", "Fox", "Deer"], 1, "elephant"),
      question("Which animal has black and white stripes?", ["Bear", "Zebra", "Lion", "Monkey"], 1, "zebra"),
      question("Which animal has a very long neck?", ["Giraffe", "Tiger", "Fox", "Crocodile"], 0, "giraffe")
    ],
    medium: [
      question("Which animal has black and orange stripes?", ["Tiger", "Zebra", "Deer", "Bear"], 0, "tiger"),
      question("Which animal likes climbing trees?", ["Crocodile", "Monkey", "Elephant", "Lion"], 1, "monkey"),
      question("Which animal is big and furry?", ["Zebra", "Bear", "Giraffe", "Deer"], 1, "bear"),
      question("Which animal looks like a small red dog?", ["Fox", "Tiger", "Lion", "Elephant"], 0, "fox")
    ],
    hard: [
      question("Which animal has a long body and sharp teeth?", ["Monkey", "Bear", "Crocodile", "Giraffe"], 2, "crocodile"),
      question("Which animal has antlers?", ["Fox", "Deer", "Elephant", "Zebra"], 1, "deer"),
      question("Which animal is known for its mane?", ["Lion", "Zebra", "Monkey", "Crocodile"], 0, "lion")
    ]
  },

  seasons: {
    easy: [
      question("Which season is very cold?", ["Winter", "Summer", "Spring", "Autumn"], 0, "❄️"),
      question("Which season is hot?", ["Winter", "Summer", "Autumn", "Spring"], 1, "☀️"),
      question("Which season has flowers?", ["Spring", "Winter", "Autumn", "Summer"], 0, "🌸")
    ],
    medium: [
      question("Which season has falling leaves?", ["Spring", "Summer", "Autumn", "Winter"], 2, "🍂"),
      question("Which season comes after winter?", ["Summer", "Autumn", "Spring", "Winter"], 2, "🌷"),
      question("Which season comes before winter?", ["Autumn", "Spring", "Summer", "Winter"], 0, "🍁")
    ],
    hard: [
      question("How many seasons are there?", ["Two", "Three", "Four", "Five"], 2, "🌈"),
      question("Which season is usually the warmest?", ["Winter", "Summer", "Autumn", "Spring"], 1, "🌞"),
      question("Which season comes after summer?", ["Winter", "Spring", "Autumn", "Summer"], 2, "🍂")
    ]
  },

  numbers: {
    easy: [
      question("What number comes after 1?", ["2", "3", "4", "5"], 0, "2️⃣"),
      question("How many fingers are on one hand?", ["3", "4", "5", "6"], 2, "✋"),
      question("What number is this: 3?", ["One", "Two", "Three", "Four"], 2, "3️⃣")
    ],
    medium: [
      question("What is 2 + 2?", ["3", "4", "5", "6"], 1, "➕"),
      question("What number comes before 10?", ["8", "9", "11", "7"], 1, "🔟"),
      question("What is 5 - 2?", ["2", "3", "4", "5"], 1, "➖")
    ],
    hard: [
      question("What is 3 + 4?", ["5", "6", "7", "8"], 2, "➕"),
      question("What is 10 - 3?", ["6", "7", "8", "9"], 1, "➖"),
      question("Which number is bigger?", ["8", "5", "3", "2"], 0, "🔢")
    ]
  },

  school: {
    easy: [
      question("What do we write with?", ["Pencil", "Ball", "Apple", "Cup"], 0, "✏️"),
      question("What do we read?", ["Book", "Shoe", "Hat", "Ball"], 0, "📚"),
      question("What do we carry to school?", ["Bag", "Fish", "Plate", "Bed"], 0, "🎒")
    ],
    medium: [
      question("What do we use to erase?", ["Eraser", "Ruler", "Book", "Pen"], 0, "🧽"),
      question("What do we use to draw a straight line?", ["Ruler", "Apple", "Cup", "Bag"], 0, "📏"),
      question("Where does a teacher write?", ["Board", "Window", "Door", "Floor"], 0, "🏫")
    ],
    hard: [
      question("Which one is a school subject?", ["Mathematics", "Banana", "Tiger", "Pillow"], 0, "📐"),
      question("What do students sit on?", ["Chair", "Board", "Pencil", "Book"], 0, "🪑"),
      question("What do we use to colour a picture?", ["Crayons", "Fork", "Spoon", "Shoes"], 0, "🖍️")
    ]
  }
};

/* App state */

let student = localStorage.getItem("ez_student") || "";
let selectedTopic = "wild";
let selectedLevel = "easy";
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let answersReview = [];
let soundEnabled = true;
let lastResult = null;

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("ez_history") || "[]");
  } catch {
    return [];
  }
}

function saveHistory(item) {
  const history = getHistory();
  history.unshift(item);
  localStorage.setItem("ez_history", JSON.stringify(history.slice(0, 30)));
}

function getStats() {
  return {
    stars: Number(localStorage.getItem("ez_stars") || 0),
    tests: Number(localStorage.getItem("ez_tests") || 0),
    best: Number(localStorage.getItem("ez_best") || 0)
  };
}

function setScreen(screenId) {
  [
    "welcomeScreen", "homeScreen", "lessonScreen",
    "quizScreen", "resultScreen"
  ].forEach(id => $(id).classList.add("hidden"));

  $(screenId).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  setScreen("homeScreen");
  updateDashboard();
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2400);
}

function speak(text) {
  if (!soundEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

/* Welcome */

function startApp() {
  const input = $("studentName");
  const name = input.value.trim();

  if (!name) {
    showToast("Please enter your name first! 😊");
    input.focus();
    return;
  }

  student = name;
  localStorage.setItem("ez_student", student);
  $("displayName").textContent = student;
  setScreen("homeScreen");
  renderTopics();
  updateDashboard();
}

$("startButton").addEventListener("click", startApp);
$("studentName").addEventListener("keydown", event => {
  if (event.key === "Enter") startApp();
});

$("soundToggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  $("soundToggle").textContent = soundEnabled ? "🔊" : "🔇";
  if (!soundEnabled && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
});

/* Topics */

function renderTopics() {
  $("topicGrid").innerHTML = TOPICS.map(topic => `
    <button class="topic-card" data-topic="${topic.id}">
      <span class="topic-icon" style="background:${topic.color}">
        ${topic.icon}
      </span>
      <span class="topic-copy">
        <strong>${escapeHTML(topic.title)}</strong>
        <small>${escapeHTML(topic.description)}</small>
      </span>
      <span class="topic-arrow">›</span>
    </button>
  `).join("");

  $("topicGrid").querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => openLesson(button.dataset.topic));
  });
}

function openLesson(topicId) {
  const topic = TOPICS.find(item => item.id === topicId);
  if (!topic || !QUESTION_BANK[topicId]) return;

  selectedTopic = topicId;
  selectedLevel = "easy";

  $("lessonTitle").textContent = topic.title;
  $("lessonDescription").textContent = topic.description;
  $("lessonEmoji").textContent = topic.icon;

  document.querySelectorAll(".difficulty-button").forEach(button => {
    button.classList.toggle("selected", button.dataset.level === "easy");
  });

  setScreen("lessonScreen");
}

document.querySelectorAll(".difficulty-button").forEach(button => {
  button.addEventListener("click", () => {
    selectedLevel = button.dataset.level;

    document.querySelectorAll(".difficulty-button").forEach(item => {
      item.classList.toggle("selected", item === button);
    });
  });
});

/* Quiz */

function beginQuiz() {
  const source = QUESTION_BANK[selectedTopic]?.[selectedLevel];

  if (!source || !source.length) {
    showToast("Questions are not available yet.");
    return;
  }

  currentQuestions = shuffle(source).map(original => {
    const correctAnswer = original.options[original.correct];

    const shuffledOptions = shuffle(
      original.options.map((text, index) => ({ text, originalIndex: index }))
    );

    return {
      ...original,
      shuffledOptions,
      correctIndex: shuffledOptions.findIndex(
        option => option.text === correctAnswer
      )
    };
  });

  questionIndex = 0;
  score = 0;
  answersReview = [];

  $("liveScore").textContent = "0";
  $("quizLevel").textContent = {
    easy: "🌱 EASY",
    medium: "🚀 MEDIUM",
    hard: "🏆 HARD"
  }[selectedLevel];

  setScreen("quizScreen");
  renderQuestion();
}

$("beginQuiz").addEventListener("click", beginQuiz);

function renderQuestion() {
  const q = currentQuestions[questionIndex];
  if (!q) return;

  const total = currentQuestions.length;
  const percent = Math.round(questionIndex / total * 100);

  $("questionCounter").textContent =
    `Question ${questionIndex + 1} / ${total}`;
  $("questionPercent").textContent = `${percent}%`;
  $("quizProgress").style.width = `${percent}%`;

  $("questionText").textContent = q.text;
  $("questionHint").textContent =
    q.hint || "Look at the picture and choose the correct answer.";

  const picture = $("questionPicture");

  if (q.image && ANIMALS[q.image]) {
    picture.innerHTML = `<img src="${animalImage(q.image)}" alt="${escapeHTML(q.image)} picture">`;
  } else {
    picture.innerHTML = `<span style="font-size:100px">${escapeHTML(q.image || "🌟")}</span>`;
  }

  $("answerFeedback").textContent = "";
  $("answerFeedback").className = "answer-feedback";
  $("nextQuestion").classList.add("hidden");

  $("answerGrid").innerHTML = q.shuffledOptions.map((option, index) => `
    <button class="answer-button" data-answer="${index}">
      ${escapeHTML(option.text)}
    </button>
  `).join("");

  $("answerGrid").querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      selectAnswer(Number(button.dataset.answer));
    });
  });

  speak(q.text);
}

function selectAnswer(selectedIndex) {
  const q = currentQuestions[questionIndex];
  const buttons = [...$("answerGrid").querySelectorAll(".answer-button")];

  if (buttons.some(button => button.disabled)) return;

  const isCorrect = selectedIndex === q.correctIndex;
  const correctText = q.shuffledOptions[q.correctIndex].text;
  const selectedText = q.shuffledOptions[selectedIndex].text;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.correctIndex) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score++;
    $("liveScore").textContent = score;
    $("answerFeedback").textContent = "🎉 Excellent! Correct answer!";
    $("answerFeedback").classList.add("good");
    speak("Excellent! Correct answer!");
  } else {
    $("answerFeedback").textContent = `💡 Correct answer: ${correctText}`;
    $("answerFeedback").classList.add("bad");
    speak(`The correct answer is ${correctText}`);
  }

  answersReview.push({
    question: q.text,
    selected: selectedText,
    correct: correctText,
    isCorrect
  });

  $("nextQuestion").classList.remove("hidden");
  $("nextQuestion").textContent =
    questionIndex === currentQuestions.length - 1
      ? "SEE MY RESULT 🏆"
      : "NEXT QUESTION →";
}

$("nextQuestion").addEventListener("click", () => {
  questionIndex++;

  if (questionIndex >= currentQuestions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
});

function confirmExit() {
  if (confirm("Do you want to leave this quiz? Your current progress will not be saved.")) {
    showHome();
  }
}

/* Results */

function finishQuiz() {
  const total = currentQuestions.length;
  const wrong = total - score;
  const percent = Math.round(score / total * 100);
  const stars = score === total ? 3 : score >= Math.ceil(total * .7) ? 2 : score > 0 ? 1 : 0;

  lastResult = {
    topic: TOPICS.find(t => t.id === selectedTopic).title,
    level: selectedLevel,
    score,
    total,
    percent,
    stars,
    answers: [...answersReview]
  };

  const oldStats = getStats();
  localStorage.setItem("ez_stars", oldStats.stars + stars);
  localStorage.setItem("ez_tests", oldStats.tests + 1);
  localStorage.setItem("ez_best", Math.max(oldStats.best, percent));

  saveHistory({
    topic: lastResult.topic,
    level: selectedLevel,
    score,
    total,
    percent,
    date: new Date().toLocaleDateString()
  });

  $("finalPercent").textContent = `${percent}%`;
  $("correctCount").textContent = score;
  $("wrongCount").textContent = wrong;
  $("earnedStars").textContent = stars;
  $("resultTrophy").textContent = percent >= 80 ? "🏆" : percent >= 50 ? "🥇" : "🌱";

  $("resultTitle").textContent =
    percent === 100 ? "Perfect! Amazing!" :
    percent >= 70 ? "Great job!" :
    percent >= 40 ? "Good effort!" : "Keep practising!";

  $("resultMessage").textContent =
    `${student || "Friend"}, you finished ${lastResult.topic}!`;

  $("reviewArea").classList.add("hidden");
  $("reviewArea").innerHTML = "";
  setScreen("resultScreen");
}

$("retryButton").addEventListener("click", () => {
  setScreen("lessonScreen");
  beginQuiz();
});

$("reviewButton").addEventListener("click", () => {
  const area = $("reviewArea");

  if (!lastResult) return;

  area.innerHTML = `
    <h2>📝 Review your answers</h2>
    ${lastResult.answers.map((item, index) => `
      <div class="review-item">
        <b>${index + 1}. ${escapeHTML(item.question)}</b>
        <p class="${item.isCorrect ? "review-correct" : "review-wrong"}">
          Your answer: ${escapeHTML(item.selected)}
        </p>
        <p>Correct answer: <b>${escapeHTML(item.correct)}</b></p>
      </div>
    `).join("")}
  `;

  area.classList.toggle("hidden");
});

/* Dashboard */

function updateDashboard() {
  const stats = getStats();
  const history = getHistory();

  $("displayName").textContent = student || "Friend";
  $("totalStars").textContent = stats.stars;
  $("completedTests").textContent = stats.tests;
  $("bestScore").textContent = `${stats.best}%`;

  const progress = Math.min(100, stats.tests * 10);
  $("journeyProgress").style.width = `${progress}%`;
  $("journeyText").textContent =
    stats.tests === 0
      ? "Complete a lesson to start your journey."
      : `${stats.tests} tests completed. Keep shining! ⭐`;

  $("historyList").innerHTML = history.length
    ? history.slice(0, 5).map(item => `
      <div class="history-item">
        <div>
          <b>${escapeHTML(item.topic)}</b>
          <small>${escapeHTML(item.level.toUpperCase())} • ${escapeHTML(item.date)}</small>
        </div>
        <span class="history-score">${item.score}/${item.total} (${item.percent}%)</span>
      </div>
    `).join("")
    : `<p class="empty-state">Your completed tests will appear here. 🌟</p>`;
}

/* App startup */

function init() {
  renderTopics();

  if (student) {
    setScreen("homeScreen");
    updateDashboard();
  } else {
    setScreen("welcomeScreen");
  }
}

init();
