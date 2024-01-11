import ArtPiece from "./artPiece.model.js";

export default class ArtPieceProductController{

    getAllProducts(req,res){
        const products = ArtPiece.getAll(req.query);
        res.status(200).send(products);
    }
    getArtPieceById(req,res){
        const id = req.params.id;
        const product = ArtPiece.get(id);
        if(!product){
            res.status(404).send('Product not found');
        } else{
            return res.status(200).send(product);
        }
    }
    deleteArtPieceById(req, res){
        const id = req.params.id;
            ArtPiece.delete(id);
            res.status(204).send();
        
    }
    updateArtPieceById(req, res){
        const products = ArtPiece.update(req.params.id, req.body)
        if (!products) {
          return res.status(404).send('Product not found');
        }else {
        res.status(200).send(products);
     }
        
    }
    addArtPiece(req,res){
        // console.log(req.body);
        ArtPiece.addNew(req.body);
        const products = ArtPiece.getAll();
        res.status(200).send(products);

    }
}