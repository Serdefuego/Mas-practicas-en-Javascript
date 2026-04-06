const express = require("express");
const app = express();

// Ruta principal (para que no aparezca "Cannot GET /")
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Endpoint con los datos
app.get("/api/datos", (req, res) => {
  res.json({
    nombre: "Marcos",
    documento: 12345678,
    correo: "test@test.com",
    telefono: 123456789,
    direccion: "Calle 123",
    valor: 5000,
    concepto: "Servicio"
  });
});

// Puerto
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});