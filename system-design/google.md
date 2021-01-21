Q: What happens when you type google.com

1. 'g' is pressed
  * auto-complete algorithm

2. 'enter' is pressed
  * sends a message to keyboard hardware, converts to '13'
  * goes through OS hardware abstraction layer

3. parse URL (uniform resource locator)
  * http     - Hyper Text Transfer Protocol
  * resource - '/' retrieve main page from google

4. check HSTS (HTTP Strict Transport Security)
  * if in HSTS, send request via HTTPS else HTTP

5. DNS Lookup
  * Browser cache 
  * OS Cache
  * Router Cache
  * ISP DNS Cache
  * Recursive search

6. DNS division
  * Round-robin DNS
  * Load balancer DNS
  * Geographic DNS
  * Anycast DNS - maps to multiple physical servers

7. Opening a socket (TLS handshake)
  * [HTTP, HTTPS] - [80, 443]
  * TLS handshake - cert from server signed by authority

8. HTTP Protocol
  * 

