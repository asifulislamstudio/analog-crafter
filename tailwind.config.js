/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fslider': "url('https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg')",
        'sslider': "url('https://cdn.pixabay.com/photo/2012/11/07/02/07/jugs-64975_640.jpg')",
        'tslider' : "url('https://cdn.pixabay.com/photo/2019/10/20/16/57/loom-4564223_640.jpg')"
      },
      fontFamily: {
        'primary-font': "'Open Sans', 'serif",
        'secondary-font': "'Poppins', 'serif'"
      },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

