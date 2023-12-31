import  Header from "./components/Header.jsx";
import Clients from "./components/Clients.jsx"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div classname="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
