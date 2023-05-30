echo
echo "eslint griffley.ts"
if npx eslint griffley.ts
then
  echo "done"
else
  exit
fi
echo
#
echo "transpiling griffley.ts"
if npx tsc
then
  echo "done"
else
  exit
fi
echo