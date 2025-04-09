const lion = {
    name : '사자'
};

const bravelion = {
    ...lion,
    attribute : 'brave'
};

const bravelikelion = {
    ...lion,
    ...bravelion,
    color : 'yellow'
};

console.log(lion);
console.log(bravelion);
console.log(bravelikelion);

const {color, ...seo} = bravelikelion;
console.log(color);
console.log(seo);