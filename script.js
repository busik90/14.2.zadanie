var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny'
  },
  {
    id: 3,
    title: 'Atlas Chmur',
    desc: 'Film o życiach ludzi w różnych czasach, różnych wcieleniach'
  },
  {
    id: 4,
    title: 'Colony',
    desc: 'Serial o najeźdźcach z kosmosu'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  
ReactDOM.render(element, document.getElementById('app'));