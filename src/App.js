import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeAddress from './components/HomeAddress';

class App extends Component {
  render() {
    {/*let name = "Sam";
        let address = "23 Main St"
        console.log(`name is ${name}`);}*/}
    const people = [
      {
        name: 'Alex',
        age: 12,
        address: '8234238 alim road, delaware, de'
      },
      {
        name: 'Carl',
        age: 21,
        address: '8234238 alim road, delaware, md'
      },
      {
        name: 'june',
        age: 65,
        address: '8234238 alim road, delaware, va'
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />
          <h1>Hey Hello World!!</h1>*/}
          
          {/*
          {people.map(function(p) {
            return (
              <HomeAddress 
                name={p.name}
                address={p.address}
              />
            )
          })}
          */}
          <h2> Using es6 </h2>

          {people
            .filter((p) => {
              return (
                p.age > 20 && p.name.indexOf('C')===0
              )
            })

          // .filter (p => p.age > 20)


            .map((p, i) => {
            return (
              <HomeAddress 
                key={i}
                name={p.name}
                age={p.age}
                address={p.address}
              />
            )
          })}

          <p>

            

          </P>


          


          {/*<HomeAddress 
            name="Max"
            address="8234238 alim road, delaware, de"
            />
          <HomeAddress 
            name="John"
            address="88234 high road, cholo, md"
            />*/}
        </header>           
      </div>
    );
  }
}

export default App;
