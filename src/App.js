import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
      <Video
        likes={111}
        messages={222}
        shares={333}
        name="Paulo"
        description="Brecker o goleiro"
        music="musica épica"
        url="https://youtu.be/e110mKvDTvY"
      />
      <Video
        likes={444}
        messages={555}
        shares={666}
        name="Paulo"
        description="Gato pulando"
        music="musica top"
        url="https://youtu.be/e110mKvDTvY"
      />  
      <Video
        likes={777}
        messages={888}
        shares={999}
        name="Paulo"
        description="Brecker o radical"
        music="musica show"
        url="https://youtu.be/e110mKvDTvY"
      />       
      </div>
    </div>
  );
}

export default App;
