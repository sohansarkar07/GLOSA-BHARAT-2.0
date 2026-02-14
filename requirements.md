# Requirements Specification: GLOSA-BHARAT

## 1. Introduction
GLOSA-BHARAT (Green Light Optimal Speed Advisory) is an intelligent Vehicle-to-Infrastructure (V2I) ecosystem designed to eliminate urban traffic friction and fuel wastage. It calculates real-time speed advisories to ensure drivers pass through traffic signals during the green phase without stopping.

## 2. Functional Requirements (EARS Format)

### 2.1 Perceptive Capabilities
- **[REQ-01]** The system shall ingest real-time traffic camera data through **AWS IoT Core**.
- **[REQ-02]** The system shall use an AI model (YOLOv8) hosted on **Amazon SageMaker** to analyze congestion and signal timing.
- **[REQ-03]** When traffic density is captured, the AI layer shall detect vehicles to predict ideal speeds.

### 2.2 Orchestration & Advisory
- **[REQ-04]** The system shall calculate the optimal speed for an approaching vehicle based on the current signal timing, distance from the junction, and queue length.
- **[REQ-05]** While a vehicle is within the advisory zone (e.g., 500 meters), the advisory engine shall update the recommended speed every 2 seconds.
- **[REQ-06]** When a vehicle reaches the junction, the system shall archive the data and reset the advisory for the next incoming vehicle.

### 2.3 Interface & Experience
- **[REQ-07]** The mobile application (React) shall display a live countdown to the next signal change.
- **[REQ-08]** The system shall provide real-time speed recommendations to drivers to ensure signal passage without stopping.
- **[REQ-09]** The system shall integrate with Smart City infrastructure using **AWS Cloud** for cross-city scalability.

## 3. Non-Functional Requirements
- **[REQ-09]** The system shall maintain sub-second latency (< 500ms) for data routing between the AI service and the interaction layer.
- **[REQ-10]** The architecture shall be hardware-agnostic, ensuring compatibility with existing government CCTV infrastructure without requiring specialized sensors.
- **[REQ-11]** The system shall support high-concurrency connections from multiple drivers simultaneously.

---
*Generated using Kiro Design Phase Pipeline for Hack2Skill AI for Bharat by AWS Hackathon.*
