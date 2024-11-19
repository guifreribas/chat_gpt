// import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm";
import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (msg) => {
  handler.onmessage(msg);
};

self.onerror = (e) => console.error("Worker error:", e.message);

self.onmessage = (msg) => {
  console.log("Message received in worker:", msg);
  handler.onmessage(msg);
};
