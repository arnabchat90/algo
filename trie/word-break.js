/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const trie = new Trie();
    for(let word in wordDict) {
        trie.insert(wordDict[word]);
    }
     
     const result =  trie.verify(s, 0);
     return result;
    
};


class Node {
    constructor(c) {
        this.value = c;
        this.children = [];
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node('*')
        this.dp = {}
    }
    
    insert(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            const c = word.charAt(i);
            if(!current.children[c]) {
                current.children[c] = new Node(c);
            }
            current= current.children[c];            
        }
        current.isWord = true;
    }
    search(k) {
        const node = this.getNode(k);
        return node;
    }

    verify(s, idx) {
        let current = this.root;
        if(idx == s.length) return true;
        if(this.dp[idx] !== null && this.dp[idx] !== undefined) return this.dp[idx];
        for(let i = idx; i < s.length; i++) {
            const c = s.charAt(i);
            if(!current.children[c]) { 
                this.dp[idx] = false;
                return false;
            }
            if(current.children[c].isWord && this.verify(s, i+1)){
                this.dp[idx] = true
                return true;
            }
            current = current.children[c];
        }
        return current.isWord;
    }
    
    getNode(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            const c = word.charAt(i);
            if(!current.children[c]) {
                return null;
            }
            current = current.children[c]
        }
        return current;
    }
  
}

console.log(wordBreak("aaaaaaa", ["aaaa", "aa"]))