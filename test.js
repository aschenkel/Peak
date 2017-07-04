var API_URL = "https://api.twitter.com/1.1/statuses/user_timeline.json"

fetch(API_URL + 'user/', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            }
          })
          .then((response) => {
            response.json().then((data) => {
              if (response.ok) {
                resolve(data);
              } else {
                reject(data);
              }
            });
          })
          .catch((error) => {
            reject(error);
          });