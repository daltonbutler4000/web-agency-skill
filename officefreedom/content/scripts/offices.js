/////////////////////// OFFICES PLACES //////////////////////////

let places = {
  offices: [ {
        id: 1,
        url: '/BusinessCenter.html',
        company: 'WeWork',
        companyUrl: '#',
        title: "Berkeley Square House, Berkeley Square, Mayfair",
        picture: [
          { src: "./content/images/major-office-3.jpg" },
          { src: "./content/images/major-office-2.jpg" },
          { src: "./content/images/major-office-4.jpg" }
        ], 
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Showers' },
          { feature: 'Gym' },
          { feature: 'Cycle Rack' },
        ],
        premium: true,
        hasVideo: true,
        station: true,
        details: 'W1J • London • The Argyll Club • Ref 565',
        directionFrom: "Bank Station (2 mins)",
        directionTo: "St Pauls Station (4 mins)",
        price: "454",
        direction: 'Old Street Station (3 mins)',
        lat: 51.55422, 
        lng: -0.213752
      },
      {
        id: 2,
        url: '/BusinessCenter.html',
        company: 'Fora',
        companyUrl: '#',            
        title: "The Spire, Mayfair",
        picture: [
          { src: "./content/images/major-office-6.jpg" },
          { src: "./content/images/major-office-8.jpg" },
          { src: "./content/images/major-office-11.jpg" }
        ], 
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Showers' },
          { feature: 'Cycle Rack' },
          { feature: 'Reception' },
        ],  
        premium: false,
        oneMonth: false,
        hasVideo: true, 
        station: true,  
        details: 'W1J • London • Ref 565',
        directionFrom: "Oxford Street (11 mins)",
        directionTo: "St Pauls (6 mins)",
        saved: true,        
        price: "343",
        direction: 'Bank Station (3 mins)',
        lat: 51.54222, 
        lng: -0.228752
      },
      {
        id: 3,
        url: '/BusinessCenter.html',
        company: 'Regus',
        companyUrl: '#',
        title: "Google Campus, Mayfair",
        picture: [
          { src: "./content/images/major-office-9.jpg" },
          { src: "./content/images/major-office-3.jpg" },
          { src: "./content/images/major-office-8.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Showers' },
          { feature: 'Gym' },
          { feature: 'Cycle Rack' },
        ], 
        premium: false,
        hasVideo: false, 
        station: true, 
        details: 'W1J • London • Uncommon • Ref 5464',
        directionFrom: "Bank Station (2 mins)",
        directionTo: "St Pauls Station (4 mins)",
        saved: false,  
        price: "£766",
        direction: 'Bank Station (5 mins)',
        lat: 51.56922, 
        lng: -0.210752
      },
      {
        id: 4,
        url: '/BusinessCenter.html',
        company: 'WeWorkGroup',
        companyUrl: '#',
        title: "Berkeley Square, Mayfair",
        picture: [
          { src: "./content/images/major-office-7.jpg" },
          { src: "./content/images/major-office-5.jpg" },
          { src: "./content/images/major-office-8.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Gym' },
          { feature: 'Cycle Rack' },
          { feature: 'Reception' },
        ], 
        premium: true,
        hasVideo: false, 
        station: true,   
        details: 'W1J • London • The Argyll Club • Ref 565',
        directionFrom: "Holborn (6 mins)",
        directionTo: "St Pauls (9 mins)",
        price: "£653",
        direction: 'Bank Station (5 mins)',
        lat: 51.55922, 
        lng: -0.216752
      },
      {
        id: 5,
        url: '/BusinessCenter.html',
        company: 'TOG',
        companyUrl: '#',
        title: "Mason Avenue, Shoreditch",
        picture: [
          { src: "./content/images/major-office-8.jpg" },
          { src: "./content/images/major-office-2.jpg" },
          { src: "./content/images/major-office-3.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Gym' },
          { feature: 'Cycle Rack' },
          { feature: 'Reception' },
        ], 
        premium: false,
        hasVideo: false, 
        station: true,   
        details: 'W1J • London • LEO • Ref 56334',
        directionFrom: "Bank Station (2 mins)",
        directionTo: "St Pauls Station (4 mins)",
        price: "£654",
        direction: 'Highbury & Islington (7 mins)',
        lat: 51.53922, 
        lng: -0.206752
      },
      {
        id: 6,
        url: '/BusinessCenter.html',
        company: 'Uncommon',
        companyUrl: '#',
        title: "Brampton Court, Mayfair",
        picture: [
          { src: "./content/images/major-office-13.jpg" },
          { src: "./content/images/major-office-2.jpg" },
          { src: "./content/images/major-office-3.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Gym' },
          { feature: 'Reception' },
          { feature: 'Breakout Area' },
        ], 
        premium: false,
        hasVideo: false, 
        station: true,   
        details: 'W1J • London • The Office Group • Ref 5466',
        directionFrom: "Barbican (7 mins)",
        directionTo: "Bank (3 mins)",
        price: "£323",
        direction: 'Bank Station (3 mins)',
        lat: 51.54925, 
        lng: -0.216752
      },
      {
        id: 7,
        url: '/BusinessCenter.html',
        company: 'Leo',
        companyUrl: '#',
        title: 'Northumberland Avenue, Mayfair',
        picture: [
          { src: "./content/images/major-office-11.jpg" },
          { src: "./content/images/major-office-2.jpg" },
          { src: "./content/images/major-office-3.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Gym' },
          { feature: 'Reception' },
          { feature: 'Weekly Events' },
        ], 
        premium: false,
        hasVideo: false, 
        station: true,  
        details: 'W1J • London • The Argyll Club • Ref 565',
        directionFrom: "St Pauls (4 mins)",
        directionTo: "Bank (8\ mins)",
        saved: false,   
        price: "£459",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.56222, 
        lng: -0.226652
      },
      {
        id: 8,
        url: '/BusinessCenter.html',
        company: 'Leo',
        companyUrl: '#',
        title: "Oxford House Shoreditch",
        picture: [
          { src: "./content/images/major-office-15.jpg" },
          { src: "./content/images/major-office-2.jpg" },
          { src: "./content/images/major-office-3.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Gym' },
          { feature: 'Reception' },
          { feature: 'Weekly Events' },
        ], 
        premium: false,
        hasVideo: false, 
        station: true,   
        details: 'W1J • London • The Argyll Club • Ref 565',
        directionFrom: "Bank Station (2 mins)",
        directionTo: "St Pauls Station (4 mins)",
        price: "£467",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55272, 
        lng: -0.246752
      },
      {
        id: 9,
        url: '/BusinessCenter.html',
        company: 'Leo',
        companyUrl: '#',
        title: "Oxford House Shoreditch",
        picture: [
          { src: "./content/images/major-office-14.jpg" },
          { src: "./content/images/major-office-2.jpg" },
          { src: "./content/images/major-office-3.jpg" }
        ],  
        features: [
          { feature: 'Meeting Rooms' },
          { feature: 'Gym' },
          { feature: 'Reception' },
          { feature: 'Weekly Events' },
        ], 
        premium: false,
        hasVideo: false, 
        railyStation: true,   
        station: true,  
        details: 'W1J • London • The Argyll Club • Ref 565',
        directionFrom: "St Pauls (4 mins)",
        directionTo: "Bank (8\ mins)",
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.53222, 
        lng: -0.223652
    },
    // {
    //   id: 10,
    //   url: '/BusinessCenter.html',
    //   company: 'Adam',
    //   companyUrl: '#',
    //   title: "Test Adam",
    //   picture: [
    //     { src: "./content/images/major-office-14.jpg" },
    //     { src: "./content/images/major-office-2.jpg" },
    //     { src: "./content/images/major-office-3.jpg" }
    //   ],  
    //   features: [
    //     { feature: 'Meeting Rooms' },
    //     { feature: 'Gym' },
    //     { feature: 'Reception' },
    //     { feature: 'Weekly Events' },
    //   ], 
    //   premium: false,
    //   hasVideo: false, 
    //   railyStation: true,   
        //     directionFrom: "Bank Station (2 mins)",
        // directionTo: "St Pauls Station (4 mins)",
    //   price: "£559",
    //   direction: 'Charring Cross Station (10 mins)',
    //   lat: 51.8927182, 
    //   lng: 21.0021679
    // },
    // {
    //   id: 11,
    //   url: '/BusinessCenter.html',
    //   company: 'Adam 2',
    //   companyUrl: '#',
    //   title: "Test Adam 2",
    //   picture: [
    //     { src: "./content/images/major-office-14.jpg" },
    //     { src: "./content/images/major-office-2.jpg" },
    //     { src: "./content/images/major-office-3.jpg" }
    //   ],  
    //   features: [
    //     { feature: 'Meeting Rooms' },
    //     { feature: 'Gym' },
    //     { feature: 'Reception' },
    //     { feature: 'Weekly Events' },
    //   ], 
    //   premium: false,
    //   hasVideo: false, 
    //   railyStation: true,   
        //     directionFrom: "Bank Station (2 mins)",
        // directionTo: "St Pauls Station (4 mins)",
    //   price: "£559",
    //   direction: 'Charring Cross Station (10 mins)',
    //   lat: 51.9927182, 
    //   lng: 21.9021679
    // }
  ]
};

export {places};
