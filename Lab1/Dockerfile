FROM httpd:2.4
COPY . /app-root
RUN npm -g install serve
EXPOSE 8080
CMD ["serve", "-s", "/app", "-p", "8080"]
