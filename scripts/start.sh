docker build -t test-ms .
docker-compose up -d 
docker container exec -it rabbitmq-event-bus rabbitmq-plugins enable rabbitmq_management