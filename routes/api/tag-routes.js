const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const getTagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const getTagId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!getTagId) {
      res.status(404).json({ message: "No tag with this id!" });
      return;
    }
    res.status(200).json(getTagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createNewTag = await Tag.create(req.body);
    res.status(200).json(createNewTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTagId = await Tag.update(req.body);
    if (!updateTagId) {
      res.status(404).json({ message: "No tag with this id!" });
      return;
    }
    res.status(200).json(updateTagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTagId = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteTagId) {
      res.status(404).json({ message: "No tag with this id!" });
      return;
    }
    res.status(200).json(deleteTagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
