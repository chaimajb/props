import "./App.css";
import Myprofile from "./component/profile";


function App() {
    return (
        <div className="App">
          <div class="card-image"></div>
            <Myprofile
                bio={"ONE OF THE MOST POPULAR CELEBRITIES IN THE WORLD"}
                fullName={"JOHNNY DEPP"}
                profession={"ACTORS"}
            >
            <img
                    id="johnnydepp"
                    src="/johnnydepp.jpg"
                    alt="/johnnydepp"
                    width="250"
                    height="300"
            />
            </Myprofile>
        </div>
    );
}

export default App;