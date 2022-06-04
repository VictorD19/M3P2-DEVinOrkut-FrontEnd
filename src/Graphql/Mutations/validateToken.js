import { gql } from "@apollo/client";

export const VALIDATE_TOKEN = gql`
  mutation ValidatedToken($token: String!) {
    validatedToken(token: $token) {
      token
      user {
        id
        fullName
        email
        friendRequest {
          id
          fullName
        }
        communities
        friends {
          id
          fullName
          imageUrl
        }
      }
    }
  }
`;
