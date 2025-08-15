// توليد أسئلة حسب المستوى المطلوب
export const generateQuestions = (level) => {
  const questions = [];

  for (let i = 0; i < 20; i++) {
    let question = {};
    switch (level) {
      case 'easy':
        question = generateEasyQuestion();
        break;
      case 'medium':
        question = generateMediumQuestion();
        break;
      case 'hard':
        question = generateHardQuestion();
        break;
      default:
        break;
    }
    questions.push(question);
  }

  return questions;
};

// ✅ توليد سؤال سهل: جمع أو طرح لأعداد من خانة واحدة
const generateEasyQuestion = () => {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const op = Math.random() > 0.5 ? '+' : '-';
  const answer = op === '+' ? a + b : a - b;

  return {
    question: `${a} ${op} ${b}`,
    answer,
    type: Math.random() > 0.5 ? 'multiple' : 'input'
  };
};

// ✅ توليد سؤال متوسط: جمع، طرح، ضرب، أو قسمة بدون باقي
const generateMediumQuestion = () => {
  const type = Math.floor(Math.random() * 4);
  let a, b, answer, question;

  switch (type) {
    case 0: // جمع
      a = Math.floor(Math.random() * 100);
      b = Math.floor(Math.random() * 100);
      answer = a + b;
      question = `${a} + ${b}`;
      break;
    case 1: // طرح
      a = Math.floor(Math.random() * 100);
      b = Math.floor(Math.random() * a); // لضمان عدم السالب
      answer = a - b;
      question = `${a} - ${b}`;
      break;
    case 2: // ضرب
      a = Math.floor(Math.random() * 9) + 1;
      b = Math.floor(Math.random() * 9) + 1;
      answer = a * b;
      question = `${a} × ${b}`;
      break;
    case 3: // قسمة بدون باقي
      b = Math.floor(Math.random() * 9) + 1;
      answer = Math.floor(Math.random() * 10) + 1;
      a = b * answer;
      question = `${a} ÷ ${b}`;
      break;
  }

  return {
    question,
    answer,
    type: Math.random() > 0.5 ? 'multiple' : 'input'
  };
};

// ✅ توليد سؤال محترف: عمليات متنوعة تشمل أعداد أكبر
const generateHardQuestion = () => {
  const a = Math.floor(Math.random() * 100) + 1;
  const b = Math.floor(Math.random() * 50) + 1;
  const op = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
  let answer;

  switch (op) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '×':
      answer = a * b;
      break;
    case '÷':
      answer = Math.floor(a / b);
      break;
  }

  return {
    question: `${a} ${op} ${b}`,
    answer,
    type: Math.random() > 0.5 ? 'multiple' : 'input'
  };
};
