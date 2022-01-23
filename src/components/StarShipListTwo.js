import React, { useState, useEffect } from "react";
import axios from "axios";
import StarShipData from "./StarShipData";
const StarShipListTwo = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  let getallships = [...data, ...data2, ...data3, ...data4];
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
      const data = await axios.get("https://swapi.dev/api/starships/");
      const data2 = await axios.get("https://swapi.dev/api/starships/?page=2");
      const data3 = await axios.get("https://swapi.dev/api/starships/?page=3");
      const data4 = await axios.get("https://swapi.dev/api/starships/?page=4");
      console.log(data.data.results);
      console.log(data2.data.results);
      console.log(data3.data.results);
      console.log(data4.data.results);
      setData(data.data.results);
      setData2(data2.data.results);
      setData3(data3.data.results);
      setData4(data4.data.results);

      // you could also use destructuring to have an array of responses
      await axios.all([data, data2, data3, data4]).then(
        axios.spread(function (res1, res2, res3, res4) {
          console.log(res1);
          console.log(res2);
          console.log(res3);
          console.log(res4);
        })
      );

      //   setGifURL(response.data.data.images.original.url);
    } catch (error) {
      console.error(error);
    }
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
      {getallships.map((ships) => {
        return <StarShipData key={ships.model} ships={ships} />;
      })}
    </div>
  );
};
export default StarShipListTwo;
