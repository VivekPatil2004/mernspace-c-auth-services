# Use the official Node.js image as our base

FROM node:18

# Set the Working directory inside the conatiner
WORKDIR /usr/src/app


#Copy package .json and package-lock.json first to leverage Docker cache

COPY package*.json ./


#Install app Dependacies

RUN npm install


#Copy the rest of our app's source code into container

COPY . .

# Expose the port the app will run on

EXPOSE 5501

# The command to run our app

CMD ["npm","run","dev"]