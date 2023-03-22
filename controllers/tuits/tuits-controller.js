import posts from "./tuits.js";
let tuits = posts;

const findTuits  = (req, res) => {
  res.json(tuits)
}
const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime()+'';
  newTuit.replies = 0;
  newTuit.retuits = 0;
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  newTuit.image = 'nasa.png';
  tuits.push(newTuit);
  res.json(newTuit);
}
const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}
const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex(
    (t) => t._id === tuitdIdToUpdate)
  tuits[tuitIndex] = 
    {...tuits[tuitIndex], ...updates};
    res.json(tuits[tuitIndex]);
}

const TuitController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitController;