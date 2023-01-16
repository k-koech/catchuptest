// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  const user = {name: "Kelvin", class: "SDFT03", role:"Student"}

  const data =[{name: "Kelvin", class: "SDFT03", role:"Student"},
   {name: "Joseph", class: "MDFT59", role:"Student"}, 
   {name: "Glen", class: "MC64-68", role:"Student"},
   {name: "Joanne", class: "Mcft08", role:"Student"}
  ]

  return (
    <div>
      <Navbar username="Kelvin" email="koechkelvin@gmail.com"/>
      <HomePage user={user} students={data} />
    </div>
  ); 
}

export default App;

