# CompClubs new and improved website

This project was built and deployed by the 2022 Dev Team\
Updated and maintained by future Dev Teams
You can find the website here: https://compclub.org/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Getting started with firebase
We are currently using Firebase to deploy the website- https://firebase.google.com/docs/hosting/quickstart 

Once you have downloaded the repo onto your own computer and want to have access to the firebase commands, type 'firebase login' and follow the steps to connect your local machine to the firebase database

## Deployment

If you have made changes to the website and would like to redploy it, follow these steps.

### Step 1
Once you have made changes to the website, run 'npm run build' to create a production build for the website

### Step 2
Type 'firebase deploy' into the command line, which will then deploy the website to server 

### Step 3
Enjoy your newly deployed website!

### How the deployment works
'npm run build' takes all the files in your project and the files in the 'public' folder and creates a production folder called 'build' 

Firebase then takes that folder and publishes it too their servers, linking it to the url that we've bought.

### Extras
**Taking down the website**: Incase something has gone wrong with the website type 'firebase hosting:disable' and then hit 'y'

Avoid using 'firebase init' unless something has completely broke as it has already been configured to work properly.


## Credits
### Created, designed and deployed by the Development Team 2022:
Raghav Lall \
Noah Gordon \
Eeman Chaudhry \
Joanna He \
Rovielyn Espiritu \
Sohum Jain \
Winnie Zhang \
Zac Saber



