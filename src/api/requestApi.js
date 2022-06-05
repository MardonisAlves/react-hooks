import instance from "../utils/defaultHeader";

export  function posts(){
    try {
        const posts =  instance.post('/posts',{
        title: 'teste',
        body: 'body teste',
        userId: 2,
      })
      return posts;
    } catch (error) {
    console.log(error)
    }
}

export function getposts(){
    try {
       const allPosts = instance.get('/posts');
       return allPosts;
    } catch (error) {
    console.log(error)
    }
}