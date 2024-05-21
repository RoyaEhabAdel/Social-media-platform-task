import Post from './component/Post';
import './App.css';

function App() {
  const headerListItems = [
    {
      id:1,
      name: "Top"
    },
    {
      id:2,
      name: "Latest"
    },
    {
      id:3,
      name: "People"
    },
    {
      id:4,
      name: "Photos"
    },
    {
      id:5,
      name: "Videos"
    },
    {
      id:6,
      name: "News"
    },
    {
      id:7,
      name: "Broadcasts"
    }
  ]
  return (
    <div className="App">
     <header>
      <ul>
        {headerListItems.map((headerListItem)=>{
          return(
            <li key={headerListItem.id}>{headerListItem.name}</li>
          )
        })}
      </ul>
      </header>
        <Post />
      
    </div>
    
  );
}

export default App;
