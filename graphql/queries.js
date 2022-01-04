import gql from "graphql-tag";

const ListBooks = gql`
  query ListBooks {
    books {
      title
      author
    }
  }
`;

export { ListBooks };
