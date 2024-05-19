const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * GET /
 * HOME
 */
router.get('', async (req, res) => {
  
  try {
    const locals = {
      title: 'BigLadBlogs',
      description: 'Best website for fellas from all over the world!'
    }
    let perPage = 8;
    let page = req.query.page || 1;

    const data = await Post.aggregate([ {$sort: {createdAt: -1 }} ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render('index', { 
      locals, 
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: '/'
    });
  } catch (err) {
    console.log(err);
  }
});

/**
 * GET /
 * Post :id
 */

router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: 'Best website for fellas from all over the world!'
    }

    res.render('post', {
      locals, 
      data,
      currentRoute: `/post/${slug}`
    });
  } catch (err) {
    console.log(err)
  }
});

/**
 * GET /
 * Post - SearchTerm
 */

router.post('/search', async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: 'Best website for fellas from all over the world!',
    }

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, " ");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, 'i' ) }},
        { body: { $regex: new RegExp(searchNoSpecialChar, 'i' ) }}
      ]
    });

    res.render("search", {
      data,
      locals
    });
  } catch (err) {
    console.log(err);
  }
});





router.get('/about', (req, res) => {
  res.render('about', {
    currentRoute: '/about'
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    currentRoute: '/contact'
  });
});

router.get('/mma', (req, res) => {
  res.render('mma', {
    currentRoute: '/mma'
  });
});

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: 'Introducing BigLadBlogs',
//       body: 'LADS, it is time to take over'
//     },
//     {
//       title: 'Problems with the lads - BigLadBlogs',
//       body: 'LADS, bad times, bad times lads..'
//     },
//     {
//       title: 'Stopping the lads - BigLadBlogs',
//       body: 'LADS, it time we leave our past behind us and move forward.'
//     },
//     {
//       title: 'New era - BigLadBlogs',
//       body: 'LADS, now is the right time.'
//     }
//   ]);
// }
// insertPostData();

module.exports = router;