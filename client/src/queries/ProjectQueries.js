import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

const GET_CLIENT_PROJECTS = gql`
  query getClientProjects($id: ID!) {
    clientProjects(id: $id) {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT, GET_CLIENT_PROJECTS };
