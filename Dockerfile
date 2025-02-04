FROM node:lts

WORKDIR /usr/src/app

COPY challenge_a.js ./
COPY challenge_b.js ./

VOLUME /usr/src/app/output
VOLUME /usr/src/app/analysis_results

CMD ["sh", "-c", "node challenge_a.js && node challenge_b.js | tee analysis_results/analysis_results.txt && exit 0"]

