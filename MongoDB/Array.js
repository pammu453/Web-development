
test> use Event
switched to db Event
Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find({likes:{$in:{2,3,4,5}}})
Uncaught:
SyntaxError: Unexpected token (1:28)

> 1 | db.posts.find({likes:{$in:{2,3,4,5}}})
    |                             ^
  2 |

Event> db.posts.find({likes:{$in:[2,3,4,5]}})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',

Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find({likes:{$in:[4,100]}})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  }
]
Event> db.posts.find({likes:{$nin:[4,100,5]}})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  }
]
Event> db.posts.find({$or:[{likes:2},{likes:4}]})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  }
]
Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find({tags:'news'})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find({tags:['news']})

Event> db.posts.find({person:{name:'Pramod',age:23}})

Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.insertOne({person:{name:'Pramod',age:23}})
{
  acknowledged: true,
  insertedId: ObjectId("64a1addba88890ac6088e3f8")
}
Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("64a1addba88890ac6088e3f8"),
    person: { name: 'Pramod', age: 23 }
  }
]
Event> db.posts.find({'person.name':'Pramod'})
[
  {
    _id: ObjectId("64a1addba88890ac6088e3f8"),
    person: { name: 'Pramod', age: 23 }
  }
]
Event> db.posts.find({tags:'news'})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find({tags:{$all:['news']}})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find({tags:['news']})

Event> db.posts.find({tags:['news','events']})
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  }
]
Event> db.posts.find()
[
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed76"),
    title: 'Post Title 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed77"),
    title: 'Post Title 3',
    body: 'Body of post.',
    category: 'Technology',
    likes: 100,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649c3c69c23c3b3ba688ed78"),
    title: 'Post Title 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: [ 'news', 'events' ],
    date: 'Wed Jun 28 2023 19:28:01 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId("649dbb1f893c712ac1acfd59"),
    title: 'Post Title 5',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:42:41 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649dbb55893c712ac1acfd69"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("649f039058ed6aff6fc004c7"),
    title: 'post',
    body: 'Body of post.',
    category: 'Event',
    date: 'Thu Jun 29 2023 22:41:49 GMT+0530 (India Standard Time)',
    likes: 5,
    tags: [ 'news', 'events' ]
  },
  {
    _id: ObjectId("64a1addba88890ac6088e3f8"),
    person: { name: 'Pramod', age: 23 }
  }
]
Event> db.posts.find({'person.age':23})
[
  {
    _id: ObjectId("64a1addba88890ac6088e3f8"),
    person: { name: 'Pramod', age: 23 }
  }
]
Event