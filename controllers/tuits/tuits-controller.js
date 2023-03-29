import * as tuitsDao from './tuits-dao.js';

import posts from "./tuits.js";
let tuits = posts;

const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}
const createTuit = async(req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.liked = false;
  newTuit.disliked = false;
  newTuit.image = 'nasa.png';
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  console.log(insertedTuit, 'insertedTuit')
  res.json(insertedTuit);
}
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}
const updateTuit = async(req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
}

const TuitController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitController;
