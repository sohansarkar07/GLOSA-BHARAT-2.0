const { IoTDataPlaneClient, PublishCommand } = require("@aws-sdk/client-iot-data-plane");
const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime");

// Configuration from Environment Variables
const region = process.env.AWS_REGION || "ap-south-1";

// AWS IoT Data Plane Client
const iotClient = new IoTDataPlaneClient({ region });

// AWS SageMaker Runtime Client
const sagemakerClient = new SageMakerRuntimeClient({ region });

/**
 * Publishes telemetry data to AWS IoT Core
 * @param {string} topic - IoT Topic (e.g., 'junction/telemetry/001')
 * @param {Object} data - Traffic density and signal data
 */
async function publishToIoTCore(topic, data) {
    try {
        const input = {
            topic: topic,
            payload: JSON.stringify(data),
            qos: 1,
        };
        const command = new PublishCommand(input);
        await iotClient.send(command);
        console.log(`📡 Data published to AWS IoT Topic: ${topic}`);
    } catch (error) {
        console.error("❌ AWS IoT Publish Error:", error.message);
    }
}

/**
 * Invokes SageMaker Endpoint for Speed Prediction
 * @param {Object} trafficData - Real-time vehicle density data
 * @returns {Object} Predicted Speed and Latency
 */
async function getSageMakerPrediction(trafficData) {
    try {
        const endpointName = process.env.SAGEMAKER_ENDPOINT_NAME || "glosa-v2-endpoint";
        const input = {
            EndpointName: endpointName,
            ContentType: "application/json",
            Body: JSON.stringify(trafficData),
        };
        const command = new InvokeEndpointCommand(input);
        const response = await sagemakerClient.send(command);

        const result = JSON.parse(new TextDecoder().decode(response.Body));
        return result;
    } catch (error) {
        console.warn("⚠️ SageMaker Endpoint not reachable, using local fallback logic.");
        // Fallback to local calculation if AWS is not provisioned
        return null;
    }
}

module.exports = {
    publishToIoTCore,
    getSageMakerPrediction
};
