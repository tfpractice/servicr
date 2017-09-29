FROM node

# Create app directory
# RUN mkdir -p /app
WORKDIR /app
 
# Install app dependencies
# COPY package.json /app/
# RUN yarn
 
# Bundle app source
# COPY . /usr/src/app
 
# EXPOSE 3000 27017
# CMD [ "yarn", "dev" ]
# docker run -v $(pwd)/:/app -it servicr
# $ docker build -t tfpractice/servicr .
