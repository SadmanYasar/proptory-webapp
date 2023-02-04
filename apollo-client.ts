// IMPORTANT
// TO ACCESS OTHER LINKS, COMMERCIAL LICENSE IS REQUIRED

// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//     uri: "https://api.matterport.com/api/models/graph",
// });

// const authLink = setContext((_, { headers }) => {
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             ...headers,
//             authorization: `Basic ${process.env.MATTERPORT_TOKEN_ID} : ${process.env.MATTERPORT_API_SECRET}`,
//         }
//     }
// });

// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// });
// export default client;

export { }