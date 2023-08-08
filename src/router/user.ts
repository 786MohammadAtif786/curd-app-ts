import express from 'express';
import User from '../model/user';

const router = express.Router();

// Create a new item
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err:any) {
    if (err.code == 11000) {
      return res.status(500).json({msg: 'Email Already created'})
    }
    res.status(500).json({ message: err });
  }
});

router.get('/', async(req, res) => {
    try {
        const users = await User.find({ });
        res.json({users})
    } catch(err) {
        res.status(500).json({ message: err });
    }
})

router.put('/:id', async(req, res) => {
  try {
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateduser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updateduser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const deletedItem = await User.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
