//import StocksList from "@/data/StocksList";

const StocksList = [
  {
    id: 1,
    value: "Fac",
    image: ".//",
  },
];

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(StocksList);
    default:
      res.status(400).json({ error: "method not allowed" });
  }
}
