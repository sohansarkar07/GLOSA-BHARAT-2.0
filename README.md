# 🚦 GLOSA-BHARAT 2.0: Intelligent Urban Mobility Ecosystem

[![AWS Hackathon](https://img.shields.io/badge/Hackathon-Hack2Skill%20AI%20for%20Bharat-orange.svg)](https://hack2skill.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack](https://img.shields.io/badge/Stack-AWS%20Cloud%20AI-blue.svg)](#-tech-stack)

**GLOSA-BHARAT 2.0** is the advanced evolution of the Green Light Optimal Speed Advisory ecosystem, specifically optimized for the **Hack2Skill AI for Bharat by AWS Hackathon**. This version leverages AWS-native services to eliminate urban traffic friction using indigenous AI.

---

## 🌟 Key Features

- **🚀 Real-time Speed Advisory**: Calculates and displays the optimal speed to catch the next green light.
- **🧠 Indigenous AI Core**: Custom-trained models (YOLOv8) optimized for heterogeneous Indian traffic (Bikes, Autos, Vans).
- **📊 Digital Twin Dashboard**: A futuristic Leaflet-based GIS dashboard for traffic authorities to monitor congestion and signal health.
- **⚡ Low-Latency Orchestration**: High-speed Node.js middleware for sub-second data routing.
- **🌱 Fuel & Emission Reduction**: Potential 15-20% reduction in fuel consumption and PM2.5 emissions.
- **🛰️ Hardware-Agnostic**: Works with existing government CCTV infrastructure—no expensive LIDAR needed.

---

## 🏗️ System Architecture

The project is built on a 4-Stage Enterprise Architecture:

```mermaid
graph TD
    Junction((Digital Junction)) -->|Traffic Flow| AP[AI Perception: CV Models]
    AP -->|Density Data| OL[Orchestration Layer: Node.js]
    OL -->|Telemetry| AE[AI Advisory Engine: ML Prediction]
    AE -->|Optimal Speed| OL
    OL -->|V2I Sync| IL[Interaction Layer: GLOSA Dashboard]
    IL -->|Speed Advisory| User((Driver / Authority))
```


---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS, Framer Motion
- **Maps**: Leaflet GIS
- **Real-time**: Socket.io-client

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **Communication**: Axios, Socket.io

### AI Service
- **Language**: Python
- **Framework**: FastAPI
- **CV Library**: OpenCV, YOLOv8 (Inference)

---

## 🍃 MongoDB Setup & Compass Connection

To visualize the real-time traffic data in **MongoDB Compass**:

1. **Install MongoDB**: Ensure MongoDB Community Server is installed on your Windows machine.
2. **Open Compass**: Launch MongoDB Compass and click "New Connection".
3. **Connection String**: Use `mongodb://127.0.0.1:27017`
4. **Initial Data**: Run `node scripts/seed.js` inside the `backend` folder to populate initial junction data.
5. **Database Name**: Look for the `glosa-bharat` database in the sidebar.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python 3.9+
- MongoDB instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sohansarkar07/GLOSA-BHARAT.git
   cd GLOSA-BHARAT
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   # Create a .env file with your MONGODB_URI
   npm start
   ```

3. **Setup Frontend**:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Setup AI Service**:
   ```bash
   cd ../ai-service
   pip install -r requirements.txt
   python main.py
   ```

---

## 🇮🇳 Why GLOSA-BHARAT?

Unlike Western traffic management systems, GLOSA-BHARAT is built for the **Indian reality**:
- **Sovereign Hardware Independence**: Leverages existing CCTV networks.
- **Cultural Intelligence**: Handles unlane-led behavior and high-density environments.
- **National Security**: Keeps traffic telemetry on local Indian servers.

---

## 📈 Impact & Vision

- **B2G**: Traffic Monitoring as a Service (TMaaS) for Smart Cities.
- **Eco-Focus**: National-level carbon footprint reduction via signal optimization.
- **Future**: Integration with autonomous vehicle EV platforms and Smart Toll systems.

---

## 🤝 Contributing

We welcome contributions! Whether it's fixing bugs, improving the AI model, or enhancing the UI, feel free to open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed for the **Hack2Skill AI for Bharat by AWS Hackathon 2026**.

## ☁️ AWS Cloud Architecture
GLOSA Bharat is built on a robust, scalable **AWS** infrastructure as per our technical roadmap:
- **Data Ingestion**: **AWS IoT Core** captures real-time telemetry from street-level traffic cameras.
- **AI Processing**: **Amazon SageMaker** hosts the custom YOLOv8 models for real-time congestion and predictive analysis.
- **Backend Orchestration**: **Amazon EC2** running Node.js handles the GLOSA logic and predictive speed calculations.
- **Real-time Delivery**: **API Gateway & WebSockets** push sub-second advisories to the edge.
- **User Interaction**: **AWS Amplify** hosts the React-based mobile application for drivers.
