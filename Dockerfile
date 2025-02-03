FROM node:14

WORKDIR /usr/src/app

COPY challenge_a.js ./
COPY challenge_b.js ./

CMD ["sh", "-c", "node challenge_a.js && node challenge_b.js"]
