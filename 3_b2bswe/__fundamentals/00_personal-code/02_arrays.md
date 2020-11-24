### 1. Rotate Matrix by 90 Degrees
* size = mLen - 1
* layer = 0; layer < floor (mLen / 2)
* i = layer ; i < size - layer
* layer, i, size - layer, size - i 
* top. right. bot. left.  

### 2. Enumerate Primes
* Create temp arr 01 false, rest true
* for (i=0...n) -> if (temp[i]) then enumerate primes 
* j = i + i; j < n; j ++ i

### 3. Three Sum
* Sort, 3 pointers
* i = 0; 
* L = i + 1; 
* R = aLen - 1