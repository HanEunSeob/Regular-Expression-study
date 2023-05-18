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
