# 194. Transpose File
awk '
{
    for (i = 1; i <= NF; i++) {
        if (NR == 1)
            col[i] = $i;
        else
            col[i] = col[i] " " $i;
    }
}
END {
    for (i = 1; i <= length(col); i++) {
        print col[i];
    }
}' file.txt
