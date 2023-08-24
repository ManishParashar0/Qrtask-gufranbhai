<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Sheets API Example</title>
    <script src="https://apis.google.com/js/api.js"></script>
    <script>
        // Load the Google Sheets API
        gapi.load('client', start);

        // Initialize the Google Sheets API
        function start() {
            gapi.client.init({
                apiKey: 'YOUR_API_KEY',
                discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            }).then(function() {
                // Call the function to fetch and process the data
                getDataFromSheet();
            });
        }

        function getDataFromSheet() {
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: 'YOUR_SPREADSHEET_ID',
                range: 'Sheet1' // Replace with the actual sheet name
            }).then(function(response) {
                var data = response.result.values;
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var timestamp = data[i][0];
                        var email = data[i][1];
                        var name = data[i][2];
                        var phoneNumber = data[i][3];

                        // Process the data (e.g., display it on the page)
                        console.log(`Timestamp: ${timestamp}, Email: ${email}, Name: ${name}, Phone Number: ${phoneNumber}`);
                    }
                } else {
                    console.log('No data found.');
                }
            }, function(response) {
                console.error('Error fetching data:', response.result.error.message);
            });
        }
    </script>
</head>
<body>
    <!-- Display the retrieved data on the page if needed -->
</body>
</html>
