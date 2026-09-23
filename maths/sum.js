export default function sum (...args) {
  if (args.length < 2) {
    throw new Error ("At least 2 arguments are needed!");
  }

  return args.reduce((n, acc) => {
    return acc + n;
  }, 0)
}

// module.exports = {
//   sum
// };