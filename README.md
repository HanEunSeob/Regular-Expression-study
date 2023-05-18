## 정규표현식
### 정규표현식(regular expression)은 일종의 문자를 표현하는 공식으로, 특정 규칙이 있는 문자열 집합을 추출할 때 자주 사용되는 기법입니다.
### 주로 Prograaming Language나 Text Editor등에서 문자열의 검색과 치환을 위한 용도로 쓰이고 있습니다.

## 파이썬과 정규표현식
### 파이썬은 정규 표현식을 지원하기 위해 re(regular expression)모듈을 제공합니다.

<code> 
import re
pattern = re.compile("정규식")
</code>

### re.compile을 사용하여 정규 표현식을 컴파일합니다. re.compile의 결과인 객체 pattern에 입력한 정규식의 대한 정보가 담겨있습니다.
### 이제 pattern객체를 이용해 문자열 검색을 수행해보겠습니다. 컴파일된 패턴 객체는 다음과 같은 4가지 메서드를 제공합니다.

<img width="80%" src="https://github.com/HanEunSeob/regular/assets/133829058/c184023f-b4d6-44bf-bfe9-cd03c9a41e0f"/>

<code> 
import re
p = re.compile('[a-z]+') 
</code>

### 위 코드를 실행해 생성된 객체 p로 메서드를 살펴보겠습니다.

## match
### match 메서드는 문자열의 처음부터 정규식과 매치되는지 조사하며, 반환값으로 match 객체를 돌려줍니다.
<code>
>>> m = p.match("python")
>>> print(m)
<_sre.SRE_Match object at 0x01F3F9F8>
</code>
       
### python문자열은 [a-z]+정규식에 부합되므로 match 객체를 돌려줍니다.
       
### 따라서 파이썬 정규식 프로그램은 다음과 같이 작성해 매치 여부를 확인합니다.
       
<code>
p = re.compile(정규표현식)
m = p.match(문자열)

if m:
    print("정규식 일치")
else:
    print("정규식 불일치")
       </code>
       
## search
### 동일하게 컴파일된 객체 p를 갖고 이번엔 search 메서드를 수행해보겠습니다. 예시를 통해 match와의 차이점을 확인해보시면 좋을 것 같습니다
       
<code>
>>> m = p.search("3 python")
>>> print(m)
<_sre.SRE_Match object at 0x01F3FA30>
       </code>

### 3 python문자열은 첫번째 문자가 숫자이므로 match메서드에서는 None을 반환합니다. 하지만 search메서드는 문자열의 처음부터 검색하는 것이 아니라 문자열 전체를 검색하기 때문에 “python”문자열과 매치돼서 match객체를 반환하게 됩니다.
       
## findall
### findall 메서드는 이름 그대로 문자열에서 정규식과 일치하는 부분을 찾아 리스트로 반환시켜줍니다.
       
<code>
>>> result = p.findall("life is too short")
>>> print(result)
['life', 'is', 'too', 'short']
       </code>
       
### 정규식과 일치하는 부분인 각 단어들이 반환되는 것을 확인할 수 있습니다.
       
## finditer
### finditer는 findall과 동일하지만 그 결과로 반복 가능한 객체를 돌려줍니다.

<code>
>>> result = p.finditer("life is too short")
>>> print(result)
<callable_iterator object at 0x01F5E390>
>>> for r in result: print(r)
...
<_sre.SRE_Match object at 0x01F3F9F8>
<_sre.SRE_Match object at 0x01F3FAD8>
<_sre.SRE_Match object at 0x01F3FAA0>
<_sre.SRE_Match object at 0x01F3F9F8>
       </code>
       
### 반복 가능한 객체가 포함하는 각각의 요소는 match 객체입니다.
       
# 코드 예제
## 공백 확인 

<code>
const CHECK_SPACE = /\s+/;

console.log(CHECK_SPACE.test(' '));
console.log(CHECK_SPACE.test('1 '));
console.log(CHECK_SPACE.test(' a'));
console.log(CHECK_SPACE.test(' 1 a '));
       </code>
       
## 숫자 확인

<code>
const ONLY_NUMBER = /^[0-9]*$/;

console.log(ONLY_NUMBER.test('123456789'));
       </code>
       
## 영문자 확인
       
<code>
const ONLY_ENGLISH = /^[a-zA-Z]*$/;

console.log(ONLY_ENGLISH.test('a'));
console.log(ONLY_ENGLISH.test('aA'));
       </code>
       
## 이메일 양식 
       
<code>
const EMAIL_CHECK = /\w+@\w+\.\w+(\.\w+)?/;

console.log(EMAIL_CHECK.test('test@google.com'));
       </code>
       
## 전화번호 양식 확인

<code>
const TEL_NUMBERS_CHECK = /^\d{2,3}-\d{3,4}-\d{4}$/;

console.log(TEL_NUMBERS_CHECK.test('02-123-1234'));
console.log(TEL_NUMBERS_CHECK.test('031-123-1234'));
console.log(TEL_NUMBERS_CHECK.test('02-1234-1234'));
console.log(TEL_NUMBERS_CHECK.test('031-1234-1234'));
       </code>

## 핸드폰 번호 양식 확인
       
<code>
const PHONE_NUMBERS_CHECK = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

console.log(PHONE_NUMBERS_CHECK.test('010-1234-1234'));
console.log(PHONE_NUMBERS_CHECK.test('011-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('016-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('017-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('018-123-1234'));
console.log(PHONE_NUMBERS_CHECK.test('019-123-1234'));
       </code>
       
## 주민등록번호 양식 확인
       
<code>
const IDENTITY_CHECK = /\d{6}\-[1-4]\d{6}/;

console.log(IDENTITY_CHECK.test('220101-4123456'));
       </code>
       
## 우편번호 양식 확인
       
<code>
const POSTAL_CODE_CHECK = /^\d{3}-\d{2}$/;

console.log(POSTAL_CODE_CHECK.test('123-12'));
       </code>

#### 출처
##### https://sooftware.io/regex/
##### https://7942yongdae.tistory.com/166
