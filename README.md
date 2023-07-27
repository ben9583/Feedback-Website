# Feedback Website

![Website header](https://github.com/ben9583/Feedback-Website/assets/16968917/c07ead4e-5b52-4206-a516-8c05681719e8)

Gonna try and keep this short because I don't want to spend too much time on this.

I made this site in 6 hours (now  more) because a friend sometimes likes to send me his bad opinions and I was tired of getting notified of them each time he sent a message.

I decided to take the opportunity to learn about [Astro](https://astro.build) so made the website using this framework. The website is linked to a Postgres backend and features RFC 7617 compliant Basic authentication, fully accessible components, responsive UI, and zero JavaScript.

As the site admin, you have access to the `/admin` endpoint which you can login using the credentials set in `config.yml`. You can then create a one-time code that you can share with someone that will let them submit feedback:

![Website create new code](https://github.com/ben9583/Feedback-Website/assets/16968917/1502481a-6a5b-418f-8ef1-ff8f5f5ce2c2)

You can set who the feedback is for and who is providing the feedback for a more personalized experience. Once the code is generated, it can be shared to any one person:

![Website code created](https://github.com/ben9583/Feedback-Website/assets/16968917/c60cb3eb-82d9-4116-90e7-6314c58b56a5)

Using the "Manage Feedback" admin page, you can view a list of all the feedback codes you've generated, including whether they have been responded to and when, or invalidate codes and delete them.

![Website manage feedback](https://github.com/ben9583/Feedback-Website/assets/16968917/ee9952cc-53a4-4dc5-ab6e-c83a74139888)

The user can either use the provided link, or, if they go to the website and navigate to the "Submit Feedback" link in the navbar, submit the code there.

![Website submit code](https://github.com/ben9583/Feedback-Website/assets/16968917/32409a92-1dee-4dae-9c7d-eebf8eeb56a3)

Once they input a valid code that has not already been used, they will be presented with a textbox with which they can write their feedback.

![Website submit feedback](https://github.com/ben9583/Feedback-Website/assets/16968917/10c648fb-2866-466b-89f8-efd6eae7d34e)

![Website feedback written](https://github.com/ben9583/Feedback-Website/assets/16968917/d0e428de-e624-4d65-9352-b4b06d7c0f42)

After that, you as the admin can view the response privately in the same Manage Feedback tab.

![Website read feedback](https://github.com/ben9583/Feedback-Website/assets/16968917/dc342872-a38b-44c8-959d-a39e4eb60821)

As for setup, this uses Node v18 with Astro and a PostgreSQL database. Configure the info for the database in `config.yml`. Simply run `yarn` and `yarn dev` to get a working version. To build, run `yarn build` then run `node dist/server/entry.js` for a production server.

Please change the default login username and password in `config.yml`. Because this uses Basic authentication, **you should never serve this publicly over HTTP.** The user's login credentials are simply Base64 encoded before being sent to the server, so it would be trivial to snoop the request and see if the response indicates a successful login. There is an annoying banner if you try to serve over HTTP other than localhost.

I've done just about everything I've wanted to do for this project, so I'm now putting it on GitHub. Please review the license, but you can just about do whatever you want with it.
