const BlogList = ({blogs, title}) => { // passing the prop object. Can use "props" & then define the prop variables below, or can {blogs, titles}
    // const blogs = props.blogs; // grabbing the blogs prop & use below
    // const title = props.title // grabbing the title prop & use below

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;