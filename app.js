// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);

// Functional component
// const Container = () =>{
//     return React.createElement(div,null,Hey Kalvians! Welcome to React Learning,
//        React.createElement(div,null,Let's rock and roll)
//        );
// }

// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);

// Class component
// class ReactContainer extends React.Component{
//       render(){
//           return React.createElement(div,null,Hey Kalvians,
//           React.createElement(div,null,Let's rock and roll with classes)
//           );
//       }
    
//   }
//   const container = document.getElementById('react-container');
//   ReactDOM.render(React.createElement(ReactContainer),container);

// Using Babel
class ReactContainer extends React.Component{

    render(){
        return (
        <div>Hello! Welcome to Kalvium   
          <div>Lets Rock and Roll - This is babel</div>
       </div> )
    };  
}

const container = document.getElementById('react-container');

ReactDOM.render(<ReactContainer/>,container);