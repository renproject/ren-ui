#! /bin/sh

nx run-many --target build-storybook --all &&
nx run-many --target copy-assets --all &&
# remove optional packages artifact
rm -r dist/packages | true &&
# build indexers
mkdir -p dist/assets &&
touch dist/assets/index.html &&
cd dist/assets &&
dirlist-static --filter "\.(?!otf$)" > index.html &&
# build main index.html
cd ../
touch index.html
dirlist-static --filter "index.html?$" > index.html

