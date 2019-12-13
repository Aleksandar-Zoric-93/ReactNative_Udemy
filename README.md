# React Native
React Native course content from Udemy.

Link: https://www.udemy.com/course/react-native-the-practical-guide/

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--DsRi1C7P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8m2htjjpp31idwz8wnrz.jpg)

### Bugfix in Node.Js when running npm start
This was occuring on Node.js version 6.13.0
Go to node_modules > metro-config > src > defaults and replace existing code with this:

```javascript
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

### Fix for package vulnerability found in GitHub
Open your IDE's default terminal in the project folder and run the following commands;

```javascript
npm update
npm audit fix
npm install <package-name> (e.g. npm install mem)
```
Once all the above commands are successfully executed, commit the changes to GitHub.

