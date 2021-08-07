/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    Trie.prototype.root = new this.Node('*')
};

Trie.prototype.root = undefined;

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;
    for(let i =0 ; i < word.length; i++) {
        const c = word.charAt(i);
        if(current.children[c] == null) {
            current.children[c] = new this.Node(c);
        }
        current = current.children[c]
    }
    current.isWord = true;
};

Trie.prototype.Node = function(c) {
    this.value = c ?? '';
    this.children = [];
    this.isWord = false;
}

Trie.prototype.getNode = function(word) {
    let current = this.root;
    for(let i=0; i < word.length; i++) {
        const c = word.charAt(i);
        if(current.children[c] == null) {
            //atlease one character is not present
            return null;
        }
        current = current.children[c]
    }
    return current;
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * 
/**@return {boolean}
 */
Trie.prototype.search = function(word) {
    const wordNode = this.getNode(word);
    if(wordNode && wordNode.isWord) return true;
    else return false;
    
};


Trie.prototype.startsWith = function(prefix) {
    const result = this.getNode(prefix);
    if(result) return true;
    else return false;
};


 var obj = new Trie()
 obj.insert('cats')
 obj.insert('car')
 var param_2 = obj.search('cats')
 var param_3 = obj.startsWith('car')
console.log(param_2,param_3)