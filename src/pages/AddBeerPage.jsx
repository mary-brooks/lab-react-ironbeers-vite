import { useState } from 'react';
import axios from 'axios';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attentuation_level, setAttentuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');

  const handleName = e => {
    setName(e.target.value);
  };

  const handleTagline = e => {
    setTagline(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };

  const handleFirstBrewed = e => {
    setFirst_brewed(e.target.value);
  };

  const handleBrewersTips = e => {
    setBrewers_tips(e.target.value);
  };

  const handleAttenuationLevel = e => {
    setAttentuation_level(e.target.value);
  };

  const handleContributedBy = e => {
    setContributed_by(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addBeer();
  };

  const addBeer = async () => {
    try {
      const request = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attentuation_level,
        contributed_by,
      };

      const response = await axios.post(
        `https://ih-beers-api2.herokuapp.com/beers/new`,
        request
      );

      console.log(response.data);

      setName('');
      setTagline('');
      setDescription('');
      setFirst_brewed('');
      setBrewers_tips('');
      setAttentuation_level(0);
      setContributed_by('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        onChange={handleName}
        type='text'
        id='name'
        name='name'
        value={name}
      ></input>

      <label htmlFor='tagline'>Tagline</label>
      <input
        onChange={handleTagline}
        type='text'
        id='tagline'
        name='tagline'
        value={tagline}
      ></input>

      <label htmlFor='description'>Description</label>
      <textarea
        onChange={handleDescription}
        name='description'
        type='text'
        id='description'
        cols='30'
        rows='10'
        value={description}
      ></textarea>

      <label htmlFor='first_brewed'>First Brewed</label>
      <input
        onChange={handleFirstBrewed}
        type='text'
        id='first_brewed'
        name='first_brewed'
        value={first_brewed}
      ></input>

      <label htmlFor='brewers_tips'>Brewer's Tips</label>
      <input
        onChange={handleBrewersTips}
        type='text'
        id='brewers_tips'
        name='brewers_tips'
        value={brewers_tips}
      ></input>

      <label htmlFor='attentuation_level'>Attentuation Level</label>
      <input
        onChange={handleAttenuationLevel}
        type='number'
        id='attentuation_level'
        name='attentuation_level'
        value={attentuation_level}
      ></input>

      <label htmlFor='contributed_by'>Contributed By</label>
      <input
        onChange={handleContributedBy}
        type='text'
        id='contributed_by'
        name='contributed_by'
        value={contributed_by}
      ></input>

      <button type='submit'>Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
