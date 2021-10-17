import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
          const [countries,setCountries] = useState([]);
          useEffect( () =>{
                   fetch('https://restcountries.com/v2/all')
                   .then(res => res.json())
                   .then(data => setCountries(data))
          },[])
          
          return (
                    <div>
                          <h1> Hello lets go to the world visit:{countries.length} </h1>  
                          {
                              countries.map(country => <Country name={country.name}></Country>)
                          }
                    </div>
                  
          );
};

export default Countries;