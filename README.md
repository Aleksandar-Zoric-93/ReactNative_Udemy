# React Native
React Native course content from Udemy.

Link: https://www.udemy.com/course/react-native-the-practical-guide/

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--DsRi1C7P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8m2htjjpp31idwz8wnrz.jpg)

### Bugfix in Node.Js when running npm start
Go to node_modules > metro-config > src > defaults and replace existing code with this:
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

