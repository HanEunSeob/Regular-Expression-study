// 공백 확인
const CHECK_SPACE = /\s+/;

console.log(CHECK_SPACE.test(' '));
console.log(CHECK_SPACE.test('1 '));
console.log(CHECK_SPACE.test(' a'));
console.log(CHECK_SPACE.test(' 1 a '));

// 숫자 확인
const ONLY_NUMBER = /^[0-9]*$/;

console.log(ONLY_NUMBER.test('123456789'));

// 영문자 확인
const ONLY_ENGLISH = /^[a-zA-Z]*$/;

console.log(ONLY_ENGLISH.test('a'));
console.log(ONLY_ENGLISH.test('aA'));

// 이메일 양식 확인
const EMAIL_CHECK = /\w+@\w+\.\w+(\.\w+)?/;

console.log(EMAIL_CHECK.test('test@google.com'));

// 전화번호 양식 확인
const TEL_NUMBERS_CHECK = /^\d{2,3}-\d{3,4}-\d{4}$/;

console.log(TEL_NUMBERS_CHECK.test('02-123-1234'));
console.log(TEL_NUMBERS_CHECK.test('031-123-1234'));
console.log(TEL_NUMBERS_CHECK.test('02-1234-1234'));
console.log(TEL_NUMBERS_CHECK.test('031-1234-1234'));

// 핸드폰 번호 양식 확인
const PHONE_NUMBERS_CHECK = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

console.log(PHONE_NUMBERS_CHECK.test('010-1234-1234'));
console.log(PHONE_NUMBERS_CHECK.test('011-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('016-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('017-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('018-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('019-123-1234'));

// 주민등록번호 양식 확인
const IDENTITY_CHECK = /\d{6}\-[1-4]\d{6}/;

console.log(IDENTITY_CHECK.test('220101-4123456'));

// 우편번호 양식 확인
const POSTAL_CODE_CHECK = /^\d{3}-\d{2}$/;

console.log(POSTAL_CODE_CHECK.test('123-12'));