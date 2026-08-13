export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  excerpt
  date
  coverImage
  format
  youtubeId
  externalUrl
  topics
  featured
  featuredOrder
  draft
  author {
    __typename
    name
    picture
  }
  body
}
    `;
export const TeamPartsFragmentDoc = gql`
    fragment TeamParts on Team {
  __typename
  name
  picture
  twitter
  linkedIn
  order
  body
}
    `;
export const InvestmentPartsFragmentDoc = gql`
    fragment InvestmentParts on Investment {
  __typename
  name
  picture
  site
  description
  order
}
    `;
export const PeoplePlacePartsFragmentDoc = gql`
    fragment PeoplePlaceParts on PeoplePlace {
  __typename
  title
  image
  alt
  location
  caption
  order
}
    `;
export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  title
  body
}
    `;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const TeamDocument = gql`
    query team($relativePath: String!) {
  team(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TeamParts
  }
}
    ${TeamPartsFragmentDoc}`;
export const TeamConnectionDocument = gql`
    query teamConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TeamFilter) {
  teamConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TeamParts
      }
    }
  }
}
    ${TeamPartsFragmentDoc}`;
export const InvestmentDocument = gql`
    query investment($relativePath: String!) {
  investment(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...InvestmentParts
  }
}
    ${InvestmentPartsFragmentDoc}`;
export const InvestmentConnectionDocument = gql`
    query investmentConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: InvestmentFilter) {
  investmentConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...InvestmentParts
      }
    }
  }
}
    ${InvestmentPartsFragmentDoc}`;
export const PeoplePlaceDocument = gql`
    query peoplePlace($relativePath: String!) {
  peoplePlace(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PeoplePlaceParts
  }
}
    ${PeoplePlacePartsFragmentDoc}`;
export const PeoplePlaceConnectionDocument = gql`
    query peoplePlaceConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PeoplePlaceFilter) {
  peoplePlaceConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PeoplePlaceParts
      }
    }
  }
}
    ${PeoplePlacePartsFragmentDoc}`;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    team(variables, options) {
      return requester(TeamDocument, variables, options);
    },
    teamConnection(variables, options) {
      return requester(TeamConnectionDocument, variables, options);
    },
    investment(variables, options) {
      return requester(InvestmentDocument, variables, options);
    },
    investmentConnection(variables, options) {
      return requester(InvestmentConnectionDocument, variables, options);
    },
    peoplePlace(variables, options) {
      return requester(PeoplePlaceDocument, variables, options);
    },
    peoplePlaceConnection(variables, options) {
      return requester(PeoplePlaceConnectionDocument, variables, options);
    },
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/472c06c9-9cdc-4a67-9a59-131a130e54ff/github/modernize-tinacms",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
