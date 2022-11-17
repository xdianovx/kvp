#!/bin/bash

file="/docker-entrypoint-initdb.d/dump.pgdata"
dbname=my-db

echo "Restoring DB using $file"
pg_restore -U postgres --dbname=$dbname --verbose --single-transaction < "$file" || exit 1