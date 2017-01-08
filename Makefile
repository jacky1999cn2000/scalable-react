bash:
	docker run -it --rm -p 3000:3000 -v `pwd`:/usr/src/app -w /usr/src/app --entrypoint="bash" node:6.9.2
