//use cvp-catalog-dev;

user1 = {
  username: "cvpanda@gmail.com",
  company: "CVP",
  catalogue: {
    title: "Venta Libreria",
    items: [
      {
        idItem: "1",
        description: "lapicera blanca diamante",
        image: "base64imagen_id1",
      },
      { idItem: "2", description: "lapicera rosa", image: "base64imagen_id2" },
    ],
  },
};
db.users.insertOne(user1);

user2 = {
  username: "claudiahouse@gmail.com",
  company: "Claudia House",
  catalogue: {
    title: "Venta Regaleria",
    items: [
      {
        idItem: "1",
        description: "lapicera blanca diamante",
        image: "base64imagen_id1",
      },
      { idItem: "2", description: "lapicera rosa", image: "base64imagen_id2" },
    ],
  },
};
db.users.insertOne(user2);
