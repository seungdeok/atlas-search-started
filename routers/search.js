const express = require('express');
const postModel = require('../models/post');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const agg = [
      {
        $search: {
          index: 'posts',
          text: {
            query: 'content',
            path: {
              'wildcard': '*'
            }
          }
        },
      },
    ]
    const searchedPost = await postModel.aggregate(agg);

    return res.status(200).json({
      success: true,
      data: { list: searchedPost },
    });
  } catch(err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

module.exports = router;