CREATE DATABASE IF NOT EXISTS fleetdb;

USE fleetdb;

CREATE TABLE IF NOT EXISTS buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bus_id VARCHAR(20) NOT NULL,
    route VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    fuel INT NOT NULL,
    passengers INT NOT NULL,
    status VARCHAR(20) NOT NULL
);

INSERT INTO buses
(bus_id, route, location, fuel, passengers, status)
VALUES
('B101', '21G', 'Chennai', 78, 42, 'Active'),
('B102', '27B', 'Tambaram', 54, 35, 'Active'),
('B103', '70C', 'Avadi', 31, 48, 'Delayed'),
('B104', '18A', 'Porur', 66, 30, 'Active'),
('B105', '5B', 'Guindy', 45, 40, 'Delayed');