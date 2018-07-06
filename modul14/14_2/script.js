// var element =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Harry Potter'),
//         React.createElement('p', {}, 'Film o czarodzieju')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Król Lew'),
//         React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//       )
//     )
//   );


var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: './harry.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './lion.jpg'
  },
    {
  	id: 3,
    title: 'Odlot',
    desc: 'Bajka o tym, że nigdy nie jest za późno na spełnienie swoich marzeń',
    img: './odlot.jpg'
  },
    {
  	id: 4,
    title: 'Lorax',
    desc: 'Bajka o tym jak zgubny jest konsumpcjonizm i niszczenie przyrody',
    img: './lorax.jpg'
  },
    {
  	id: 5,
    title: 'Rio',
    desc: 'Bajka pełna brazylisjkich rytmów, pięknych widoków i amazońskich zwierząt.',
    img: './rio.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
     React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  ReactDOM.render(element, document.getElementById('app'));