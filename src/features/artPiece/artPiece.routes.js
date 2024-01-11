import express from "express";
const router = express.Router();

// TODO: require your artPiecesController here
import ArtPieceProductController from "./artPiece.controller.js"

const artPiecesController = new ArtPieceProductController();

// TODO: Implement your artPieces routes here
router.post('/', artPiecesController.addArtPiece);
router.get('/', artPiecesController.getAllProducts);
router.get('/:id', artPiecesController.getArtPieceById);
router.put('/:id', artPiecesController.updateArtPieceById);
router.delete('/:id', artPiecesController.deleteArtPieceById)
export default router;
