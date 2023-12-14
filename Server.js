const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ldap = require('ldapauth-fork');

async function userLoginAsync(login) {
  const ldapServer = '10.10.3.169:389';
  const ldapBaseDN = 'DC=BRITAMGROUP,DC=COM';
  const ldapDomain = 'BRITAMGROUP.COM';
  const username = login.UserName;
  const password = login.Password;

  const ldapOptions = {
    url: ldapServer,
    bindDN: 'CN=mailregistry,OU=Users,OU=IT,OU=BRITAM KENYA,DC=BRITAMGROUP,DC=COM',
    bindCredentials: '@MailPwd2023',
    searchBase: ldapBaseDN,
    searchFilter: `(sAMAccountName=${username})`,
    reconnect: true,
    // Include the domain information if required by your LDAP setup
    // domain: ldapDomain, // You can include domain if needed
  };

  let ldapClient;

  try {
    ldapClient = ldap.createClient(ldapOptions);

    await bindLDAP(ldapClient, username, password);

    // Proceed with your logic here
    // Example: Redirect to different pages based on the user

    return 'Authentication successful';
  } catch (error) {
    throw new Error('Authentication failed. Please check your credentials.');
  } finally {
    if (ldapClient) {
      ldapClient.unbind();
    }
  }
}

function bindLDAP(client, username, password) {
  return new Promise((resolve, reject) => {
    client.bind(username, password, (err) => {
      if (err) {
        reject(new Error(`Authentication failed: ${err.message}`));
      } else {
        resolve();
      }
    });
  });
}

// Handle POST requests to '/login'
app.post('/login', async (req, res) => {
  const loginInfo = req.body; // Retrieve username and password from the request body

  try {
    const result = await userLoginAsync(loginInfo);
    res.status(200).send(result); // Send a success response if authentication is successful
  } catch (error) {
    res.status(401).send(error.message); // Send an error response if authentication fails
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
