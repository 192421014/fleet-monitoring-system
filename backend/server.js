const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

const buses = [
    {
        bus_id: "B101",
        route: "21G",
        location: "Chennai",
        fuel: 78,
        passengers: 42,
        status: "Active"
    },
    {
        bus_id: "B102",
        route: "27B",
        location: "Tambaram",
        fuel: 54,
        passengers: 35,
        status: "Active"
    },
    {
        bus_id: "B103",
        route: "70C",
        location: "Avadi",
        fuel: 31,
        passengers: 48,
        status: "Delayed"
    },
    {
        bus_id: "B104",
        route: "18A",
        location: "Porur",
        fuel: 66,
        passengers: 30,
        status: "Active"
    },
    {
        bus_id: "B105",
        route: "5B",
        location: "Guindy",
        fuel: 45,
        passengers: 40,
        status: "Delayed"
    }
];

app.get("/api/buses", (req, res) => {
    res.json(buses);
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Fleet Monitoring Backend is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});