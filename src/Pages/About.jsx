import React from 'react'

const About = () => {
  return (
    <>
        <div className="container mx-auto pt-[80px] px-2 flex flex-col gap-2">
          <p>
            A weather app is a software application designed to provide users with real-time or forecasted weather information for a specific location. These apps typically offer a range of features to help users plan their activities based on current and upcoming weather conditions. Here are some common features you might find in a weather app: 
          </p>

          <div>
            <p className="text-lg">
                Current Conditions: 
            </p>
            <p>
                Displaying the current temperature, humidity, wind speed, and other relevant details for a specified location.
            </p>
          </div>
          
        
          <div>
            <p className="text-lg">Forecast:</p> 
              <p>
                Providing weather predictions for the upcoming hours, days, or even weeks. This may include temperature highs and lows, precipitation chances, and other relevant data.
              </p>
          </div>
        
          <div>
            <p className="text-lg">Interactive Maps:</p> 
            <p>Showing weather patterns, radar images, and satellite views to help users visualize current and future weather conditions.</p>
          </div>
          
          <div>
            <p className="text-lg">Alerts and Notifications: </p>
            <p>Sending notifications for severe weather warnings, such as storms, hurricanes, or extreme temperatures, to keep users informed and safe.</p>
          </div>
          
          <div>
            <p className="text-lg">Location-Based Forecasting: </p>
            <p>Allowing users to input or automatically detect their location to receive accurate weather information for their specific area.</p>
          </div>
          
          <div>
            <p className="text-lg">Customization: </p>
            <p>Allowing users to customize the app settings, such as units of measurement (Celsius or Fahrenheit), time format, and preferred weather data sources.</p>
          </div>
          
          <div>
            <p className="text-lg">Weather Widgets: </p>
            <p>Providing widgets that users can add to their device's home screen for quick access to essential weather information.</p>
          </div>
          
          <div>
            <p className="text-lg">Sunrise and Sunset Times: </p>
            <p>Displaying the times when the sun is expected to rise and set.</p>
          </div>
          
          <div>
            <p className="text-lg">Air Quality Index (AQI): </p>
            <p>Including information on air quality, especially relevant for users concerned about pollution levels.</p>
          </div>
          
          <div>
            <p className="text-lg">Weather History: </p>
            <p>Some apps may offer historical weather data, allowing users to review past weather conditions for a specific date and location.</p>
          </div>       
            
        </div>
    </>
  )
}

export default About