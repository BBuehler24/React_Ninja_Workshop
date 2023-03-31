import { useState } from 'react';
import BlogList from './BlogList';

//Click Events
//UseState
//Outputting Lists

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // want to find a way to cycle through the above object data & post dynamically to HTML/JSX
    // Note: every <div> created from .map must include a key attribute

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/> 
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> 
            {/* The above would be extremely useful for a blogs search page  */}
        </div>
);
    }

// const Home = () => {
//     // let name = 'Brian';
//     const [name, setName] = useState('Brian'); //defining name with original value of Brian. setName will be the reactive/changeable variable.
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('luigi'); // changes the name value to luigi upon click
//         setAge(30);
//     }

    // const handleClick = (e) => { //the handleCLick is a common naming function for react
    //     console.log('hello, ninjas', e); // adding the 'e' here & as argument, allows us to see all details of the click
    // }

    // const handelClickAgain = (name, e) => {
    //     console.log("hello" + name, e.target);
    // }

    // return (
    //     <div className="home">
    //         <h2>Homepage</h2>
    //         {/* <p>{ name } is { age } years old</p>
    //         <button onClick={handleClick}>Click Me</button> */}
    //         {/* <button onClick={(e) => handelClickAgain('Brian', e)}>Click Me Again</button> */}
    //     </div>
    // );
 
export default Home;