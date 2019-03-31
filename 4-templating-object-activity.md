render this data onto a page named drinks.ejs in the pages folder

	if the rating is greater than 3 give the drink a background color of green

	if the rating is 3 make it yellow

	if the rating is below 3 then make it red

have a route named /drinks that renders drinks.ejs and mixes it with the following object

{
	data: [
		{
			drink: 'cinnamon peach black tea',
			rating: 3,
			sugar: '15g',
			calories: 70
		},
		{
			drink: 'harmless coconut water',
			rating: 5,
			sugar: '10g',
			calories: 150
		},
		{
			drink: 'philz philharmonic',
			rating: 5,
			sugar: '25g',
			calories: 600
		},
		{
			drink: 'sprite',
			rating: 2,
			sugar: '40g',
			calories: 150
		},
	]
}