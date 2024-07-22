import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const Breed = [];


const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState(""); 
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => setAnimal(e.target.value)}
            id="animal"
            value={animal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            id="breed"
            disabled={breed.length === 0}
            value={breed}
          >
            <option />
            {Breed.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
