import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../apollo/client";
import { ListBooks } from "../graphql/queries";

const Index = () => {
  const { data } = useQuery(ListBooks);
  return (
    <div>
      {data.books.map((book, idx) => (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ListBooks,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
