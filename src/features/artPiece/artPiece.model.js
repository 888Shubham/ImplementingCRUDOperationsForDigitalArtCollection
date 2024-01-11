export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static get(id){
    return ArtPiece.products.find((i)=>i.id ==id);
    
  }

  static delete (id){
    const index = ArtPiece.products.findIndex((i) => i.id == id);
    if (index !== -1) {
      ArtPiece.products.splice(index, 1);
  }
}

static update(id, data) {
  const artPiece = ArtPiece.products.find((i) => i.id == id);
  if(artPiece){
    Object.assign(artPiece, data);
  }
  return artPiece;
}


static addNew({title, artist, year, imageUrl}){
  let newProduct = new ArtPiece(
    ArtPiece.products.length + 1,
    title,
    artist,
    year,
    imageUrl
  );
  ArtPiece.products.push(newProduct);
  return newProduct;
}
  
  static getAll(query){
    let allProduct = [...ArtPiece.products]
    return allProduct;

}

static products =[];

}