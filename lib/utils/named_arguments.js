export default function(argv) {
  const namedArgs = {};

  Object.keys(argv).forEach((key) => {
    let val = argv[key];

    if ( key !== '_' && key !== '$0' ) {
      namedArgs[key] = val;
    }
  });

  return namedArgs;
}
