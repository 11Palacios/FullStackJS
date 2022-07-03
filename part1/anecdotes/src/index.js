import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Anecdote from './components/Anecdote';
import Button from './components/Button';
import MostVotes from './components/MostVotes';
import './index.css';

const App = (props) => {
  const points = { 0: 1, 1: 3, 2: 4, 3: 2 }
  const random = () => {
    return Math.floor((Math.random() * (anecdotes.length)));
  }
  const [selected, setSelected] = useState(random)
  const [votes, setVotes] = useState({...points})
  const [maxVotes, setMaxVotes] = useState(Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b))
  const showNext = () => {
    setSelected(random);
  }

  const vote = (pos) => {
    let newVotes = {...votes}
    if(pos in votes){
      newVotes[pos] = (votes[pos] + 1)
      setVotes({...newVotes})
      setMaxVotes(Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b))
    }else{
      let nue = {}
      nue[pos] = 1
      newVotes = Object.assign(newVotes,nue)
      setVotes({...newVotes})
      setMaxVotes(Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b))
    }
  }

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={selected in votes ? votes[selected] : '0'} />
      <Button text='vote' action={() => vote(selected)} />
      <Button text='next anecdote' action={() => showNext()}/>
      <MostVotes anecdote={anecdotes[maxVotes]}/>
    </div>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);
