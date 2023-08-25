db.posts.insertMany([
    {
        title: "Post Title 2",
        body: "Body of post.",
        category: "Event",
        likes: 2,
        tags: ["news", "events"],
        date: Date()
    },
    {
        title: "Post Title 3",
        body: "Body of post.",
        category: "Technology",
        likes: 3,
        tags: ["news", "events"],
        date: Date()
    },
    {
        title: "Post Title 4",
        body: "Body of post.",
        category: "Event",
        likes: 4,
        tags: ["news", "events"],
        date: Date()
    }
])


db.posts.aggregate([{$group:{_id:"$category"}}])  //This will return the distinct values from the category field.

// [ { _id: 'Event' }, { _id: 'Technology' } ]   

db.posts.aggregate([{$limit:1}])  //This will return the 1 posts from the collection.


db.posts.aggregate([
    {
      $match: { "category": "Event" }
    },
    {
      $count: "likes"
    }
  ])



db.posts.aggregate([ { $project: { 'title': 1, 'body': 1} }, { $limit: 2 }])

//   [
//     {
//       _id: ObjectId("649c3c69c23c3b3ba688ed76"),
//       title: 'Post Title 2',
//       body: 'Body of post.'
//     },
//     {
//       _id: ObjectId("649c3c69c23c3b3ba688ed77"),
//       title: 'Post Title 3',
//       body: 'Body of post.'
//     }
//   ]

// This will return the documents but only include the specified field
// We use a 1 to include a field and 0 to exclude a field.


db.posts.aggregate([ 
    { 
      $sort: { "likes": -1 } 
    },
    {
      $project: {
        "title": 1,
        "body": 1,
        "_id":0
      }
    },
    {
      $limit: 2
    }
  ])