var readlineSync=require('readline-sync');
var chalk=require('chalk');
var score=0;


console.log(chalk.bold.black.underline.bgCyanBright("DO YOU KNOW ANKIT KARN QUIZ"))
console.log(" ")
var userName=readlineSync.question(chalk.blueBright('what is your name? '));
console.log(chalk.blueBright('welcome '+userName+', to the DO YOU KNOW ANKIT quiz....'));
console.log(" ");
console.log(chalk.cyan("RULES OF THE QUIZ ARE : "));
console.log(chalk.cyan("please type 'a' or 'b' or 'c' for your answer"));
console.log(chalk.cyan("For every correct answer, your score will be increased by 2"));
console.log(chalk.cyan("For every incorrect answer, your score will be decreased by 1"));
console.log(" ");

function quiz(question,answer,correct,j){
  var userAnswer=readlineSync.question(chalk.bold.red('Q'+j+': '+question));
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Yeah! you're right."));
    score=score+2;
  }else if(userAnswer.toLowerCase()==='d'){
    console.log(chalk.yellowBright('skipped!...'))
    console.log(chalk.yellowBright(' ▶ '+correct))
  }else{
    console.log(chalk.redBright("Ah! you're wrong."));
    console.log(chalk.yellowBright(' ▶ '+correct))
    score=score-1;
  }
  console.log('current score: '+score);
  console.log('-----------------------------------')
}

var qOne={
  question:`What is my age?
  a: 22
  b: 18
  c: 25
  d: skip\n`,
  answer: 'a',
  correct:' correct answer: 22'
}
var qTwo={
  question:`Which city am i from? 
  a: Delhi
  b: Banglore
  c: Gurgaon
  d: skip\n`,
  correct:'correct answer: Gurgaon',
  answer: 'c'
}
var qThree={
  question:`What is my favourite food? 
  a: momos
  b: samosa
  c: burger
  d: skip\n`,
  correct:'correct answer: momos',
  answer: 'a'
}
var qFour={
  question:`Which i like more? 
  a: sour
  b: spicy
  c: sweet
  d: skip\n`,
  correct:'spicy',
  answer: 'b'
}
var qFive={
  question:`What is my favourite color? 
  a: black
  b: blue
  c: brown
  d: skip\n`,
  correct:'blue',
  answer: 'b'
}
var qSix={
  question:`Which i prefer to drink?
  a: tea
  b: cofee
  c: coldrink
  d: skip\n`,
  correct:'colddrink',
  answer: 'c'
}
var qSeven={
  question:`Which is my favourite chocolate?
  a: Dairy Milk
  b: Kitkat
  c: Snikers
  d: skip\n`,
  correct:'Kitkat',
  answer: 'b'
}
var questions=[qOne,qTwo,qThree,qFour,qFive,qSix,qSeven];

function game() {
  for (var i=0; i<questions.length; i++) {
    quiz(questions[i].question, questions[i].answer,questions[i].correct,i+1)
  }
}


function scores() {
  if (userScore.scor >= highScores.scor){
    console.log(chalk.bgGreen("YOU HAVE BEATEN THE HIGH SCORE"))
    console.log(" ")
  } 

console.log(chalk.magentaBright("THANKS " + userName.toUpperCase() +" FOR PLAYING THE QUIZ "))
console.log(chalk.redBright("your final score is: ",+score));

}
game()
var highScores=
  {
    name: "Ankit",
    scor: 11,
  }
var userScore =
  {
    name: userName,
    scor: score
  } ;
scores()

