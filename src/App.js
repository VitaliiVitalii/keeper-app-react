import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Note from './components/Main/Note';

import notes from './notes';

function App() {
  return (
    <div className="App" >
      <Header />
      {notes.map(notesItem =>
        <Note
          key={notesItem.key}
          title={notesItem.title}
          content={notesItem.content}
        />)}
      <Footer />
    </div>
  );
}

export default App;
