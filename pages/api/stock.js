export default function handler(req, res) {
  try {
    const rv = Array.from({ 10: Number }, () => Math.random() * (40 - 10) + 10);
    res.status(200).json({
      Open: 1234,
      High: 123,
      Low: 12,
      Close: 987654,
      Volume: 876543,
      Stock: "rvf",
      Data: [1, 2, 3, 4, 5, 6, 7, 9, 13, 45],
      Labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Nov",
      ],
    });
  } catch (ex) {}
}
