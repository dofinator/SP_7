import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { useState } from 'react';

function App(props) {

  const books = props.bookFacade.getBooks()
  const [book, setBook] = useState({ id: 0, title: "", info: "" })

  return (
    <div>
      <Header />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products books={books} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route>
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>

  );


  function Header() {
    return (<ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
    )
  }


  function NoMatch() {
    return <p>No match found</p>
  }

  function Home() {
    return ("Home")
  }

  function Products(props) {
    return (<div>
      <h2>Products</h2>
      <ul>
        {props.books.map(book => (<li>{book.title}</li>))}
      </ul>
      <p>{props.books.length}</p>
    </div>
    )
  }

  function Company() {
    return ("Company")
  }

  function AddBook(props) {
    return (<div>
      <h2>Add Book</h2>
      <form >
        <input placeholder="Add title" name="title" />
        <input placeholder="Add info" name="info" />
        <button type="submit" className="btn btn-primary">
          Save
            </button>
      </form>
    </div>)
  }
}


export default App;
