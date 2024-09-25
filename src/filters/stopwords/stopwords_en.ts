const stopwords_en = new Set([
    "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", 
    "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", 
    "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", 
    "theirs", "themselves", "what", "which", "who", "whom", "this", "that", 
    "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", 
    "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", 
    "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", 
    "at", "by", "for", "with", "about", "against", "between", "into", "through", 
    "during", "before", "after", "above", "below", "to", "from", "up", "down", 
    "in", "out", "on", "off", "over", "under", "again", "further", "then", 
    "once", "here", "there", "when", "where", "why", "how", "all", "any", 
    "both", "each", "few", "more", "most", "other", "some", "such", "no", 
    "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", 
    "t", "can", "will", "just", "don", "should", "now", "d", "ll", "m", "o", 
    "re", "ve", "y", "ain", "aren", "couldn", "didn", "doesn", "hadn", "hasn", 
    "haven", "isn", "ma", "mightn", "mustn", "needn", "shan", "shouldn",
    "wasn", "weren", "won", "wouldn", "across", "afterwards", "almost", 
    "alone", "along", "already", "also", "although", "always", "among", 
    "amongst", "amoungst", "amount", "another", "anyhow", "anyone", 
    "anything", "anyway", "anywhere", "around", "back", "became", 
    "become", "becomes", "becoming", "beforehand", "behind", "beside", 
    "besides", "beyond", "bill", "bottom", "call", "cannot", "cant", "co", 
    "con", "could", "couldnt", "cry", "de", "describe", "detail", "done", 
    "due", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", 
    "enough", "etc", "even", "ever", "every", "everyone", "everything", 
    "everywhere", "except", "fifteen", "fify", "fill", "find", "fire", "first", 
    "five", "former", "formerly", "forty", "found", "four", "front", "full", 
    "get", "give", "go", "hence", "hereafter", "hereby", "herein", "hereupon",
    "yo", "u", "r", "ur", "pls", "plz", "thx", "omg", "lol", "btw", "idk", "imo", 
    "brb", "bbl", "ttyl", "gr8", "b4", "l8r", "smh", "fyi", "jk", "np", "tbt",
    "tbf", "tmi", "wtf", "yolo", "fomo", "icymi", "irl", "nvm", "rofl", "tbh",
    "tldr", "omw", "bday", "bff", "btwn", "cya", "dm", "fb", "ff", "ftw", "hmu",
    "ist", "k", "lmao", "lmk", "mcm", "nsfw", "obvi", "ppl", "rly", "ymmv", "yw"
]);

export { stopwords_en };
