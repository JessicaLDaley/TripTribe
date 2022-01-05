import { gql } from "@apollo/client";

// this is a basic user query, there are a lot more fields available for query
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      tripCount
      trips {
        _id
        tripName
        tripDestination
        tripCoordinates
      }
      companionCount
      companions {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      companionCount
      companions {
        _id
        username
        email
      }
      tripCount
      trips {
        _id
        tripName
        tripDetails
        tripDestination
        tripCoordinates
        tripDeparture
        tripReturn
        companionCount
        tripCompanions {
          _id
          username
          email
        }
        commentCount
        tripComments {
          _id
          commentText
          username
          createdAt
        }
        placesCount
        placesToSee {
          _id
          tripName
          username
          createdAt
        }
        pictureCount
        pictureAlbum {
          pictureId
          tripName
          username
          createdAt
        }
      }
    }
  }
`;

