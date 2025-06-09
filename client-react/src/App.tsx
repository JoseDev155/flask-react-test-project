import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  type User = { id: number; name: string };
  type Fruit = { id: number; name: string };

  const [users, setUsers] = useState<User[]>([]);
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/fruits')
      .then(res => res.json())
      .then(data => setFruits(data.fruits))
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React with Vite + Python with Flask</h1>
      <div className="card">
        <h2>Users</h2>
        
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>          
            ))}
          </tbody>
        </table>

        <h2>Fruits</h2>
        <table className="table">
          <thead>
            <th>Id</th>
            <th>Fruit</th>
          </thead>
          <tbody>
            {fruits.map(fruit => (
              <tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
              </tr>          
            ))}
          </tbody>
        </table>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
