  const colors = require('tailwindcss/colors');
  module.exports = {
  	purge: [],
  	darkMode: false, // or 'media' or 'class'

  	theme: {
  		extend: {

  			fontFamily: {
  				'sans': ['"Noto Sans JP"', 'sans-serif', 'Arial', 'ui-sans-serif', 'system-ui'],
  			},

  			colors: {
  				blueviolet: colors.blueviolet,
  				orchid: colors.orchid,
  			},


  			animation: {
  				'ping-10': 'ping 3s cubic-bezier(0, 0, 0.4, 1) infinite',
  				'ping-20': 'ping 5s cubic-bezier(0, 0, 0.4, 1) infinite',
  				'ping-30': 'ping 10s cubic-bezier(0, 0, 0.4, 1) infinite',

  			},
  			zIndex: {
  				'9': 9,
  				'99': 99,
  				'999': 999,
  				'9999': 9999,
  			},
			
		backgroundImage: theme => ({
         'vision': "url('../images/young-attractive-woman-using-phone.jpg')",
         'blog': "url('../images/Component-2-1@2x.png')",
        }),



  			 
  		},
  	},
  	variants: {
  		extend: {},
  	},
  	plugins: [
	//require('@tailwindcss/forms'),  

  ],
  }
