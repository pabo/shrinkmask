# shrinkmask
Use in conjunction with npm shrinkwrap. shrinkmask will overwrite values from shrinkwrap.

## Example

Create a `npm-shrinkmask.json`, which should have the same structure as `npm-shrinkwrap.log`, but only specifying the values you want to mask out.
````
{
  "dependencies": {
    "css-loader": {
      "dependencies": {
        "cssnano": {
          "dependencies": {
            "postcss-svgo": {
              "dependencies": {
                "svgo": {
                  "version": "0.6.ONEMILLION",
                  "from": "svgo@^0.6.6",
                  "resolved": "https://registry.npmjs.intuit.net/s/svgo/_attachments/svgo-0.6.6.tgz"
                }
              }
            }
          }
        }
      }
    }
  }
}
````
