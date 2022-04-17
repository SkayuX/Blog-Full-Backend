import { Router } from "express";

const router = Router();

router.get("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

router.post("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

router.put("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

router.delete("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

router.patch("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

router.head("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

router.options("*", (req, res) => {
  res
    .status(404)
    .send({ status: false, data: { message: "Page not found!", code: 404 } });
});

export default router;
