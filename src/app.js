import express from "express";

const PORT = 3321;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
