## 정규표현식
### 정규표현식(regular expression)은 일종의 문자를 표현하는 공식으로, 특정 규칙이 있는 문자열 집합을 추출할 때 자주 사용되는 기법입니다.
### 주로 Prograaming Language나 Text Editor등에서 문자열의 검색과 치환을 위한 용도로 쓰이고 있습니다.

## 파이썬과 정규표현식
### 파이썬은 정규 표현식을 지원하기 위해 re(regular expression)모듈을 제공합니다.

<code> import re
       pattern = re.compile("정규식")</code>
### re.compile을 사용하여 정규 표현식을 컴파일합니다. re.compile의 결과인 객체 pattern에 입력한 정규식의 대한 정보가 담겨있습니다.
### 이제 pattern객체를 이용해 문자열 검색을 수행해보겠습니다. 컴파일된 패턴 객체는 다음과 같은 4가지 메서드를 제공합니다.
