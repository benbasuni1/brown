# TinyURL

* URL shortening is used to optimize links across devices

### 1. Requirements
  * Front end
    1. Generate short link.
    2. Redirect short link 
    3. Customize short link
    4. Expires short link

  * Back end
    5. High availability
    6. Min latency
    7. Randomly generated

  * Other
    8. Analytics
    9. API availability

### 2. Estimation
  1. Read-heavy (100:1 read/write ratio)
  2. Traffic Estimates
      * 500M urls/month
      * Queries : 500M / (30 days * 24 hrs * 3600s) = ~200 urls/s
      * URL redirection : 100 * 200 urls/s = 20k/s
  3. Storage Estimates
      * 500M * 5 years * 12 months = 30B
      * 30B * 500 bytes = 15TB
  4. Bandwidth Estimates
      * write : 200 * 500 bytes = 100 KB/s
      * read  : 20k * 500 bytes = ~10 MB/s
  5. Memory Estimates
      * 20k * 3600s * 24hrs = ~1.7B
      * 0.2 * 1.7B * 500bytes = ~170GB

  Summary:
    * New URLS         : 200   /s
    * URL redirections : 20   k/s
    * Incoming Data    : 100 kb/s
    * Outgoing Data    : 10  mb/s
    * 5yr storage      : 15    TB
    * Cache memory     : 170   GB
    
### 3. System API
  * createURL(
      api_key,  
      url,
      custom=None,
      user_name=None,
      expire=None
    ) returns : string

  * deleteURL(
      api_key,
      url_key
    ) return 'URL removed'

  * each apiKey is limited to certain # of URL creations per some period of time

### 4. Database Design
  * Store 1B records
  * Each record < 1k
  * No relationships between records except user (NoSQL)
      - dynamoDB, Cassandra, Riak
  * read-heavy

  * url:
      - hash (PK)  : string
      - originalURL: string
      - created    : datetime
      - expiration : datetime
      - userID     : int

  * user:
      - userID (PK) : int
      - name        : string
      - email       : string
      - created     : datetime
      - lastlogin   : datetime

### 5. Basic System Design
  * Encoding actual URL
      - MD5/SHA256 unique hash of URL 
      - base64
      - 6  chars : 6^64 = ~68.7B
      - 8  chars : 8^64 = ~281T
      - Prevent duplicates by adding time/hash  
      - Check database if exists, if it does, add time again until unique
  * Generating Keys offline
      - Key Generation Service (KGS)
      - Generates these 6-letter strings beforehand and stores them in DB
      - Use 2 tables: 
          - 1 for keys not used
          - 1 for keys used
      - As soon as key is used, move it to 2nd table automatically as to prevent concurrency
      - size of KeyDB : 6 * 68.7B = 412GB

###  6. Data Partitioning/Replication



