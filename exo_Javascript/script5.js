const books = [
  { title: 'Gatsby le magnifique',          id: 133712,          rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634,          rented: 1 },
  { title: 'Orgueil & Préjugés',            id: 873495,          rented: 6 },
  { title: 'Les frères Karamazov',          id: 450911,          rented: 5 },
  { title: 'Guerre et Paix',                id: 748147,          rented: 19 }
];

function borrowed(){
  books.forEach(function(book){
    if (book.rented > 0)
    console.log("le livre" + book.title + "a deja ete prêté")
    else console.log("le livre" + book.title + "n'as jamais été prêté")
  })
}
borrowed()

function moreBorrowed(){
  let max = 0;
  let max_title = " ";
  let max_id = 0;
  books.forEach(book => {
    if(book.rented > max){
      max = book.rented;
      max_title = book.title;
      max_id = book.id;
    }
  });
  console.log(`Le livre le plus emprunté avec ${max} emprunts est ${max_title} et son id est ${max_id}.`)
}
moreBorrowed()

function lessBorrowed(){
  let min = 1000;
  let min_title = " ";
  let min_id = 0;
  books.forEach(book => {
    if(book.rented < min){
      min = book.rented;
      min_title = book.title;
      min_id = book.id;
    }
  });
  console.log(`Le livre le plus emprunté avec ${min} emprunts est ${min_title} et son id est ${min_id}.`)
}
lessBorrowed()

function findBook(id){
  console.log(books.find(x => x.id === id));
  return (books.find(x => x.id === id));
}

findBook(873495)


//Supprime le livre avec l'ID: 133712 ;

//Supprime le livre avec l'ID: 133712 ;
{
//const found = books.find(element => element.ID = 133712);
const index = books.findIndex((element) => element.id === 133712);
books.splice(index,1);
console.log(index);
console.log(books);
}
