#!/bin/bash
cd /home/kavia/workspace/code-generation/simplerecipemanager-39976-f0503240/simplerecipe_manager
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

