 apiResponse = [
    {
      "postId": 1,
      "title": "Introduction to Nested Iteration",
      "content": "Learn about nested iteration in this blog post.",
      "comments": [
        { "commentId": 101, "text": "Great post!" },
        { "commentId": 102, "text": "Looking forward to more content." }
      ]
    },
    {
      "postId": 2,
      "title": "Advanced Nested Iteration Techniques",
      "content": "Explore advanced techniques in nested iteration.",
      "comments": [
        { "commentId": 201, "text": "Very informative!" },
        { "commentId": 202, "text": "Thanks for sharing." }
      ]
    },
    // ... more blog posts
  ]


for (const ap of  apiResponse ){
    console.log(ap)
}


// suppose i have to select postiD2
// how to get it 
  