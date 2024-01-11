import express from "express";
import router from "./src/features/artPiece/artPiece.routes.js";
const app = express();

// TODO: require your artPieceRoutes here

app.use(express.json());

// TODO: use your artPieceRoutes with a proper endpoint
app.use("/api/artPieces",router);

export default app;
