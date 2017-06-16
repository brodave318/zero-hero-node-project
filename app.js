var express = require('express');
var app = express();

var port = 3000;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var eventsData = [ {
                   name: 'Event 1',
                   description: 'The first event',
                   date: '2017.01.01',
                   time: '1:00 pm',
                   duration: '1 hour',
                   location: {
                     streetAddr: '101 Main St.',
                     city: 'Los Angeles',
                     state: 'CA',
                     zip: '87885',
                     lon: '0',
                     lat: '0',
                     },
                   capacity:  '100',
                   },
                   {
                   name: 'Event 2',
                   description: 'The second event',
                   date: '2017.02.02',
                   time: '2:00 pm',
                   duration: '2 hours',
                   location: {
                     streetAddr: '202 Main St.',
                     city: 'Los Angeles',
                     state: 'CA',
                     zip: '87885',
                     lon: '0',
                     lat: '0',
                     },
                   capacity:  '200',
                   },
                   {
                   name: 'Event 3',
                   description: 'The third event',
                   date: '2017.03.03',
                   time: '3:00 pm',
                   duration: '3 hours',
                   location: {
                     streetAddr: '303 Main St.',
                     city: 'Los Angeles',
                     state: 'CA',
                     zip: '87885',
                     lon: '0',
                     lat: '0',
                     },
                   capacity:  '300',
                   },
                   {
                   name: 'Event 4',
                   description: 'The fourth event',
                   date: '2017.04.04',
                   time: '4:00 pm',
                   duration: '4 hours',
                   location: {
                     streetAddr: '404 Main St.',
                     city: 'Los Angeles',
                     state: 'CA',
                     zip: '87885',
                     lon: '0',
                     lat: '0',
                     },
                   capacity:  '400',
                   }
];

eventRouter.route('/')
  .get(function(req, res) {
    res.render('events', {
      list: ['first event', '2nd event', '3rd event'],
      nav: [{Link : 'Services', Text : 'Services'},
            {Link : 'Portfolio', Text : 'Portfolio'},
            {Link : 'About', Text : 'About'},
            {Link : 'Team', Text : 'Team'},
            {Link : 'Contact', Text : 'Contact'},
            {Link : 'Events', Text : 'Events'},
      ],
      events : eventsData
    });
  });

eventRouter.route('/event')
  .get(function(req, res) {
    res.send('Hello Single Event!');
  })

app.use('/Events', eventRouter)

app.get('/', function(req, res) {
  //res.send('Aloha World!');
  res.render('index', {
    list: ['first val', '2nd val', '3rd val'],
    nav: [{Link : 'Services', Text : 'Services'},
          {Link : 'Portfolio', Text : 'Portfolio'},
          {Link : 'About', Text : 'About'},
          {Link : 'Team', Text : 'Team'},
          {Link : 'Contact', Text : 'Contact'},
          {Link : 'Events', Text : 'Events'},
    ]
  });
});

app.get('/routing', function(req, res) {
  res.send('Aloha Routing!');
});

app.listen(port, function(err) {
  console.log('The server is running on port: ' + port);
});
