var React = require('react');


// Stateless dont maintaint any state
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application buid on React</p>
      <p>Here a some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I Used Open Weather map
            to Search for weather data by city name.
        </li>
      </ul>

    </div>

  )
}

module.exports = About;
