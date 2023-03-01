import { Router } from "express";

const router = Router();

router.post("/sumar", (req, res) => {
  const { n1, n2 } = req.body;

  res.status(200).json({
    result: n1 + n2,
  });
});

router.post("/restar", (req, res) => {
  const { n1, n2 } = req.body;

  res.status(200).json({
    result: n1 - n2,
  });
});

router.post("/multiplicar", (req, res) => {
  const { n1, n2 } = req.body;

  res.status(200).json({
    result: n1 * n2,
  });
});

router.post("/dividir", (req, res) => {
  const { n1, n2 } = req.body;

  res.status(200).json({
    result: n1 / n2,
  });
});

export default router;
