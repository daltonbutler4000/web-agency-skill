/////////////////////// OFFICES PLACES //////////////////////////

let places_mp = {
  offices: [ {
        id: 1,
        url: '/BusinessCenter.html',
        company: 'WeWork',
        companyUrl: '#',
        title: "25 Dover Court, Shoreditch",
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
        price: "£654",
        direction: 'Old Street Station (3 mins)',
        lat: 51.55422, 
        lng: -0.213752
      },
      {
        id: 2,
        url: '/BusinessCenter.html',
        company: 'Fora',
        companyUrl: '#',            
        title: "The Spire, Shoreditch",
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
        saved: true,        
        price: "£544",
        direction: 'Bank Station (3 mins)',
        lat: 51.54222, 
        lng: -0.228752
      },
      {
        id: 3,
        url: '/BusinessCenter.html',
        company: 'Regus',
        companyUrl: '#',
        title: "The Spire, Shoredtich",
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
        saved: false,  
        price: "£671",
        direction: 'Bank Station (5 mins)',
        lat: 51.56922, 
        lng: -0.210752
      },
      {
        id: 4,
        url: '/BusinessCenter.html',
        company: 'WeWorkGroup',
        companyUrl: '#',
        title: "24 Broadgate Street, Shoreditch",
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
        price: "£551",
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
        station2: true,   
        price: "£661",
        direction: 'Highbury & Islington (7 mins)',
        lat: 51.53922, 
        lng: -0.206752
      },
      {
        id: 6,
        url: '/BusinessCenter.html',
        company: 'Uncommon',
        companyUrl: '#',
        title: "Google Campus, Shoreditch",
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
        price: "£459",
        direction: 'Bank Station (3 mins)',
        lat: 51.54925, 
        lng: -0.216752
      },
      {
        id: 7,
        url: '/BusinessCenter.html',
        company: 'Leo',
        companyUrl: '#',
        title: 'Oxford House Shoreditch',
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
        railyStation: true,  
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.53222, 
        lng: -0.223652
    },
    {
        id: 10,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.54252, 
        lng: -0.233652
    },
    {
        id: 11,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.54452, 
        lng: -0.233672
    },
    {
        id: 12,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 52.54452, 
        lng: -0.333672
    },
    {
        id: 13,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.56452, 
        lng: -0.333772
    },
    {
        id: 14,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 52.44652, 
        lng: -0.133372
    },
    {
        id: 15,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55902, 
        lng: -0.216762
    },
    {
        id: 16,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55912, 
        lng: -0.216722
    },
    {
        id: 17,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55922, 
        lng: -0.216772
    },
    {
        id: 18,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55932, 
        lng: -0.216722
    },
    {
        id: 19,
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55942, 
        lng: -0.216792
    },
    {
        id: 20,
        url: '/BusinessCenter.html',
        company: 'Beo',
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
        price: "£559",
        direction: 'Charring Cross Station (10 mins)',
        lat: 51.55952, 
        lng: -0.216702
    },
  ]
};

export {places_mp};
