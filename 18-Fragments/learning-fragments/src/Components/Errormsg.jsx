const Errormsg = ({items}) => {
    // define fooditems in parent class i.e. app.jsx
//   let foodITems = ["Blueberry", "Avacadoes", "Nuts", "Pineapple"];
      return<> {items.length === 0 && <p>I'm still hungry...</p>}</>
}
export default Errormsg;