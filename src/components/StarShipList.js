import React, { useState, useEffect } from "react";
import axios from "axios";
import StarShipData from "./StarShipData";

const StarShipList = () => {
  const [data, setData] = useState([]);

  // try/catch and async/await
  // try/catch - tells our code to run the block of code and not break our application
  const fetchData = async () => {
    try {
      // AJAX call
      // async/await is syntactical sugar for our thennables
      // we need the keyword async in front of our function
      // we create a variable that will hold our response
      // await can only be used inside an async function in regular JS
      // await replaces our then()
      const data = await axios.get("https://swapi.dev/api/starships");
      console.log(data.data.results);
      setData(data.data.results);
      //   setGifURL(response.data.data.images.original.url);
    } catch (error) {
      console.error(error);
    }

    // using thennables
    // axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9&tag=&rating=g')
    // .then((response) => {
    //     setGifURL(response.data.data.images.original.url)
    // })
    // .catch(err => console.err(err))
  };
  // console.log('state', gifURL)

  // useEffect is a React hook we have to import
  // It takes in two arguments
  // first argument is the function, second argument is our dependency array
  useEffect(() => {
    // console.log('We mounted')

    fetchData();
    // An empty dependency array allows us to call our useEffect once only
    // any dependency you pass inside our dependency array will tell our component to listen for changes in those dependencies
  }, []);

  return (
    <div>
      {data.map((ships) => {
        return <StarShipData key={name} ships={ships} />;
      })}
    </div>
  );
};

export default StarShipList;
