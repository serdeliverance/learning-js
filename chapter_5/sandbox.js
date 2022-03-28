// object literals
let user = {
    name: 'pepo',
    age: 30,
    email: 'pepo@pepo.ar',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: 'Akka Streams getting started', likes: 10 },
        { title: 'Writting a library using ZIO', likes: 5 }
    ],
    login() {
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out')
    },
    logBlogs() {
        console.log('this user has written the following blogs:')
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
}

user.logBlogs()