import { useEffect, useState } from "react";
import md5 from "md5"
import { SearchBar } from "../styles/styles";
import { list } from "../services/comics.service";

export function Search() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);

  

  //Gets time as TimeStamp
	useEffect(()=>{
		getComics()
	},[]);

	const getComics = async () => {
		const params = {
      limit: 20,
      offset: 0
    }
		const response = await list(params);
	} 


  const handleSubmit = (e: any) => {
    e.preventDefault();

    getCharacterData();
  };

  const getCharacterData = () => {
    setCharacterData(null);
    setComicData(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  return (
    <SearchBar>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Procurar por personagem!"
          type="text"
          onChange={handleChange}
        />
        <div>
          <button type="submit">Buscar personagem</button>
        </div>
      </form>
    </SearchBar>
  );
}
