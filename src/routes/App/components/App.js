import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';

function App() {
  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Code!</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button className="app__dark-mode-btn icon level-right">
          <FontAwesomeIcon icon={faMoon}/>
        </button>

      </div>

      <div className="columns">
        <div className="column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat. In hendrerit gravida rutrum quisque non tellus orci ac. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Nunc pulvinar sapien et ligula ullamcorper malesuada. Tortor aliquam nulla facilisi cras fermentum odio eu. Adipiscing elit ut aliquam purus sit amet. Netus et malesuada fames ac turpis egestas integer eget. Velit sed ullamcorper morbi tincidunt ornare massa. Aliquet eget sit amet tellus cras adipiscing. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Enim praesent elementum facilisis leo vel fringilla.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}


export default App;
