---
title: "FITEC"
description: "Sistema de Gestión Distribuida para una Red de Gimnasios"
stack: ["SQL Server", "Sistemas Distribuidos", "Replicación", "Particionamiento", "Protocolo 2PC", "Patrón DAO", "Arquitectura de Bases de Datos"]
role: "Desarrollador Full Stack"
location: "Quito - Ecuador"
duration: "Abril 2025 – Agosto 2025"
github: "https://github.com/GregorySD1707/FITEC-BDD"
image: "../../../assets/images/projects/fitec1.webp"
---

- Diseñé una arquitectura de base de datos distribuida en SQL Server a través de **2 nodos geográficos**, aplicando fragmentación horizontal por sucursal con restricciones CHECK para garantizar el aislamiento de datos y la aplicación de privilegios por ubicación.

- Implementé 4 vistas particionadas actualizables, permitiendo **operaciones CRUD entre nodos 100% transparentes** sin modificar la lógica de la aplicación.

- Configuré la replicación bidireccional del catálogo de SUSCRIPCIONES con **sincronización automática en tiempo real entre nodos** y aseguré una consistencia ACID del 99.9% mediante transacciones distribuidas usando el protocolo 2PC.

- Desarrollé 2 módulos completos (**Suplementos + Suscripciones**) aplicando el patrón DAO.