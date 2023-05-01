# 🌽 Kernel Technical Test

 - [Requirements](https://usekernel.notion.site/Kernel-Technical-Test-e9ce4823f8d44eef83e90d74597fb246)
 - Deployed app: https://stalwart-pasca-68795e.netlify.app/

## Built with
- [Final Space API](https://finalspaceapi.com/) - A RESTful API based on the animated television show Final Space
- [Vite](https://vitejs.dev/) – Build tool
- TypeScript – For project type-safety
- [TanStack Query](https://tanstack.com/query/v4/docs/react/overview) - For fetching and managing data
- [Chakra UI](https://chakra-ui.com/) - A simple Component Library that works well with React


## To run
Clone down this repo and run a preview of the built app:
```
npm run preview
```
## Screenshot
![Screenshot](public/2023-04-30_18-06-45.png)

## Approach

Given the time constraints I tried to approach the task in a pragmatic way whilst still offering a functional and performant app.

Firstly, I read the documentation on the First Space API and then tested the available endpoints in Postman. 

I used Vite for the build tool to begin creating the app. I chose this for it's speed, native ES module support and Hot Module Replacement capabilities.

I decided to use TanStack Query (aka React Query) as I've had _some_ previous experience with this library and thought I'd take the opportunity to familiarise myself with the latest version.

I considered implementing an infinite scroll UI pattern for pagination, however,  as the response from both the `/episode`  and  `/character` endpoints is finite and unlikely to grow in size I used a single get request to return all episodes from the `/episode` endpoint and paginate this data client-side. The query params and response data on the endpoints are pretty minimal and didn't provide an easy way for server-side pagination.

I made use of the `useQueries` hook to dynamically execute the required number of `/character` queries per episode in parallel. As the data is unlikely to change I increased the default `staleTime` and `cacheTime` of the app globally to minimise refetching the data.

For speed, for creating and styling the UI I opted to make use of the Chakra UI component libray. Consideration is given for the app rendering (reasonably) well responsively.

Testing for this app was manual given the time constraints. Typically I would add unit (Jest and/or RTL) and e2e testing (Cypress). I also tested cross browser (Chrome, Safari and Firefox).
