function html(cards) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <title>My Team Report</title>
            <style>
                .card {
                    min-width: 275px;
                }
            </style>
        </head>
        <body>
            <header>
                <nav class="navbar navbar-dark bg-primary row d-flex justify-content-center">
                    <h1 class="page_header text-white text-center">My Team</h1>
                </nav>
            </header>
            <main class="d-flex justify-content-around flex-wrap p-4">
                ${cards}
            </main>
        
        <nav class="navbar fixed-bottom navbar-dark bg-dark justify-content-center">
            <a class="navbar-brand" href="https://davidyi0529.github.io/Updated-Portfolio_D/">
                <img src="https://github.com/davidyi0529/Portfolio_D/blob/master/assets/images/logo.png?raw=true" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
                Employee-Summary-Template_D
            </a>
        </nav>
        
        </body>
    </html>
`
}

module.exports.html = html;