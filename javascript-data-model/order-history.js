var orderHistory = [
  // one order //
  {
    orderDate: ['August', '4', '2020'],

    totalPrice: 34.00,

    itemsPurchased: //for every item//
    {
      quantity: 1,
      price: 31.55,
      buyAgain: false,
      reviewItem: false,
      department: [
        'book', {
          title: 'JavaScript for Impatient Programmers',
          author: 'Rauschmayer, Dr. Axel',
        }
      ],
    },

    deliveryDate: ['Aug', '8', '2020'],

    shipTo: {
      fullName: ['JS', 'Masher']
    },

    orderID: '114-3941689-8772232',

    invoice: [
      {
        quantity: 1,
        department: 'books',
        price: 31.55
      }
    ]
  }, //end of first order//

    {
    orderDate: ['July', '19', '2020'],

    totalPrice: 44.53,

    itemsPurchased:
    {
      quantity: 1,
      price: 41.33,
      buyAgain: false,
      reviewItem: false,
      department: [
        'book', {
          title: 'The Timeless Way of Building',
          author: 'Alexander, Christopher',
        }
      ],
    },

    deliveryDate: ['Jul', '20', '2020'],

    shipTo: {
      fullName: ['JS', 'Masher']
    },

    orderID: '114-3941689-8772232',

    invoice: [
      {
        quantity: 1,
        department: 'books',
        price: 41.33
      }
    ]
  },

  {
    orderDate: ['July', '4', '2020'],

    totalPrice: 17.22,

    itemsPurchased:
    {
      quantity: 1,
      price: 15.98,
      buyAgain: false,
      reviewItem: false,
      department: [
        'electronics', {
          description: 'Gamecube controller'
        }
      ],
    },

    deliveryDate: ['Jul', '20', '2020'],

    shipTo: {
      fullName: ['JS', 'Masher']
    },

    orderID: '114-3941689-8772232',

    invoice: [
      {
        quantity: 1,
        department: 'electronics',
        price: 15.98
      }
    ]
  },

  {
    orderDate: ['July', '3', '2020'],

    totalPrice: 138.93,

    itemsPurchased: [
    {
      quantity: 1,
      price: 94.95,
      buyAgain: false,
      reviewItem: false,
      department: [
        'electronics', {
          description: 'Gamecube controller'
        }
      ],
    },
      {
        quantity: 1,
        price: 33.99,
        buyAgain: false,
        reviewItem: false,
        department: [
          'books', {
            title: 'The Art of SQL',
            author: 'Faroult, Stephanie'
          }
        ],
      },
  ],

    deliveryDate: ['Jul', '20', '2020'],

    shipTo: {
      fullName: ['JS', 'Masher']
    },

    orderID: '114-3941689-8772232',

    invoice: [
      {
        quantity: 1,
        department: 'electronics',
        price: 15.98
      }
    ]
  },
];
