chmod +x install.sh
sudo ./install.sh
chmod +x server_run.sh
./server_run.sh &
chmod +x sleep.sh
./sleep.sh
curl --location --request GET 'http://localhost:8081/memes'
curl --location --request POST 'http://localhost:8081/memes' --header 'Content-Type: application/json' --data-raw '{"name": "xyz","url": "https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fill/w_1064,h_608,al_c,q_90/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.webp","caption": "This is a meme"}'
curl --location --request GET 'http://localhost:8081/memes'
curl --location --request GET 'http://localhost:8080/swagger-ui/'