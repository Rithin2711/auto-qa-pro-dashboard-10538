#!/bin/bash
cd /home/kavia/workspace/code-generation/auto-qa-pro-dashboard-10538/frontend_auto_qa_pro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

