# Feedback Website

![Website header]()

Gonna try and keep this short because I don't want to spend too much time on this.

I made this site in 6 hours (now  more) because a friend sometimes likes to send me his bad opinions and I was tired of getting notified of them each time he sent a message.

I decided to take the opportunity to learn about [Astro](https://astro.build) so made the website using this framework. The website is linked to a Postgres backend and features RFC 7617 compliant Basic authentication, fully accessible components, responsive UI, and zero JavaScript.

As the site admin, you have access to the `/admin` endpoint which you can login using the credentials set in `config.yml`. You can then create a one-time code that you can share with someone that will let them submit feedback:

![Website create new code]()

You can set who the feedback is for and who is providing the feedback for a more personalized experience. Once the code is generated, it can be shared to any one person:

![Website code created]()

Using the "Manage Feedback" admin page, you can view a list of all the feedback codes you've generated, including whether they have been responded to and when, or invalidate codes and delete them.

![Website manage feedback]()

The user can either use the provided link, or, if they go to the website and navigate to the "Submit Feedback" link in the navbar, submit the code there.

![Website submit code]()

Once they input a valid code that has not already been used, they will be presented with a textbox with which they can write their feedback.

![Website submit feedback]()

After that, you as the admin can view the response privately in the same Manage Feedback tab.

![Website read feedback]()

As for setup, this uses Node v18 with Astro and a PostgreSQL database. Configure the info for the database in `config.yml`. Simply run `yarn` and `yarn dev` to get a working version. To build, run `yarn build` then run `node dist/server/entry.js` for a production server.

Please change the default login username and password in `config.yml`. Because this uses Basic authentication, **you should never serve this publicly over HTTP.** The user's login credentials are simply Base64 encoded before being sent to the server, so it would be trivial to snoop the request and see if the response indicates a successful login. There is an annoying banner if you try to serve over HTTP other than localhost.

I've done just about everything I've wanted to do for this project, so I'm now putting it on GitHub. Please review the license, but you can just about do whatever you want with it.
