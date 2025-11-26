function noSpace(x){
    return x.replace(/\s+/g, '')
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));  // Output: 8j8mBliB8gimjB8B8jlB
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")); // Output: 88Bifk8hB8BB8BBBB888chl8BhBfd