SELECT 'CREATE DATABASE iontaskdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE dotname = 'iontaskdb')\gexec