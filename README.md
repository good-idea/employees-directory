

URL: https://joseph-thomas-postlight-challenge.netlify.com/employees

## About

- Frontend: Typescript, React, deployed to Netlify
- Backend: GraphQL via Prisma, hosted on Prisma for production, or served locally with Docker.


## Local Development

Run `yarn setup` to initialize a docker Postgres container and initialize all of the Prisma config.

Run `yarn dev` to work locally. Or, in separate terminals, `yarn dev:app` and `yarn dev:server`

👉 *When browsing, type `/sudo` to enter Boss Mode*

### About the build

I had not used Prisma before, and used this as an opportunity to give it a try. I enjoyed it, didn't have too many problems, and look forward to using it in the future. That's about it for the backend.

For the frontend:

 - I used [`xstyled`](https://github.com/smooth-code/xstyled) for the theme. I typically use `styled-components`, but had not explored xstyled yet. The theme itself isn't that great, but it was great to work with and allows for an easy way to switch themes.
 - Otherwise, I wanted to focus on building something that was very modular. The components that make up the Lists go into this.

I ended up spending a little more than 8 hours on this - probably closer to 10 or 11. I wanted to wrap up a couple features, and, of course, there were a handful of deployment / environment bugs to work out at the end. It's not as complete as I was hoping it would be, but I didn't want to go overboard on time spent. If I were to spend more time on this, my next steps would be:

 - Add detailed views for the Employees, Departments, and Offices. These would, of course, be crucial to an actual app like this. I was more interested first in setting up the "directory" pages in a modular way and adding some CRUD functionality. So, please consider this as the first steps in a larger project instead of a "complete" app.
 - Write more tests. (Right now, only the List's sorting feature is tested)
 - Create a general-purpose component for adding entities. Right now, the 'NewThingForm' components are not very DRY. When working, I tend to write "WET" components so I can better explore the edge cases before tightening things up.
 - Add Searching & Pagination to the lists
 - Add a11y attributes

### Bugs

Two bugs you may come across:

 - If you have an empty list of items, the list will not auto-update after you add the first entry. (Once the list is populated, new entries will appear as you add them)
 - I didn't do any error handling for the mutations. Most of the time, you won't have any issues - but, if you try to add an item that causes an error, it fails silently. While goofing around, the only time I saw this was when adding a new Department with a name that already exists.

