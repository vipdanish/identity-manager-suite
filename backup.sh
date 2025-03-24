
#!/bin/bash

# Configuration
BACKUP_DIR="/home/$(whoami)/backups/mongodb"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="mongodb_backup_$TIMESTAMP.gz"
MONGO_USER=${MONGO_USERNAME:-admin}
MONGO_PASS=${MONGO_PASSWORD:-password}

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Run the backup command
echo "Starting MongoDB backup..."
docker exec mongodb mongodump --username $MONGO_USER --password $MONGO_PASS --authenticationDatabase admin --archive=/tmp/backup.gz --gzip

# Copy the backup from the container
echo "Copying backup file..."
docker cp mongodb:/tmp/backup.gz $BACKUP_DIR/$BACKUP_FILE

# Clean up old backups (keep only the last 7)
echo "Cleaning up old backups..."
ls -tp $BACKUP_DIR/*.gz | grep -v '/$' | tail -n +8 | xargs -I {} rm -- {}

echo "Backup completed: $BACKUP_DIR/$BACKUP_FILE"
echo "Size: $(du -h $BACKUP_DIR/$BACKUP_FILE | cut -f1)"
echo "Date: $(date)"

# Make the script executable with: chmod +x backup.sh
