const axios = require('axios');
const { Buffer } = require('buffer');
const fs = require('fs');
const converter = require('json-2-csv');

const apiID = '24898b290d8f892eae993aa4fb5e4fff';
const apiToken = '6bd69dc3aeb32a276b00c5a4b9607723';

/* random string */
function randomString() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 10; i++ ) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

/* json to csv */
async function transformJSON(jsonArray) {
  return await converter.json2csvAsync(jsonArray);
};

async function aircallAPI(method,object,body,identifier) {
  let url = 'https://api.aircall.io/v1/'+object;
  const authorization = Buffer.from(apiID+':'+apiToken).toString('base64');
  let config = {
    method: method,
    url: url,
    headers: { 
      Authorization: `Basic ${authorization}`,
      'Content-Type': 'application/json' 
    }
  };
  if(method === 'GET') {
    if(identifier != null) config.url += '/' + identifier;
    config.url += '?per_page=50';
  };
  if(method === 'POST') config.data = body;
  if(method === 'PUT') {
    config.data = body;
    config.url += '/' + identifier;
  };
  if(method === 'DELETE') config.url += '/' + identifier;
  try {
    const response = await axios(config);
    const data = response.data;
    if(object.indexOf('/') != -1) object = object.substring(0,object.indexOf('/'));
    let totalItems = data[object];
    if(method === 'GET') {
      let nextPage = data.meta.next_page_link;
      if(nextPage!= null) {
        do {
          config.url = data.meta.next_page_link + '?per_page=50';
          const nextItems = await axios(config);
          totalItems.push(nextItems.data[object]);
          nextPage = nextItems.data.meta.next_page_link || null;
        } while(nextPage !== null);  
      };
      const csvData = await transformJSON(totalItems);
      fs.writeFileSync(__dirname+'/'+object+'.csv',csvData);
      console.log(`file created: ${__dirname+'/'+object+'.csv'}`)
    };
    return console.log(`done: ${method} ${url} with status code: ${response.status}`);
  } catch (error) {
    console.log(`error message: ${error}`);
  }
};

const test = randomString();
/* ping
aircallAPI('GET','ping');
/* users
aircallAPI('GET','users');
/* users availabilities
aircallAPI('GET','users/availabilities');
/* create user
aircallAPI('POST','users',{
  email: `koen.verduijn+${randomString()}@aircall.io`,
  first_name: 'Koen Test',
  last_name: randomString(),
  availability_status: 'available',
  is_admin: true
});
/* update user
aircallAPI('PUT','users',{
  email: `koen.verduijn+${test}@aircall.io`,
  first_name: 'Koen Test',
  last_name: test,
  availability_status: 'available',
  is_admin: true
},'736641');
/* delete user
aircallAPI('DELETE','users',null,'736641'); */