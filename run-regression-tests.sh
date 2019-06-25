whoami
docker-compose down
docker-compose up -d selenium zalenium 
docker-compose up --exit-code-from nodeSetup


if [ $? = 0 ]; then
  #docker-compose down
  printf '%s\n' "Test Pass"
  exit 0
else
   #docker-compose down
   printf '%s\n' "Test Failed"
   exit 1
fi
