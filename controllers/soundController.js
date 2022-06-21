// ? The controller contains the code to work with our data and send it back to the user.
// ? It's the part that can interact and manipulate our data. 

import Sound from "../models/soundModel.js"

async function getAllSounds(req, res) {
  const soundData = await Sound.find().populate('user')
  res.json(soundData)
  console.log(soundData)
}

async function createSound(req, res) { 
  const newSound = req.body
  newSound.user = req.currentUser
  const createdSound = await Sound.create(newSound)
  console.log(newSound)
  res.status(201).json(createdSound)
}

async function getSingleSound(req, res) { 
  const soundById = req.params.soundId
  console.log(soundById)
  const sound = await Sound.findById(soundById)
  res.json(sound)
}

async function removeSoundById(req, res) {
  try {
    const soundById = req.params.soundId
    const user = req.currentUser
    const soundToDelete = await Sound.findById(soundById)
    if (!soundToDelete.user.equals(user._id)) {
      return res.json({ message: "unauthorized" }) 
    }
    if (!soundToDelete) {
      return res.json({ message: "sound not found" })
    }
    await Sound.findByIdAndDelete(soundById)
    res.sendStatus(204) 
  } catch (e) {
    res.status(422).json({ message: "this sound id is an invalid format" })
  }
}
//! Universal 

// Get all sound from a single user

//! only by the OP 
// Method to Delete by id
// Delete all sounds which the user has posted 
// Update a sound by id



export default {
  getAllSounds,
  createSound,
  getSingleSound,
  removeSoundById,
}