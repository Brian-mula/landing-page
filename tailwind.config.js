module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors:{
        "nextinvention-purple":"#5267DF",
        "nextinvention-red":"#FA5959",
        "nextinvention-blue":"#242A45",
        "nextinvention-grey":"#9194A2",
        "nextinvention-white":"#f7f7f7"

      }
    },
    fontFamily:{
      Poppins:['Poppins,sans-serif']
    },
    container: {
      center: true,
      padding:"1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    },
  },
  plugins: [],
}
