// function Button(){
//     return <button>Click Me!</button>;
// }
// export default Button;

// export default function Button(){ //default export 
//     return <button>Click Me!</button>;
// }

// if there are multiple functions written in your file then use export ahead of them to export it don't use export default and it is known as multiple export


// named export 
export function Button(){
    return <button>Click Me!</button>;
}


// // 14. Other important Points
// 1. Naming: Must be capitalized; lowercase for default HTML.
// 2. HTML: Unlike vanilla JS where you can't directly write HTML, in React, you can embed HTML-like syntax using
// JSX.
// 3. CSS: In React, CSS can be directly imported into component files, allowing for modular and component-specific styling.