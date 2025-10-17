
export default function Home() {
  const ul =  <ul>
                <li><input type="checkbox"></input>Sleep</li>
                <li><input type="checkbox"></input>Join React class</li>
                <li><input type="checkbox"></input>Do react home work</li>
              </ul>

  return (
    <div>
      <div>
        <h1>Todo List App</h1>
        <input type="text" placeholder="Enter a new task.."></input>
        <button>Add</button>
      </div>
      {ul}
    </div>
  )
}
