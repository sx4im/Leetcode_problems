# 192. Word Frequency
tr -s ' ' '\n' < words.txt | \
tr -d '\r' | \
awk '{count[$1]++} END {for (word in count) print word, count[word]}' | \
sort -k2 -nr
