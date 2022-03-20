import "./App.css"
import MenuApp from "./components/MenuApp"
import Menu from "./components/Menu";
import React, { useEffect, useState } from 'react';
function App() {
  const [displayCounter, setDisplayCounter] = useState(false);
  let menuData = [
    {
      menuName: "Appetizer",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "7",
          itemName: "Mozzarella Sticks",
          itemDescription:
            "Battered and breaded mozzarella.",
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Chicken Gnocchi Soup",
          itemDescription: "A creamy soup with seasonal vegetables and potato gnocchi.",
        },
        {
          itemId: 3,
          itemPrice: "14",
          itemName: "Salad",
          itemDescription:
            "Our house salad with seasonal vegetables and our house Italian dressing.",
        },
      ],
    },
    {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "12",
          itemName: "Lasagne",
          itemDescription:
            "Meat and cheese layered between house-made pasta with bell peppers and onions.",
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Cheese Ravioli",
          itemDescription: "Cheese-filled ravioli served with house red sauce.",
        },
        {
          itemId: 3,
          itemPrice: "14",
          itemName: "Chicken Parmesan",
          itemDescription:
            "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti.",
        },
      ],
    },
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "10",
          itemName: "Chocolate Lava Cake",
          itemDescription: "Dark chocolate molten lava cake. Serves 2-3.",
        },
        {
          itemId: 47,
          itemPrice: "8",
          itemName: "Tiramisu",
          itemDescription:
            "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder.",
        },
        {
          itemId: 49,
          itemPrice: "5",
          itemName: "Cannolis",
          itemDescription:
            "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips.",
        },
        {
          itemId: 50,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: "Steamed milk with two ristretto shots of espresso.",
        },
      ],
    },
  ]

  class ExampleClass extends React.Component {
    constructor() {
      super()
      this.state = { count: 0 }
    }
    render() {
      console.log("RENDERING!");
        return (
      <div>
        <h2>Place Your Order</h2>
        <p>{this.state.count} items</p>
        <h3>Appetizer</h3>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Mozzarella Sticks
        </button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Chicken Gnocchi Soup
        </button>
          <button onClick={() => this.setState({count: this.state.count + 1})}>
          Salad
        </button>
        <p>
        <button onClick={() => this.setState({count: this.state.count = 0})}>
          Reset</button>
        </p>
        {/* dinner */}
        <h3>Dinner</h3>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Lasagne
        </button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Cheese Ravioli
        </button>
          <button onClick={() => this.setState({count: this.state.count + 1})}>
          Chicken Parmesan
        </button>
        <p>
        <button onClick={() => this.setState({count: this.state.count = 0})}>
          Reset</button>
        </p>
        {/* Dessert */}
        <h3>Dessert</h3>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Chocolate Lava Cake
        </button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Tiramisu
        </button>
          <button onClick={() => this.setState({count: this.state.count + 1})}>
          Cannolis
        </button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Cappuccino
        </button>
        <p>
        <button onClick={() => this.setState({count: this.state.count = 0})}>
          Reset</button>
        </p>
      </div>
    );
        }   
    }


  return (
    <div className="App">
        <MenuApp data={menuData}></MenuApp>
        <p>
      { 
        (displayCounter ?
          <ExampleClass name="Push Ups"/> 
      :
      <button onClick={() => setDisplayCounter(true)}>
        Place Mobile Order
      </button>
        )
      }
      </p>
    </div>

  )
}

export default App;
