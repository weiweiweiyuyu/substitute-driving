#!/bin/bash
a="watch"
b="prod"
if [ $1 == $a ]
then
   npm run watch
elif [ $1 == $b ]
then
   npm run watch:prod
else
   echo "没有符合的条件"
fi
