console.log("Fleet Monitoring System loaded successfully");

async function loadFleetData() {
    try {
        const response = await fetch("/api/buses");

        if (!response.ok) {
            throw new Error("API not available");
        }

        const buses = await response.json();

        document.getElementById("totalBuses").textContent = buses.length;

        const active = buses.filter(bus => bus.status === "Active").length;
        const delayed = buses.filter(bus => bus.status === "Delayed").length;

        document.getElementById("activeBuses").textContent = active;
        document.getElementById("delayedBuses").textContent = delayed;

    } catch (error) {
        console.log("Using demo fleet data");
    }
}

loadFleetData();