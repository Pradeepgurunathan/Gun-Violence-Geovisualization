# Gun-Violence-Geovisualization
In order to make easier the high-performing Geo based visualization action we choose for DeckGl library. It was built by the group of software people from Uber Visualization Team. In 2016, they launched the version 1 of deck.gl in order to help with the people who wanted to do big visualization on the web. It’s an open source software and the main purpose of this to invite other peoples to use and build on this framework.Deck.gl version4 integrates the supports for advanced geospatial exploration along with new non-spatial visualization capabilities. In addition to that it came up with many demo’s and examples which invited lot of software developers and passionate visualization engineers to use this framework much easier and enabling quicker and more seamless development of Web-GL powered visualizations. This is the main objective of the version5 which we opt to develop our Geo based visualization for Gun Laws dataset US. 
Steps Involved
As mentioned above now Deck.gl acts as a framework independent which means it works on any type of frameworks. Our 3D visualizations images run on a framework called vanilla JavaScript with Webpack. The first and foremost things to start developing this 3D visualization images are to obtain an API key from Google Cloud for Google Maps JS.
We have made use of the below attributes from the United States Gun Violence Dataset:
1.	City_or_County
2.	Longitude
3.	Latitude
4.	n_killed
5.	State
6.	Incident_id
Next major step is setting up of Google maps API Key from below URL. https://developers.google.com/maps/documentation/javascript/get-api-key
After setting up the API key we integrate with our framework. 
Add necessary package and create webpack project:

Install Deck.GL package for our project

Run it
Update the Google Maps API key in the index.html file.

git clone <this-repo> 

npm install
npm start
 


