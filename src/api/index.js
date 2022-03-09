const express = require("express");
const router = express.Router();
const answers = require("../../answers.json");

router.get("/", async (req, res) => {
  return res.json({
    success: true,
    submission: false,
    message: "You have reached the API 🎉",
  });
});

function Normalize(answer) {
  return answer.replace(/\s/g, "").toLowerCase();
}

function Match(submission, answers) {
  for (let i = 0; i < answers.length; i++) {
    if (Normalize(answers[i]) === Normalize(submission)) {
      return true;
    }
  }
  return false;
}

router.post("/submit", async (req, res, next) => {
  console.log(req.body);
  if (!request.body.question || !request.body.answer) {
    return res.statue(400).json({
      error: "Invalid answer",
    });
  }
  const question = answers.find((element) => {
    return element.question === req.body.question;
  });
  if (!question) {
    next(new Error("Invalid question number"));
  }

  return res.status(200).json({
    success: true,
    submission: Match(req.body.answer, question.answers),
  });
});

module.exports = router;
