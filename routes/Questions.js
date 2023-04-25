import express from "express";

import {AskQuestion,deleteQuestion,voteQuestion} from "../controllers/Questions.js";

import {getAllQuestions} from "../controllers/Questions.js"

const router = express.Router();

router.post("/Ask",AskQuestion)

router.get("/get",getAllQuestions)

router.delete("/delete/:id",deleteQuestion)

router.patch("/vote/:id", voteQuestion);

export default router