curl -H "hibp-api-key:a4d3525a3aae4f19bc8d99ac318cca65" -H "user-agent: Beyond the Frame" -sS https://haveibeenpwned.com/api/v3/breachedaccount/aalexa.z0t0va%40gmail.com?truncateResponse=false -o "/pwned-accounts.json"

(require '[clojure.data.json :as json])
(def accounts (json/read-str (slurp "/pwned-accounts.json") :key-fn keyword))

(pprint accounts)
accounts