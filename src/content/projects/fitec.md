---
title: "FITEC"
description: "Distributed Management System for Gym Network"
stack: ["SQL Server", "Distributed Systems", "Database Replication", "Partitioning", "2PC Protocol", "DAO Pattern", "Database Architecture"]
role: "Full Stack Developer"
location: "Quito - Ecuador"
duration: "April 2025 – August 2025"
github: "https://github.com/GregorySD1707/FITEC-BDD"
image: "../../assets/images/projects/fitec1.webp"
---

- Designed distributed SQL Server database architecture across **2 geographic nodes**, applying horizontal fragmentation per branch with CHECK constraints, ensuring data isolation and privilege enforcement per location.

- Implemented 4 updatable partitioned views, enabling **100% transparent cross-node CRUD operations** without modifying application logic.

- Configured bidirectional replication for SUBSCRIPTION catalog with automatic real-time **synchronization between nodes**, ensured 99.9% ACID consistency through distributed transactions using 2PC protocol.

- Developed 2 complete modules (**Supplements + Subscriptions**) applying DAO pattern.