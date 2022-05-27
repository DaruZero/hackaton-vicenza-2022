#!/bin/bash
cd /home/ec2-user
# docker-compose up -d

ENV="production"
FRONTEND_URI="hack-frontend"
BACKEND_URI="hack-backend"
BACKEND_USERS_URI="hack-backen-users"
BACKEND_EVENTS_URI="hack-backend-events"

FRONTEND="frontend"
BACKEND="backend"
BACKEND_USERS="backen-users"
BACKEND_EVENTS="backend-events"
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

docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$FRONTEND_URI:$FRONTEND
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_URI:$BACKEND
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_USERS_URI:$BACKEND_USERS
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_EVENTS_URI:$BACKEND_EVENTS

docker run --name $FRONTEND -d --network hack -e SERVER_NAME=$FRONTEND 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$FRONTEND_URI:$FRONTEND
docker run --name $BACKEND -d --network hack -e SERVER_NAME=$BACKEND 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_URI:$BACKEND
docker run --name $BACKEND_USERS -d --network hack -e SERVER_NAME=$BACKEND_USERS 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_USERS_URI:$BACKEND_USERS
docker run --name $BACKEND_EVENTS -d --network hack -e SERVER_NAME=$BACKEND_EVENTS 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_EVENTS_URI:$BACKEND_EVENTS