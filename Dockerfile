FROM node:14

WORKDIR /usr/src/app

COPY output.txt ./
COPY challenge_b.js ./

CMD ["node", "challenge_b.js"]

