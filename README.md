# [Live Demo](https://mmhmm-books-egeste.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# mmhmm web take home challenge

For this take home challenge, you'll be building a React app to manage the books on your bookshelf. Even though we don't sell books at mmhmm (yet), displaying content in cards like this is surprisingly similar to how we display video thumbnails.

## So here's the (fake) situation

A designer on the team sent over this [Figma doc](https://www.figma.com/file/OwTYneXwIbbOYEuNtJYHln/All-Turtles-Web-Dev-Pairing-Interview?node-id=511%3A93) and was told that we needed a frontend implementation of the design ASAP. The good news is a basic design and a v1 backend API are ready to start working with, and we just need to get a React app up and running. The bad news is we only have a few hours until we want to show the team a working demo.

## Let's get started

With the tight deadline, we don't want this to take more than 2 hours. Get as much done as you can within 2 hours and don't spend all day on it. If you don't finish, it's totally okay (you can show what you've got).

Diving in, go ahead and do the following:

- Create a new public GitHub repository and name it `mmhmm-books-<your-gh-username>`.
- Spin up a React boilerplate / framework of your choosing. FYI, we love Next and Typescript so try something like `create-next-app` out if you have experience with it.

## Show me the data!

Now that you've got the boilerplate set up, let's check out the API the backend team has in place.

The base URL of the API is `https://us-central1-all-turtles-interview.cloudfunctions.net`. Since we're just putting together a prototype here, there's a really basic authentication format: use an `Authorization` header with just your first and last name appended to each other (i.e. `alicesmith`).

Looks like we've got 3 different CRUD operations for the `/books` endpoint:

### `GET /books`

Returns an array of book objects.

```
[
  {
    "id": String,
    "description": String,
    "imageUrl": String,
    "author": String,
    "title": String
  }
]
```

### `POST /books`

Adds a new book to the database and returns the updated list of books.
The request should have the content-type header set to `application/json`.
The API accepts a book object as the request body.

```
body: {
  "description": String,
  "imageUrl": String,
  "author": String,
  "title": String
}
```

When testing, use `https://picsum.photos/125/200` as the `imageUrl`.

### `DELETE /books/:bookId`

Removes a book from the database.
Returns the updated list of books.

## The bare bones spec

The PM Slacked over a quick bulleted spec list along with the designs.

- The index route should render the list of books and an `Add book` button.
- The `Add book` button should bring up a form to add a new book.
- The form should have 4 fields, "title", "author", "description", and "imageUrl" (see design).
- Submitting the form should add a new book to the database.
- Use the [design file](https://www.figma.com/file/OwTYneXwIbbOYEuNtJYHln/All-Turtles-Web-Dev-Pairing-Interview?node-id=511%3A93) and try your best to match it.

It's not much, but it rarely is in startup land! Do your best with what we've got here and we can always update things after we show the team the working prototype.

P.S. - the rest of the eng team loves to review code so use helpful commit messages so we can look back at them as the project progresses. Everyone also enjoys playing with a live demo so if you ended up using Next, include the public URL in a README!

## Demo time

Once you've completed the challenge, record a quick video demoing the app. The video should be less than 10 minutes and should speak to the following things:

- Share your screen and walk through both the final product and the code you wrote. Make sure to discuss your thought process on decisions you made along the way.
- Did you run into any issues? Explain any hangups and what you did to get around them.
- If you owned this project, what else would you add to it to make it even better?

Don't worry about the production quality of your video at all, this is just for us to get a sense of how you communicate asynchronously (since we're all over the place!). We'd recommend using something like mmhmm, Zoom, screenapp.io, or any other easy recording tool to make the video. And by no means is it a requirement to have your face in the frame... we'll see you in the debrief either way!

## You're done! On to the review crew...

Send us over the finished project repo and your video. You can put everything in one place (like in the GH repo README) or have multiple links, either is fine. Just make sure everything is public so we can have the team look through it without needing a password.

Once we get your completed test repo and recording, we'll schedule a debrief to go over everything. This will be with some engineers on the team that you'd be working with day-to-day This panel interview will be used to ask any followup questions to your take home, but will also dive deeper into your engineering knowledge.

## Good luck!

These are all the instructions we've got, so do your best to fill in the blanks however you want! We look forward to debriefing synchronously soon.
