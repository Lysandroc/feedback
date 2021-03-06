import React from 'react';

export default class DefaultLayout extends React.Component {
  render() {

    const config = {};
    if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'offline') {
      config['manifest'] = "/offline.appcache";
    }

    return (
      <html {...config}>

        <head>
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="description" content="aprenda. desaprenda. reaprenda"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title}</title>

          <meta name="_csrf" content={this.props.csrfToken} />

          <meta name="mobile-web-app-capable" content="yes"/>

          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
          <meta name="apple-mobile-web-app-title" content="Produto Reativo"/>

          <meta name="application-name" content="Feedback from Produto Reativo" />
          <link rel="manifest" href="/assets/manifest.json"/>
          <link rel="icon" href="/assets/images/smile.ico"/>

          <meta name="msapplication-TileColor" content="rgb(255, 235, 59)"/>

          <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en"/>
          <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.yellow-blue.min.css"/>
          <link rel="stylesheet" href="/assets/css/main.css" />

        </head>

        <body>
          {this.props.children}
          <script defer src="/assets/js/material.min.js" />
        </body>
      </html>
    );
  }
}
