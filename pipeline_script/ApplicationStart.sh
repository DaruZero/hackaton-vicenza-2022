#!/bin/bash
cd /home/ec2-user
# docker-compose up -d

ENV="production"
FRONTEND="frontend"
BACKEND="backend"
BACKEND_USERS="backen_users"
BACKEND_EVENTS="backendnosql"
# ENV_FILE="./env_files/prod.env"
BACKEND_PORT="80"
FRONTEND_PORT="4001"
BACKEND_USERS_PORT="4002"
BACKEND_EVENTS_PORT="4003"

docker stop $FRONTEND
docker stop $BACKEND
docker stop $BACKEND_USERS
docker stop $BACKEND_EVENTS

docker rm $FRONTEND
docker rm $BACKEND
docker rm $BACKEND_USERS
docker rm $BACKEND_EVENTS

docker image prune -f
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 495849476805.dkr.ecr.eu-west-1.amazonaws.com

docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$FRONTEND:$FRONTEND
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND:$BACKEND
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_USERS:$BACKEND_USERS
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_EVENTS:$BACKEND_EVENTS

docker run --name $FRONTEND -d --network hack -e SERVER_NAME=$FRONTEND 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$FRONTEND:$FRONTEND
docker run --name $BACKEND -d --network hack -e SERVER_NAME=$BACKEND 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND:$BACKEND
docker run --name $BACKEND_USERS -d --network hack -e SERVER_NAME=$BACKEND_USERS 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_USERS:$BACKEND_USERS
docker run --name $BACKEND_EVENTS -d --network hack -e SERVER_NAME=$BACKEND_EVENTS 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_EVENTS:$BACKEND_EVENTS