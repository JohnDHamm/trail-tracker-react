export default function() {

	return {
		weather: 'Partly Cloudy',
		icon_url: 'http://icons-ak.wxug.com/i/c/f/partlycloudy.gif',
		temp_f: 82.5,
		feelslike_f: 97.0,
		precip_today_in: '0.05',
		radarUrl: '/src/img/weatherTest.gif',
		forecastday: [
			{
				date:{
					weekday:"Wednesday"
				},
				high: {
					fahrenheit: "91"
				},
				low: {
					fahrenheit: "72"
				},
				conditions: "Partly Cloudy",
				icon_url: "http://icons.wxug.com/i/c/f/partlycloudy.gif",
				qpf_allday: {
					in: 0.08
				},
				avehumidity: 46
			},
			{
				date:{
					weekday: "Thursday",
				},
				high: {
					fahrenheit: "90",
				},
				low: {
					fahrenheit: "69",
				},
				conditions: "Thunderstorm",
				icon_url: "http://icons.wxug.com/i/c/f/tstorms.gif",
				qpf_allday: {
					in: 0.39
				},
				avehumidity: 66
			},
			{
				date:{
					weekday: "Friday"
				},
				high: {
					fahrenheit: "92"
				},
				low: {
					fahrenheit: "71"
				},
				conditions: "Partly Cloudy",
				icon_url: "http://icons.wxug.com/i/c/f/partlycloudy.gif",
				qpf_allday: {
					in: 0.11
				},
				avehumidity: 63
			},
			{
				date:{
					weekday: "Saturday"
				},
				high: {
					fahrenheit: "93"
				},
				low: {
					fahrenheit: "74"
				},
				conditions: "Chance of a Thunderstorm",
				icon_url: "http://icons.wxug.com/i/c/f/chancetstorms.gif",
				qpf_allday: {
					in: 0.04
				},
				avehumidity: 60
			}
		]
	}
}




