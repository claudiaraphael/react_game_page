/*create function based components. There are class based components but they are not the most used.
 . This component makes it able for us to write in html inside the App.


*/

function Message() {
    /* JSX = Javascript XML language. it's not html. see babeljs.io/repl for more details. */
    const name = 'Cacau';
    if (name)
        return <h1> Hello {name} </h1>;
    return <h1>Hello World</h1>
}

export default Message; 