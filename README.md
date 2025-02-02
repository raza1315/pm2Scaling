# **PM2 Setup Guide for Node.js Applications**

 # **Installation**
To install PM2 globally on your system:
```bash
npm install -g pm2
```


## **Running Node.js Application on Multiple CPU Cores**

Run the application on the maximum available CPU cores in **watch mode** (automatically restarts on file changes):
```bash
pm2 start index.js -i max --watch
```
- `-i max`: Runs the app on all available CPU cores.
- `--watch`: Restarts the app when file changes are detected.

---

## **Viewing Logs and Process List**

- **View Logs:**
  ```bash
  pm2 logs
  ```
- **List Running Processes:**
  ```bash
  pm2 list
  ```

---

## **Monitor Resource Usage**

To monitor CPU, memory, and other resource usage:
```bash
pm2 monit
```

---

## **Enable Auto-Restart on System Reboot**

1. Enable PM2 to start automatically on reboot:
   ```bash
   pm2 startup
   ```
   - Follow the on-screen instructions to run the generated command.

2. Save the current process list for auto-restart:
   ```bash
   pm2 save
   ```

---
