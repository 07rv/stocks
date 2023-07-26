export default function handler(req, res) {
  try {
    res
      .status(200)
      .json({ open: 1234, High: 123, Low: 12, Close: 987654, Volume: 876543 });
  } catch (ex) {}
}
