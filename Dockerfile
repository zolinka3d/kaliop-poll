FROM public.ecr.aws/lambda/nodejs:20

# COPY *.js package*.json /var/task/
COPY . /var/task/

RUN npm install 

# RUN npm ci --production

CMD [ "app.handler" ]