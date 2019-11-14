var entrepreneur;
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs',       year: 1955 },
  { first: 'Bill',  last: 'Newton',     year: 1955 },
  { first: 'Mark',  last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff',  last: 'Bezos',      year: 1964 },
  { first: 'Elon',  last: 'Musk',       year: 1971 },
  { first: 'Larry', last: 'Page',       year: 1973 },
  { first: 'Jack',  last: 'Dorsey',     year: 1976 },
  { first: 'Evan',  last: 'Spiegel',    year: 1990 },
  { first: 'Brian', last: 'Chesky',     year: 1981 },
  { first: 'Travis',last: 'Kalanick',   year: 1976 },
  { first: 'Marc',  last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel',      year: 1967 }
];

// Les entrepreneurs nés entre 1970 et 1980
function BornBetween70And80(){
  console.log('Les entrepreneurs nés entre 1970 et 1980 sont :')
  entrepreneurs.forEach(
    //function(entrepreneur)
    //{
    if (entrepreneur.year > 1969 && entrepreneur.year < 1980){
      console.log(entrepreneur.first +' '+ entrepreneur.last + ' né en : ' + entrepreneur.year);
    }
  });
}
BornBetween70And80()
