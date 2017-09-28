FROM node:alpine
 
# Create app directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
# Install app dependencies
# COPY package.json /usr/src/app/
RUN yarn
 
# Bundle app source
COPY . /usr/src/app
 
EXPOSE 3000
CMD [ "yarn", "dev" ]
# docker run -v $(pwd)/:/usr/src/app -it servicr
# $ docker build -t tfpractice/servicr .
