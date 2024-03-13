FROM public.ecr.aws/lambda/nodejs:20

COPY package*.json /var/task/

RUN npm install 

COPY . /var/task/



# RUN npm ci --production

CMD [ "app.handler" ]