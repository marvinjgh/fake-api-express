let users = [];
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.awGhRs6fA7cGxHQ5zuFMUEuOiA6cpKk7XLO4AO74RhA";

const print = (...args) => console.log(...args);

function auth(urlParams, qsParams, bodyParams) {
  
  let user = users.find(
    (user) =>
      user.email == bodyParams.email && user.password == bodyParams.password
  );
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "email not register" }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      user,
      token,
    }),
  };
}

function registe(urlParams, qsParams, bodyParams) {
  print(1);
  if (users.includes((user) => user.username == bodyParams.username)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "username a ready used" }),
    };
  }

  users.push(bodyParams);

  return {
    statusCode: 201,
    body: JSON.stringify({
      user: bodyParams,
      token,
    }),
  };
}

export default [
  {
    request: {
      method: "POST",
      path: "/api/auth",
    },
    response: auth,
  },
  {
    request: {
      method: "POST",
      path: "/api/register",
    },
    response: registe,
  },
];
