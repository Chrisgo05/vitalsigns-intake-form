const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Servirá index.html, css y js automáticamente

app.post('/api/register-patient', (req, res) => {
    const patientData = req.body;
    console.log("New Patient Received:", patientData);
    res.status(200).send({ message: "Registration successful!" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));