const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let data = [];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

app.put("/api/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const dataIndex = data.findIndex((d) => d.id === id);
  if (dataIndex !== -1) {
    data[dataIndex] = updatedData;
    res.json(updatedData);
  } else {
    res.status(404).json({ message: `Data with id ${id} not found` });
  }
});

app.delete("/api/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const dataIndex = data.findIndex((d) => d.id === id);
  if (dataIndex !== -1) {
    const deletedData = data.splice(dataIndex, 1);
    res.json(deletedData[0]);
  } else {
    res.status(404).json({ message: `Data with id ${id} not found` });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
