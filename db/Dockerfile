# Dockerfile
FROM postgres

RUN mkdir -p /tmp/psql_data/

COPY db/structure.sql /tmp/psql_data/
COPY scripts/init_docker_postgres.sh /docker-entrypoint-initdb.d/